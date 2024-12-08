/**
 * location controller
 */

import { factories } from "@strapi/strapi";
import { ContentType } from "@strapi/types/dist/uid";

export default factories.createCoreController(
  "api::location.location" as ContentType
);
