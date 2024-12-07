import { ContentType } from "@strapi/types/dist/uid";
import { Strapi } from "@strapi/types/dist/core";
import { Any } from "@strapi/types/dist/modules/entity-service/params/filters";

export async function findBySlug(
  strapi: Strapi,
  apiAddress: ContentType,
  slug: string,
  sanitizedQueryParams: Record<string, unknown>
) {
  const [record] = await strapi.documents(apiAddress).findMany({
    ...sanitizedQueryParams,
    filters: { slug } as Any<ContentType>,
  });

  return record;
}
