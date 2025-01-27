import { env } from "@strapi/utils";

const emailTemplate = {
  subject: "Vielen Dank für Ihre Nachricht.",
  text: "",
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            margin-bottom: 20px;
        }
        .content {
            text-align: left;
            margin-bottom: 30px;
        }
        .footer {
            font-size: 0.9em;
            color: #666;
        }
        .image-container {
            margin: 20px 0;
        }
        .image-container img {
            max-width: 150px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Vielen Dank für Ihre Nachricht</h2>
        </div>
        <div class="content">
            <p>Wir haben Ihre Anfrage erhalten und werden diese so schnell wie möglich prüfen.</p>
            <p>Für dringende Anliegen stehen wir Ihnen auch unter der Telefonnummer <strong>030 / 515 659950</strong> zur Verfügung.</p>
        </div>
        <div class="image-container">
        <picture>
  <source
    srcset="https://api.sundaysolar.de/uploads/dark_email_logo_2b9ac144cc.png"
    media="(prefers-color-scheme: dark)"
  />
           <img src="https://api.sundaysolar.de/uploads/email_logo_58a05b474d.png" alt="Company Logo">
</picture>
        </div>
        <div class="footer">
            <p>Mit sonnigen Grüßen</p>
            <p><strong>Sunday Solar GmbH</strong><br>Bürgerstraße 17<br>12347 Berlin</p>
        </div>
    </div>
</body>
</html>`,
};

export default {
  async afterCreate(event) {
    const { result } = event;

    if (result?.email && result?.content) {
      if (result.publishedAt === null) {
        return;
      }
      try {
        await strapi.plugins["email"].services.email.send({
          to: env("DEFAULT_TO_EMAIL"),
          from: env("DEFAULT_FROM_EMAIL"),
          subject: `New Contact: ${result.email}`,
          text: `email: ${result.email} message: ${result.content}`,
        });
        await strapi.plugins["email"].services.email.sendTemplatedEmail(
          {
            to: result.email,
            from: env("DEFAULT_FROM_EMAIL"),
          },
          emailTemplate,
        );
        // await strapi.plugins["email"].services.email.send({
        //   to: result.email,
        //   from: env("DEFAULT_FROM_EMAIL"),
        //   subject: `Sunday Solar Support`,
        //   text: `We received your contact form`,
        // });
      } catch (err) {
        console.log(err);
      }
    }
  },
};
