/**
 * company-and-team controller
 */

import { factories } from "@strapi/strapi";
import { populateCollection } from "../../../utils/populateCollection";

export default factories.createCoreController(
  "api::company-and-team.company-and-team",
);

module.exports = factories.createCoreController(
  "api::company-and-team.company-and-team",
  ({ strapi }) => ({
    // Override the `find` method
    async find(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      // Use the default service to fetch data
      const entity = await strapi
        .documents("api::company-and-team.company-and-team")
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
