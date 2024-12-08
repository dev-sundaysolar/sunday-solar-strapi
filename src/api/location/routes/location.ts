/**
 * location router
 */

import { factories } from "@strapi/strapi";
import { ContentType } from "@strapi/types/dist/uid";

export default factories.createCoreRouter(
  "api::location.location" as ContentType
);
