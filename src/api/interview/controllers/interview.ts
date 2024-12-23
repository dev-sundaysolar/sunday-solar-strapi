/**
 * interview controller
 */

import { factories } from "@strapi/strapi";
import { findBySlug } from "../../../utils/findBySlug";

export default factories.createCoreController(
  "api::interview.interview",
  ({ strapi }) => ({
    async findOne(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const { id: slug } = ctx.params;
      const interview = await findBySlug(
        strapi,
        "api::interview.interview",
        slug,
        sanitizedQueryParams
      );

      if (!interview) {
        return null;
      }

      const sanitizedEntity = await this.sanitizeOutput(interview, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
