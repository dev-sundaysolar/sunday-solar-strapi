import type { Core } from "@strapi/strapi";
import { version } from "../package.json";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {
    console.log("SundaySolar Version: ", version);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // strapi.db.query("api::partner.partner").findMany({
    //   populate: true,
    // });
  },
};
