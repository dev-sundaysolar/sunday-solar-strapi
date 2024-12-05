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
        where: { slug },
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
