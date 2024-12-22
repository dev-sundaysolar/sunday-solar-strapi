import { env } from "@strapi/utils";

export default {
  async afterCreate(event) {
    const { result } = event;

    if (result?.email && result?.content) {
      try {
        await strapi.plugins["email"].services.email.send({
          to: env("DEFAULT_TO_EMAIL"),
          from: env("DEFAULT_FROM_EMAIL"),
          subject: `New Contact: ${result.email}`,
          text: `email: ${result.email} message: ${result.content}`,
        });
        await strapi.plugins["email"].services.email.send({
          to: result.email,
          from: env("DEFAULT_FROM_EMAIL"),
          subject: `Sunday Solar Support`,
          text: `We received your contact form`,
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
};
