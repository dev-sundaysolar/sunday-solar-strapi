import { env } from "@strapi/utils";

const englishHtml = `
<div class="container">
  <div class="header">
    <h2>Thank you for your message</h2>
  </div>
  <div class="content">
    <p>
      We have received your request and will review it as soon as possible.
    </p>
    <p>
      For urgent matters, you can also reach us at the phone number <strong>030 / 515 659950</strong> zur Verfügung.
    </p>
  </div>
  <table cellpadding="0" cellspacing="0" border="0" style="margin: 20px 0">
    <tr>
      <td style="vertical-align: middle">
        <img
          src="https://api.sundaysolar.de/uploads/Sonne_Verlauf_1c4d03c0f5.png"
          alt="Company Logo"
          style="max-width: 73px"
        />
      </td>
      <td style="vertical-align: middle; padding-left: 16px">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
              <p class="logo-text">sunday</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="logo-text">solar</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <div class="footer">
    <p>Mit sonnigen Grüßen</p>
    <p>
      <strong>Sunday Solar GmbH</strong><br />Bürgerstraße 17<br />12347 Berlin
    </p>
  </div>
</div>
`;

const germanyHtml = `
<div class="container">
  <div class="header">
    <h2>Vielen Dank für Ihre Nachricht</h2>
  </div>
  <div class="content">
    <p>
      Wir haben Ihre Anfrage erhalten und werden diese so schnell wie möglich prüfen.
    </p>
    <p>
      Wir haben Ihre Anfrage erhalten und werden diese so schnell wie
      möglich prüfen.
    </p>
    <p>
      Für dringende Anliegen stehen wir Ihnen auch unter der Telefonnummer
      <strong>030 / 515 659950</strong> zur Verfügung.
    </p>
  </div>
  <table cellpadding="0" cellspacing="0" border="0" style="margin: 20px 0">
    <tr>
      <td style="vertical-align: middle">
        <img
          src="https://api.sundaysolar.de/uploads/Sonne_Verlauf_1c4d03c0f5.png"
          alt="Company Logo"
          style="max-width: 73px"
        />
      </td>
      <td style="vertical-align: middle; padding-left: 16px">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
              <p class="logo-text">sunday</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="logo-text">solar</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <div class="footer">
    <p>With sunny regards / Mit sonnigen Grüßen</p>
    <p>
      <strong>Sunday Solar GmbH</strong><br />Bürgerstraße 17<br />12347
      Berlin
    </p>
  </div>
</div>
`;

const emailTemplate = (locale) => ({
  subject:
    locale === "en"
      ? "Thank you for your message."
      : "Vielen Dank für Ihre Nachricht.",
  text: "",
  html: `<!DOCTYPE html>
<html lang=${locale === "en" ? "en" : "de"}>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
        max-width: 73px;
      }
      .logo-text {
        font-size: 24px;
        margin: 0 !important;
        line-height: 110%;
        color: #666;
      }
      .logo-text-container {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
      }
    </style>
    <title>Email Template</title>
</head>
<body>
    ${locale === "en" ? englishHtml : germanyHtml}
</body>
</html>`,
});

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
          emailTemplate(result.locale)
        );
      } catch (err) {
        console.log(err);
      }
    }
  },
};
