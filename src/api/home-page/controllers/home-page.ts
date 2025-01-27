/**
 * home-page controller
 */

import { factories } from "@strapi/strapi";
import { populateCollection } from "../../../utils/populateCollection";

module.exports = factories.createCoreController(
  "api::home-page.home-page",
  ({ strapi }) => ({
    // Override the `find` method
    async find(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      // Use the default service to fetch data
      const entity = await strapi
        .documents("api::home-page.home-page")
        .findFirst(sanitizedQueryParams);

      return populateCollection(
        strapi,
        "api::partner.partner",
        "partner",
        "showPartnersList",
        entity,
        sanitizedQueryParams,
      );
    },
  }),
);
