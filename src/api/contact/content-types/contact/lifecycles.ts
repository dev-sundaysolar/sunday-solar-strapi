import { env } from "@strapi/utils";

export default {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: env("DEFAULT_TO_EMAIL"),
        from: env("DEFAULT_FROM_EMAIL"),
        subject: `New Contact: ${result.email}`,
        text: `email: ${result.email} message: ${result.content}`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
