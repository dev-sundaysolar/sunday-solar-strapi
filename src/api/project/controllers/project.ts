/**
 * project controller
 */

import { factories } from "@strapi/strapi";
import { findBySlug } from "../../../utils/findBySlug";

export default factories.createCoreController(
  "api::project.project",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const project = await findBySlug(
        strapi,
        "api::project.project",
        slug,
        sanitizedQueryParams
      );

      const projectPageEntity = await strapi
        .documents("api::projects-page.projects-page")
        .findFirst({
          ...sanitizedQueryParams,
          populate: {
            carousel: {
              populate: {
                list: {
                  populate: ["carouselHero", "linkButton"],
                },
              },
            },
          },
        });

      const sanitizedEntity: Record<string, any> = await this.sanitizeOutput(
        project,
        ctx
      );

      const response = {
        ...sanitizedEntity,
        carousel: {
          ...sanitizedEntity.carousel,
          list: sanitizedEntity.carousel.showCarouselList
            ? projectPageEntity.carousel?.list.filter(
                (item) => item.slug !== sanitizedEntity.slug
              ) ?? []
            : null,
        },
      };

      return this.transformResponse(response);
    },
  })
);
