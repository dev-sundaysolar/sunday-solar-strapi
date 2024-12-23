/**
 * product controller
 */

import { factories } from "@strapi/strapi";
import { findBySlug } from "../../../utils/findBySlug";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async findOne(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const { id: slug } = ctx.params;
      const product = await findBySlug(
        strapi,
        "api::product.product",
        slug,
        sanitizedQueryParams
      );

      if (!product) {
        return null;
      }

      const productPageEntity = await strapi
        .documents("api::product.product")
        .findMany(sanitizedQueryParams);

      const sanitizedEntity: Record<string, any> = await this.sanitizeOutput(
        product,
        ctx
      );

      const response = {
        ...sanitizedEntity,
        productCards: {
          ...sanitizedEntity?.productCards,
          list: sanitizedEntity?.productCards?.showProductList
            ? productPageEntity?.filter(
                (item) => item.slug !== sanitizedEntity.slug
              ) ?? []
            : null,
        },
      };

      return this.transformResponse(response);
    },
  })
);
