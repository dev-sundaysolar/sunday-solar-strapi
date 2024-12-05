/**
 * projects-page controller
 */

import { factories } from "@strapi/strapi";
import { ContentType } from "@strapi/types/dist/uid";
import { populateCollection } from "../../../utils/populateCollection";

export default factories.createCoreController(
  "api::projects-page.projects-page" as ContentType,
  ({ strapi }) => ({
    // Override the `find` method
    async find(ctx) {
      const { query } = ctx;

      // Use the default service to fetch data
      const entity = await strapi
        .service("api::projects-page.projects-page")
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
