/**
 * campaign controller
 */

import { factories } from "@strapi/strapi";
import { findBySlug } from "../../../utils/findBySlug";
import { populateCollection } from "../../../utils/populateCollection";

export default factories.createCoreController(
  "api::campaign.campaign",
  ({ strapi }) => ({
    async findOne(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const { id: slug } = ctx.params;
      const campaign = await findBySlug(
        strapi,
        "api::campaign.campaign",
        slug,
        sanitizedQueryParams
      );

      if (!campaign) {
        return null;
      }

      const anotherLocaleParams = {
        locale: !sanitizedQueryParams?.locale
          ? "en"
          : sanitizedQueryParams?.locale === "de-DE"
            ? "en"
            : "de-DE",
      };

      const anotherLocaleCampaign: Record<string, any> = await strapi
        .documents("api::campaign.campaign")
        .findOne({
          documentId: campaign.documentId,
          locale: anotherLocaleParams.locale,
        });

      const sanitizedEntity: Record<string, any> = await this.sanitizeOutput(
        campaign,
        ctx
      );

      const response = {
        ...sanitizedEntity,
        reviews: campaign.reviews,
        anotherLocaleSlug: anotherLocaleCampaign?.slug,
      };

      return populateCollection(
        strapi,
        "api::partner.partner",
        "partners",
        "showPartnersList",
        response,
        sanitizedQueryParams
      );
    },
  })
);
