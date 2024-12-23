/**
 *  article controller
 */

import { factories } from "@strapi/strapi";
import { findBySlug } from "../../../utils/findBySlug";

export default factories.createCoreController(
  "api::article.article",
  ({ strapi }) => ({
    async findOne(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const { id: slug } = ctx.params;
      const article = await findBySlug(
        strapi,
        "api::article.article",
        slug,
        sanitizedQueryParams
      );

      if (!article) {
        return null;
      }

      const sanitizedEntity = await this.sanitizeOutput(article, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
