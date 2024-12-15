import type { Schema, Struct } from '@strapi/strapi';

export interface B2BB2BConfigurator extends Struct.ComponentSchema {
  collectionName: 'components_b2_b_b2b_configurators';
  info: {
    displayName: 'b2bConfigurator';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading2: Schema.Attribute.String;
  };
}

export interface B2BB2BServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_b2_b_b2b_service_items';
  info: {
    description: '';
    displayName: 'b2bServiceItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading3: Schema.Attribute.String;
  };
}

export interface B2BB2BServices extends Struct.ComponentSchema {
  collectionName: 'components_b2_b_b2b_services';
  info: {
    displayName: 'b2bServices';
  };
  attributes: {
    b2bServiceItem: Schema.Attribute.Component<'b2-b.b2b-service-item', true>;
    heading2: Schema.Attribute.String;
  };
}

export interface B2BIntro extends Struct.ComponentSchema {
  collectionName: 'components_b2_b_intros';
  info: {
    description: '';
    displayName: 'intro';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading1: Schema.Attribute.String;
    hero: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkButton: Schema.Attribute.Component<'shared.link-button', false>;
  };
}

export interface B2BProjects extends Struct.ComponentSchema {
  collectionName: 'components_b2_b_projects';
  info: {
    displayName: 'projects';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    list: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
  };
}

export interface CompanyArticles extends Struct.ComponentSchema {
  collectionName: 'components_company_articles';
  info: {
    description: '';
    displayName: 'articles';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    list: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
  };
}

export interface CompanyFaq extends Struct.ComponentSchema {
  collectionName: 'components_company_faqs';
  info: {
    description: '';
    displayName: 'faq';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    list: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
  };
}

export interface CompanyInterviews extends Struct.ComponentSchema {
  collectionName: 'components_company_interviews';
  info: {
    description: '';
    displayName: 'interviews';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    list: Schema.Attribute.Relation<'oneToMany', 'api::interview.interview'>;
  };
}

export interface CompanyIntro extends Struct.ComponentSchema {
  collectionName: 'components_company_intros';
  info: {
    description: '';
    displayName: 'intro';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading1: Schema.Attribute.String;
    hero: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkButton: Schema.Attribute.Component<'shared.link-button', false>;
  };
}

export interface CompanyLocations extends Struct.ComponentSchema {
  collectionName: 'components_company_locations';
  info: {
    displayName: 'locations';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    list: Schema.Attribute.Relation<'oneToMany', 'api::location.location'>;
  };
}

export interface CompanyPartners extends Struct.ComponentSchema {
  collectionName: 'components_company_partners';
  info: {
    description: '';
    displayName: 'partners';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    showPartnersList: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface CompanyServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_company_service_items';
  info: {
    description: '';
    displayName: 'serviceItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading3: Schema.Attribute.String;
    subhead: Schema.Attribute.String;
  };
}

export interface CompanyServices extends Struct.ComponentSchema {
  collectionName: 'components_company_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    serviceItem: Schema.Attribute.Component<'company.service-item', true>;
  };
}

export interface CompanyTeam extends Struct.ComponentSchema {
  collectionName: 'components_company_teams';
  info: {
    description: '';
    displayName: 'team';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading2: Schema.Attribute.String;
    hero: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkButton: Schema.Attribute.Component<'shared.link-button', false>;
  };
}

export interface ContactEmail extends Struct.ComponentSchema {
  collectionName: 'components_contact_emails';
  info: {
    description: '';
    displayName: 'email';
  };
  attributes: {
    errorMessages: Schema.Attribute.Component<'contact.error-messages', false>;
    heading2: Schema.Attribute.String;
    linkButton: Schema.Attribute.Component<'shared.link-button', false>;
    messages: Schema.Attribute.Component<'contact.messages', false>;
    placeholders: Schema.Attribute.Component<'contact.placeholders', false>;
  };
}

export interface ContactErrorMessages extends Struct.ComponentSchema {
  collectionName: 'components_contact_error_messages';
  info: {
    displayName: 'errorMessages';
  };
  attributes: {
    requiredContent: Schema.Attribute.String;
    requiredEmail: Schema.Attribute.String;
    wrongFormatEmail: Schema.Attribute.String;
  };
}

export interface ContactLocations extends Struct.ComponentSchema {
  collectionName: 'components_contact_locations';
  info: {
    displayName: 'locations';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    list: Schema.Attribute.Relation<'oneToMany', 'api::location.location'>;
  };
}

export interface ContactMessages extends Struct.ComponentSchema {
  collectionName: 'components_contact_messages';
  info: {
    displayName: 'messages';
  };
  attributes: {
    failure: Schema.Attribute.String;
    success: Schema.Attribute.String;
  };
}

export interface ContactPlaceholders extends Struct.ComponentSchema {
  collectionName: 'components_contact_placeholders';
  info: {
    displayName: 'placeholders';
  };
  attributes: {
    content: Schema.Attribute.String;
    email: Schema.Attribute.String;
  };
}

export interface FaqFaqTabs extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_tabs';
  info: {
    displayName: 'faqTabs';
  };
  attributes: {
    faqTopics: Schema.Attribute.Component<'faq.faq-topics', true>;
    name: Schema.Attribute.String;
  };
}

export interface FaqFaqTopics extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_topics';
  info: {
    description: '';
    displayName: 'faqTopics';
  };
  attributes: {
    list: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    topic: Schema.Attribute.String & Schema.Attribute.Unique;
  };
}

export interface HomeAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_home_aboutuses';
  info: {
    description: '';
    displayName: 'AboutUs';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading2: Schema.Attribute.String;
    hero: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkButton: Schema.Attribute.Component<'shared.link-button', false>;
  };
}

export interface HomeCounter extends Struct.ComponentSchema {
  collectionName: 'components_home_counters';
  info: {
    description: '';
    displayName: 'Counter';
  };
  attributes: {
    counterItem: Schema.Attribute.Component<'home.counter-item', true>;
  };
}

export interface HomeCounterItem extends Struct.ComponentSchema {
  collectionName: 'components_home_counter_items';
  info: {
    description: '';
    displayName: 'CounterItem';
  };
  attributes: {
    count: Schema.Attribute.Integer;
    label: Schema.Attribute.String;
  };
}

export interface HomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    list: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
  };
}

export interface HomeIntro extends Struct.ComponentSchema {
  collectionName: 'components_home_intros';
  info: {
    description: '';
    displayName: 'Intro';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading1: Schema.Attribute.String;
    heading1Position: Schema.Attribute.Enumeration<
      ['top-left', 'top-right', 'bottom-left', 'bottom-right']
    > &
      Schema.Attribute.DefaultTo<'top-left'>;
    heading2: Schema.Attribute.String;
    heading3: Schema.Attribute.String;
    hero: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkButton: Schema.Attribute.Component<'shared.link-button', false>;
  };
}

export interface HomeMetadata extends Struct.ComponentSchema {
  collectionName: 'components_home_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeMoreDetials extends Struct.ComponentSchema {
  collectionName: 'components_home_more_detials';
  info: {
    description: '';
    displayName: 'MoreDetails';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading2: Schema.Attribute.String;
    hero: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkButton: Schema.Attribute.Component<'shared.link-button', false>;
  };
}

export interface HomePartnerItem extends Struct.ComponentSchema {
  collectionName: 'components_home_partner_items';
  info: {
    description: '';
    displayName: 'PartnerItem';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomePartners extends Struct.ComponentSchema {
  collectionName: 'components_home_partners';
  info: {
    description: '';
    displayName: 'Partners';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    showPartnersList: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface HomeReview extends Struct.ComponentSchema {
  collectionName: 'components_home_reviews';
  info: {
    description: '';
    displayName: 'Review';
  };
  attributes: {
    heading2: Schema.Attribute.String;
  };
}

export interface HomeServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_home_service_items';
  info: {
    description: '';
    displayName: 'ServiceItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading3: Schema.Attribute.String;
    heading4: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_services';
  info: {
    description: '';
    displayName: 'Services';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    linkButton: Schema.Attribute.Component<'shared.link-button', false>;
    serviceItem: Schema.Attribute.Component<'home.service-item', true>;
  };
}

export interface ProductFaq extends Struct.ComponentSchema {
  collectionName: 'components_product_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    list: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
  };
}

export interface ProductFeatures extends Struct.ComponentSchema {
  collectionName: 'components_product_features';
  info: {
    description: '';
    displayName: 'features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading2: Schema.Attribute.String;
    hero: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ProductInformation extends Struct.ComponentSchema {
  collectionName: 'components_product_information';
  info: {
    displayName: 'information';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    linkButton: Schema.Attribute.Component<'shared.link-button', false>;
    list: Schema.Attribute.Component<'product.list', true>;
  };
}

export interface ProductList extends Struct.ComponentSchema {
  collectionName: 'components_product_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading3: Schema.Attribute.String;
  };
}

export interface ProductProjects extends Struct.ComponentSchema {
  collectionName: 'components_product_projects';
  info: {
    displayName: 'projects';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    list: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
  };
}

export interface ProjectsMoreDetails extends Struct.ComponentSchema {
  collectionName: 'components_projects_more_details';
  info: {
    displayName: 'moreDetails';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading2: Schema.Attribute.String;
  };
}

export interface ProjectsPartners extends Struct.ComponentSchema {
  collectionName: 'components_projects_partners';
  info: {
    displayName: 'partners';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    showPartnersList: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface ProjectsProcessSteps extends Struct.ComponentSchema {
  collectionName: 'components_projects_process_steps';
  info: {
    displayName: 'processSteps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading2: Schema.Attribute.String;
    hero: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ProjectsProjects extends Struct.ComponentSchema {
  collectionName: 'components_projects_projects';
  info: {
    description: '';
    displayName: 'projects';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    list: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
  };
}

export interface ProjectsProjectsTable extends Struct.ComponentSchema {
  collectionName: 'components_projects_projects_tables';
  info: {
    displayName: 'projectsTable';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    list: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
  };
}

export interface ProjectsRelatedProjects extends Struct.ComponentSchema {
  collectionName: 'components_projects_related_projects';
  info: {
    description: '';
    displayName: 'relatedProjects';
  };
  attributes: {
    heading2: Schema.Attribute.String;
    linkButton: Schema.Attribute.Component<'shared.link-button', false>;
    showCarouselList: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedConcerns extends Struct.ComponentSchema {
  collectionName: 'components_shared_concerns';
  info: {
    displayName: 'concerns';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    description: '';
    displayName: 'faqItem';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLinkButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_buttons';
  info: {
    description: '';
    displayName: 'LinkButton';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
    text: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['blue', 'yellow', 'backdrop', 'secondary']
    > &
      Schema.Attribute.DefaultTo<'blue'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    list: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface UiFooter extends Struct.ComponentSchema {
  collectionName: 'components_ui_footers';
  info: {
    description: '';
    displayName: 'footer';
  };
  attributes: {
    appLogo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    copyrightText: Schema.Attribute.String & Schema.Attribute.Required;
    externalLink: Schema.Attribute.Component<'ui.nav-link', true>;
    internalLink: Schema.Attribute.Component<'ui.nav-link', true>;
    socialMedia: Schema.Attribute.Component<'ui.social-media', true>;
  };
}

export interface UiHeader extends Struct.ComponentSchema {
  collectionName: 'components_ui_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    appLogo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    lightAppLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    linkButton: Schema.Attribute.Component<'shared.link-button', false>;
    navLink: Schema.Attribute.Component<'ui.nav-link', true>;
  };
}

export interface UiListItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_list_items';
  info: {
    description: '';
    displayName: 'ListItem';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiNavLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_nav_links';
  info: {
    description: '';
    displayName: 'NavLink';
  };
  attributes: {
    href: Schema.Attribute.String;
    listItem: Schema.Attribute.Component<'ui.list-item', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_ui_social_medias';
  info: {
    description: '';
    displayName: 'socialMedia';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'b2-b.b2b-configurator': B2BB2BConfigurator;
      'b2-b.b2b-service-item': B2BB2BServiceItem;
      'b2-b.b2b-services': B2BB2BServices;
      'b2-b.intro': B2BIntro;
      'b2-b.projects': B2BProjects;
      'company.articles': CompanyArticles;
      'company.faq': CompanyFaq;
      'company.interviews': CompanyInterviews;
      'company.intro': CompanyIntro;
      'company.locations': CompanyLocations;
      'company.partners': CompanyPartners;
      'company.service-item': CompanyServiceItem;
      'company.services': CompanyServices;
      'company.team': CompanyTeam;
      'contact.email': ContactEmail;
      'contact.error-messages': ContactErrorMessages;
      'contact.locations': ContactLocations;
      'contact.messages': ContactMessages;
      'contact.placeholders': ContactPlaceholders;
      'faq.faq-tabs': FaqFaqTabs;
      'faq.faq-topics': FaqFaqTopics;
      'home.about-us': HomeAboutUs;
      'home.counter': HomeCounter;
      'home.counter-item': HomeCounterItem;
      'home.faq': HomeFaq;
      'home.intro': HomeIntro;
      'home.metadata': HomeMetadata;
      'home.more-detials': HomeMoreDetials;
      'home.partner-item': HomePartnerItem;
      'home.partners': HomePartners;
      'home.review': HomeReview;
      'home.service-item': HomeServiceItem;
      'home.services': HomeServices;
      'product.faq': ProductFaq;
      'product.features': ProductFeatures;
      'product.information': ProductInformation;
      'product.list': ProductList;
      'product.projects': ProductProjects;
      'projects.more-details': ProjectsMoreDetails;
      'projects.partners': ProjectsPartners;
      'projects.process-steps': ProjectsProcessSteps;
      'projects.projects': ProjectsProjects;
      'projects.projects-table': ProjectsProjectsTable;
      'projects.related-projects': ProjectsRelatedProjects;
      'shared.concerns': SharedConcerns;
      'shared.faq-item': SharedFaqItem;
      'shared.link-button': SharedLinkButton;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.slider': SharedSlider;
      'ui.button': UiButton;
      'ui.footer': UiFooter;
      'ui.header': UiHeader;
      'ui.list-item': UiListItem;
      'ui.nav-link': UiNavLink;
      'ui.social-media': UiSocialMedia;
    }
  }
}
