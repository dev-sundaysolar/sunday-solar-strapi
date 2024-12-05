/**
 * projects-page router
 */

import { factories } from "@strapi/strapi";
import { ContentType } from "@strapi/types/dist/uid";

export default factories.createCoreRouter(
  "api::projects-page.projects-page" as ContentType
);
