/**
 * location service
 */

import { factories } from "@strapi/strapi";
import { ContentType } from "@strapi/types/dist/uid";

export default factories.createCoreService(
  "api::location.location" as ContentType
);
