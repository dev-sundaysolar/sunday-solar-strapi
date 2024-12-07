/**
 * interview controller
 */

import { factories } from "@strapi/strapi";
import { ContentType } from "@strapi/types/dist/uid";
import { findBySlug } from "../../../utils/findBySlug";

export default factories.createCoreController(
  "api::interview.interview" as ContentType,
  ({ strapi }) => ({
    async findOne(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const { id: slug } = ctx.params;
      const interview = await findBySlug(
        strapi,
        "api::interview.interview" as ContentType,
        slug,
        sanitizedQueryParams
      );
      const sanitizedEntity = await this.sanitizeOutput(interview, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
