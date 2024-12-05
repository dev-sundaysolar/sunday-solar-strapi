/**
 * projects-page service
 */

import { factories } from "@strapi/strapi";
import { ContentType } from "@strapi/types/dist/uid";

export default factories.createCoreService(
  "api::projects-page.projects-page" as ContentType
);
