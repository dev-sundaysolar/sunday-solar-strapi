/**
 * interview controller
 */

import { factories } from "@strapi/strapi";
import { ContentType } from "@strapi/types/dist/uid";

export default factories.createCoreController(
  "api::interview.interview" as ContentType
);
