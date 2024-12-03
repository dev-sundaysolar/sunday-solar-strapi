/**
 * interview router
 */

import { factories } from "@strapi/strapi";
import { ContentType } from "@strapi/types/dist/uid";

export default factories.createCoreRouter(
  "api::interview.interview" as ContentType
);
