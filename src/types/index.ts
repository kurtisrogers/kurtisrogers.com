export interface SiteConfig {
  name: string;
  url: string;
  email: string;
  social: SocialLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface FeatureFlags {
  hiringCta: boolean;
  homeIntroduction: boolean;
  homeHonourableDeveloper: boolean;
  aboutTechnology: boolean;
  aboutCareer: boolean;
}

export interface PageContent {
  title: string;
  metaDescription: string;
  [key: string]: unknown;
}

export interface HiringCtaSection {
  heading: string;
  body: string;
  buttonText: string;
  buttonHref: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface RenderContext {
  site: SiteConfig;
  features: FeatureFlags;
  page: PageContent;
  currentPath: string;
  theme: "light" | "dark";
  sections?: {
    hiringCta?: HiringCtaSection;
  };
  flash?: {
    type: "success" | "error";
    message: string;
  };
}
