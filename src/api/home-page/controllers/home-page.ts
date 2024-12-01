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
      const { query } = ctx;

      // Use the default service to fetch data
      const entity = await strapi
        .service("api::home-page.home-page")
        .find(query);

      return populateCollection(
        strapi,
        "api::partner.partner",
        "partners",
        "showPartnersList",
        entity
      );
    },
  })
);
