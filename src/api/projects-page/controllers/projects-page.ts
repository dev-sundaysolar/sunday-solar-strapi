/**
 * projects-page controller
 */

import { factories } from "@strapi/strapi";
import { populateCollection } from "../../../utils/populateCollection";

export default factories.createCoreController(
  "api::projects-page.projects-page",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const entity = await strapi
        .documents("api::projects-page.projects-page")
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
