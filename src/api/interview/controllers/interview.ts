/**
 * interview controller
 */

import { factories } from "@strapi/strapi";
import { ContentType } from "@strapi/types/dist/uid";

export default factories.createCoreController(
  "api::interview.interview" as ContentType,
  ({ strapi }) => ({
    // Query by slug
    async findOne(ctx) {
      // thanks to the custom route we have now a slug variable
      // instead of the default id
      const { id: slug } = ctx.params;
      const entity = await strapi.db.query("api::interview.interview").findOne({
        where: { slug },
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
