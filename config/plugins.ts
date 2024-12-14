export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.strato.de",
        port: env.int("SMTP_PORT", 465), // Use 465 for SSL or 587 for TLS
        secure: env.bool("SMTP_SECURE", true), // true for port 465, false for port 587
        auth: {
          user: env("SMTP_USERNAME"), // Your Strato email address
          pass: env("SMTP_PASSWORD"), // Your Strato email password
        },
      },
      settings: {
        defaultFrom: env("DEFAULT_FROM_EMAIL"), // Replace with your email
        defaultReplyTo: env("DEFAULT_TO_EMAIL"), // Replace with your email
      },
    },
  },
});
