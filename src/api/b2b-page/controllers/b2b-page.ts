/**
 * b2b-page controller
 */

import { factories } from "@strapi/strapi";
import { populateCollection } from "../../../utils/populateCollection";

export default factories.createCoreController(
  "api::b2b-page.b2b-page",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const entity = await strapi
        .documents("api::b2b-page.b2b-page")
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
