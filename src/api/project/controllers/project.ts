/**
 * project controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::project.project",
  ({ strapi }) => ({
    // Query by slug
    async findOne(ctx) {
      // thanks to the custom route we have now a slug variable
      // instead of the default id
      const { id: slug } = ctx.params;
      const entity = await strapi.db.query("api::project.project").findOne({
        populate: {
          moreDetails: {
            populate: true,
          },
          processSteps: {
            populate: true,
          },
          relatedProjects: {
            select: ["heading2", "id"],
            populate: {
              list: {
                populate: ["heading2", "id", "description", "image"],
              },
            },
          },
          faq: {
            populate: ["heading2", "list", "id"],
          },
          image: true,
        },
        where: { slug, locale: ctx.query?.locale ?? "de-DE" },
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
