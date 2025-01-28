/**
 * project controller
 */

import { factories } from "@strapi/strapi";
import { findBySlug } from "../../../utils/findBySlug";

export default factories.createCoreController(
  "api::project.project",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const projects: Record<string, any> = await strapi
        .documents("api::project.project")
        .findMany(sanitizedQueryParams);

      const anotherLocaleParams = {
        locale: !sanitizedQueryParams?.locale
          ? "en"
          : sanitizedQueryParams?.locale === "de-DE"
            ? "en"
            : "de-DE",
      };

      const anotherLocaleProject: Record<string, any> = await strapi
        .documents("api::project.project")
        .findMany({
          locale: anotherLocaleParams.locale,
        });

      const updatedProjects = projects.map((project) => {
        return {
          ...project,
          anotherLocaleSlug:
            anotherLocaleProject?.find(
              (item) => item.documentId === project.documentId,
            )?.slug ?? project?.slug,
        };
      });

      return this.transformResponse(updatedProjects);
    },
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const project: Record<string, any> = await findBySlug(
        strapi,
        "api::project.project",
        slug,
        sanitizedQueryParams,
      );

      if (!project || !project?.hasDetailsPage) {
        return null;
      }

      const anotherLocaleParams = {
        locale: !sanitizedQueryParams?.locale
          ? "en"
          : sanitizedQueryParams?.locale === "de-DE"
            ? "en"
            : "de-DE",
      };

      const anotherLocaleProject: Record<string, any> = await strapi
        .documents("api::project.project")
        .findOne({
          documentId: project.documentId,
          locale: anotherLocaleParams.locale,
        });

      const projectPageEntity = await strapi
        .documents("api::projects-page.projects-page")
        .findFirst({
          ...sanitizedQueryParams,
          populate: {
            projectsHeroSlider: {
              populate: {
                list: {
                  populate: ["carouselHero"],
                },
              },
            },
          },
        });

      const sanitizedEntity: Record<string, any> = await this.sanitizeOutput(
        project,
        ctx,
      );

      const response = {
        ...sanitizedEntity,
        anotherLocaleSlug: anotherLocaleProject?.slug,
        projectDetailCarousel: {
          ...sanitizedEntity?.projectDetailCarousel,
          list: sanitizedEntity?.projectDetailCarousel?.showCarouselList
            ? (projectPageEntity?.projectsHeroSlider?.list.filter(
                (item) => item.slug !== sanitizedEntity.slug,
              ) ?? [])
            : null,
        },
      };

      return this.transformResponse(response);
    },
  }),
);
