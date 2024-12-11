/**
 * b2b-page controller
 */

import { factories } from "@strapi/strapi";
import { populateCollection } from "../../../utils/populateCollection";

export default factories.createCoreController(
  "api::b2b-page.b2b-page",
  ({ strapi }) => ({
    // Override the `find` method
    async find(ctx) {
      const { query } = ctx;

      // Use the default service to fetch data
      const entity = await strapi.service("api::b2b-page.b2b-page").find(query);

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
