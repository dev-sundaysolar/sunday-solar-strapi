import type { Schema, Struct } from "@strapi/strapi";

export interface CompanyFaq extends Struct.ComponentSchema {
  collectionName: "components_company_faqs";
  info: {
    displayName: "faq";
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface CompanyIntro extends Struct.ComponentSchema {
  collectionName: "components_company_intros";
  info: {
    description: "";
    displayName: "intro";
  };
  attributes: {
    description: Schema.Attribute.Text;
    hero: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    title: Schema.Attribute.String;
  };
}

export interface CompanyPartners extends Struct.ComponentSchema {
  collectionName: "components_company_partners";
  info: {
    displayName: "partners";
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface CompanyServiceItem extends Struct.ComponentSchema {
  collectionName: "components_company_service_items";
  info: {
    displayName: "serviceItem";
  };
  attributes: {
    description: Schema.Attribute.Text;
    subhead: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CompanyServices extends Struct.ComponentSchema {
  collectionName: "components_company_services";
  info: {
    displayName: "services";
  };
  attributes: {
    serviceItem: Schema.Attribute.Component<"company.service-item", true>;
  };
}

export interface CompanyTeam extends Struct.ComponentSchema {
  collectionName: "components_company_teams";
  info: {
    description: "";
    displayName: "team";
  };
  attributes: {
    description: Schema.Attribute.Text;
    hero: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    title: Schema.Attribute.String;
  };
}

export interface FaqFaqTopics extends Struct.ComponentSchema {
  collectionName: "components_faq_faq_topics";
  info: {
    displayName: "faqTopics";
  };
  attributes: {
    faqs: Schema.Attribute.Relation<"oneToMany", "api::faq.faq">;
    topic: Schema.Attribute.String & Schema.Attribute.Unique;
  };
}

export interface HomeAboutUs extends Struct.ComponentSchema {
  collectionName: "components_home_aboutuses";
  info: {
    description: "";
    displayName: "AboutUs";
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading2: Schema.Attribute.String;
    hero: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    linkButton: Schema.Attribute.Component<"shared.link-button", false>;
  };
}

export interface HomeCounter extends Struct.ComponentSchema {
  collectionName: "components_home_counters";
  info: {
    description: "";
    displayName: "Counter";
  };
  attributes: {
    counterItem: Schema.Attribute.Component<"home.counter-item", true>;
  };
}

export interface HomeCounterItem extends Struct.ComponentSchema {
  collectionName: "components_home_counter_items";
  info: {
    description: "";
    displayName: "CounterItem";
  };
  attributes: {
    count: Schema.Attribute.Integer;
    label: Schema.Attribute.String;
  };
}

export interface HomeFaq extends Struct.ComponentSchema {
  collectionName: "components_home_faqs";
  info: {
    description: "";
    displayName: "FAQ";
  };
  attributes: {
    heading2: Schema.Attribute.String;
    list: Schema.Attribute.Relation<"oneToMany", "api::faq.faq">;
  };
}

export interface HomeIntro extends Struct.ComponentSchema {
  collectionName: "components_home_intros";
  info: {
    description: "";
    displayName: "Intro";
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading1: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
    heading3: Schema.Attribute.String;
    hero: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    linkButton: Schema.Attribute.Component<"shared.link-button", false>;
  };
}

export interface HomeMetadata extends Struct.ComponentSchema {
  collectionName: "components_home_metadata";
  info: {
    displayName: "Metadata";
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeMoreDetials extends Struct.ComponentSchema {
  collectionName: "components_home_more_detials";
  info: {
    description: "";
    displayName: "MoreDetials";
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading2: Schema.Attribute.String;
    hero: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    linkButton: Schema.Attribute.Component<"shared.link-button", false>;
  };
}

export interface HomePartnerItem extends Struct.ComponentSchema {
  collectionName: "components_home_partner_items";
  info: {
    description: "";
    displayName: "PartnerItem";
  };
  attributes: {
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios"> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomePartners extends Struct.ComponentSchema {
  collectionName: "components_home_partners";
  info: {
    description: "";
    displayName: "Partners";
  };
  attributes: {
    heading2: Schema.Attribute.String;
    list: Schema.Attribute.Relation<"oneToMany", "api::partner.partner">;
    showPartnersList: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface HomeReview extends Struct.ComponentSchema {
  collectionName: "components_home_reviews";
  info: {
    description: "";
    displayName: "Review";
  };
  attributes: {
    heading2: Schema.Attribute.String;
  };
}

export interface HomeServiceItem extends Struct.ComponentSchema {
  collectionName: "components_home_service_items";
  info: {
    description: "";
    displayName: "ServiceItem";
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading3: Schema.Attribute.String;
    heading4: Schema.Attribute.String;
    icon: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
  };
}

export interface HomeServices extends Struct.ComponentSchema {
  collectionName: "components_home_services";
  info: {
    description: "";
    displayName: "Services";
  };
  attributes: {
    heading2: Schema.Attribute.String;
    serviceItem: Schema.Attribute.Component<"home.service-item", true>;
  };
}

export interface SharedConcerns extends Struct.ComponentSchema {
  collectionName: "components_shared_concerns";
  info: {
    displayName: "concerns";
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: "components_shared_faq_items";
  info: {
    description: "";
    displayName: "faqItem";
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLinkButton extends Struct.ComponentSchema {
  collectionName: "components_shared_link_buttons";
  info: {
    description: "";
    displayName: "LinkButton";
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<["blue", "yellow", "backdrop"]> &
      Schema.Attribute.DefaultTo<"blue">;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: "components_shared_media";
  info: {
    displayName: "Media";
    icon: "file-video";
  };
  attributes: {
    file: Schema.Attribute.Media<"images" | "files" | "videos">;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: "components_shared_quotes";
  info: {
    displayName: "Quote";
    icon: "indent";
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: "components_shared_rich_texts";
  info: {
    description: "";
    displayName: "Rich text";
    icon: "align-justify";
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: "components_shared_sliders";
  info: {
    description: "";
    displayName: "Slider";
    icon: "address-book";
  };
  attributes: {
    files: Schema.Attribute.Media<"images", true>;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: "components_ui_buttons";
  info: {
    displayName: "button";
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface UiFooter extends Struct.ComponentSchema {
  collectionName: "components_ui_footers";
  info: {
    description: "";
    displayName: "footer";
  };
  attributes: {
    appLogo: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    copyrightText: Schema.Attribute.String & Schema.Attribute.Required;
    externalLink: Schema.Attribute.Component<"ui.nav-link", true>;
    internalLink: Schema.Attribute.Component<"ui.nav-link", true>;
    socialMedia: Schema.Attribute.Component<"ui.social-media", false>;
  };
}

export interface UiHeader extends Struct.ComponentSchema {
  collectionName: "components_ui_headers";
  info: {
    description: "";
    displayName: "Header";
  };
  attributes: {
    appLogo: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    linkButton: Schema.Attribute.Component<"shared.link-button", false>;
    navLink: Schema.Attribute.Component<"ui.nav-link", true>;
  };
}

export interface UiListItem extends Struct.ComponentSchema {
  collectionName: "components_ui_list_items";
  info: {
    description: "";
    displayName: "ListItem";
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiNavLink extends Struct.ComponentSchema {
  collectionName: "components_ui_nav_links";
  info: {
    description: "";
    displayName: "NavLink";
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    listItem: Schema.Attribute.Component<"ui.list-item", true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiSocialMedia extends Struct.ComponentSchema {
  collectionName: "components_ui_social_medias";
  info: {
    description: "";
    displayName: "socialMedia";
  };
  attributes: {
    icon: Schema.Attribute.Media<"images" | "files" | "videos" | "audios"> &
      Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "company.faq": CompanyFaq;
      "company.intro": CompanyIntro;
      "company.partners": CompanyPartners;
      "company.service-item": CompanyServiceItem;
      "company.services": CompanyServices;
      "company.team": CompanyTeam;
      "faq.faq-topics": FaqFaqTopics;
      "home.about-us": HomeAboutUs;
      "home.counter": HomeCounter;
      "home.counter-item": HomeCounterItem;
      "home.faq": HomeFaq;
      "home.intro": HomeIntro;
      "home.metadata": HomeMetadata;
      "home.more-detials": HomeMoreDetials;
      "home.partner-item": HomePartnerItem;
      "home.partners": HomePartners;
      "home.review": HomeReview;
      "home.service-item": HomeServiceItem;
      "home.services": HomeServices;
      "shared.concerns": SharedConcerns;
      "shared.faq-item": SharedFaqItem;
      "shared.link-button": SharedLinkButton;
      "shared.media": SharedMedia;
      "shared.quote": SharedQuote;
      "shared.rich-text": SharedRichText;
      "shared.slider": SharedSlider;
      "ui.button": UiButton;
      "ui.footer": UiFooter;
      "ui.header": UiHeader;
      "ui.list-item": UiListItem;
      "ui.nav-link": UiNavLink;
      "ui.social-media": UiSocialMedia;
    }
  }
}
