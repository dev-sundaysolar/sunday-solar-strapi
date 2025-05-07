/**
 * contact-configurator-page controller
 */

import { factories } from "@strapi/strapi";
import { populateCollection } from "../../../utils/populateCollection";

export default factories.createCoreController(
  "api::contact-configurator-page.contact-configurator-page",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const entity = await strapi
        .documents("api::contact-configurator-page.contact-configurator-page")
        .findFirst(sanitizedQueryParams);

      return populateCollection(
        strapi,
        "api::contact-configurator-page.contact-configurator-page",
        "contact-configurator-page",
        "showContactConfiguratorPage",
        entity,
        sanitizedQueryParams
      );
    },
  })
);
