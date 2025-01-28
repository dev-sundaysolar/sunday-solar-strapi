/**
 * product controller
 */

import { factories } from "@strapi/strapi";
import { findBySlug } from "../../../utils/findBySlug";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const projects: Record<string, any> = await strapi
        .documents("api::product.product")
        .findMany(sanitizedQueryParams);

      const anotherLocaleParams = {
        locale: !sanitizedQueryParams?.locale
          ? "en"
          : sanitizedQueryParams?.locale === "de-DE"
            ? "en"
            : "de-DE",
      };

      const anotherLocaleProduct: Record<string, any> = await strapi
        .documents("api::product.product")
        .findMany({
          locale: anotherLocaleParams.locale,
        });

      const updatedProducts = projects.map((product) => {
        return {
          ...product,
          anotherLocaleSlug:
            anotherLocaleProduct?.find(
              (item) => item.documentId === product.documentId,
            )?.slug ?? product?.slug,
        };
      });

      return this.transformResponse(updatedProducts);
    },
    async findOne(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const { id: slug } = ctx.params;
      const product = await findBySlug(
        strapi,
        "api::product.product",
        slug,
        sanitizedQueryParams,
      );

      if (!product) {
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
        .documents("api::product.product")
        .findOne({
          documentId: product.documentId,
          locale: anotherLocaleParams.locale,
        });

      const productPageEntity = await strapi
        .documents("api::product.product")
        .findMany(sanitizedQueryParams);

      const sanitizedEntity: Record<string, any> = await this.sanitizeOutput(
        product,
        ctx,
      );

      const response = {
        ...sanitizedEntity,
        anotherLocaleSlug: anotherLocaleProject?.slug,
        productCards: {
          ...sanitizedEntity?.productCards,
          list: sanitizedEntity?.productCards?.showProductList
            ? (productPageEntity?.filter(
                (item) => item.slug !== sanitizedEntity.slug,
              ) ?? [])
            : null,
        },
      };

      return this.transformResponse(response);
    },
  }),
);
