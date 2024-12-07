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
      const sanitizedEntity = await this.sanitizeOutput(project, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
