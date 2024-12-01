import { Strapi } from "@strapi/types/dist/core";
import { ContentType } from "@strapi/types/dist/uid";

export async function populateCollection(
  strapi: Strapi,
  apiAddress: ContentType,
  entityFieldName: string,
  entityIsShowFieldName: string,
  entity: any
) {
  const collection = await strapi.documents(apiAddress).findMany({
    populate: "*",
    where: {
      publishedAt: {
        $notNull: true,
      },
    },
    status: "published",
  });

  return {
    data: {
      ...entity,
      [entityFieldName]: entity?.[entityFieldName]
        ? {
            ...entity?.[entityFieldName],
            list: entity?.[entityFieldName]?.[entityIsShowFieldName]
              ? collection
              : [],
          }
        : undefined,
    },
  };
}
