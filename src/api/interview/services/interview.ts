/**
 * interview service
 */

import { factories } from "@strapi/strapi";
import { ContentType } from "@strapi/types/dist/uid";

export default factories.createCoreService(
  "api::interview.interview" as ContentType
);
