export const siteConfig = {
  name: "Kurtis Rogers",
  url: "https://kurtisrogers.com",
  email: "hello@kurtisrogers.com",
  social: [
    {
      label: "GitHub",
      href: "https://github.com/Kurtmcmurt",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kurtisrogers",
      icon: "linkedin",
    },
  ],
};

export const features = {
  hiringCta: false,
  homeIntroduction: true,
  homeHonourableDeveloper: true,
  aboutTechnology: true,
  aboutCareer: true,
};

export const hiringCtaSection = {
  heading: "Open to the right opportunity",
  body: "<p>I'm interested in hearing about senior frontend and full-stack roles.</p>",
  buttonText: "Contact me",
  buttonHref: "/contact",
};

export const contactPage = {
  title: "Contact — Kurtis Rogers",
  metaDescription: "Contact Kurtis Rogers",
  hero: {
    heading: "Contact",
    subheading: "Got a question or just want to say hello?",
  },
  form: {
    heading: "Send a message",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitLabel: "Send message",
    successMessage: "Thank you — your message has been sent.",
    errorMessage: "Something went wrong. Please try again later.",
  },
};

export const introductionSection = {
  heading: "Introduction",
  body: "<p>I'm an experienced full-stack software engineer based in <strong>Bristol, UK</strong>.</p>",
};

export function pageContext(
  slug: "home" | "about" | "contact" | "not-found",
  currentPath: string,
  extra: Record<string, unknown> = {},
) {
  const pages = {
    home: {
      title: "Kurtis Rogers — Full-Stack Software Engineer",
      metaDescription: "Bristol-based full-stack software engineer",
      hero: {
        heading: "Kurtis Rogers",
        subheading: "Full-Stack Software Engineer",
        tagline: "I build accessible, maintainable web applications.",
      },
      introduction: introductionSection,
      honourableDeveloper: {
        heading: "How I Work",
        body: "<p>Good engineering is about more than shipping features.</p>",
      },
      cta: {
        heading: "Say hello",
        body: "<p>Have a technical question or want to connect?</p>",
        buttonText: "Get in touch",
        buttonHref: "/contact",
      },
    },
    about: {
      title: "About — Kurtis Rogers",
      metaDescription: "About Kurtis Rogers",
      hero: {
        heading: "About Me",
        subheading: "Full-stack engineer · Bristol, UK",
      },
      technology: {
        heading: "Technology",
        body: "<p>TypeScript, Node.js, React, and accessibility-focused front ends.</p>",
      },
      career: {
        heading: "Experience",
        body: "<p>Ten years across agencies, product teams, and public-sector clients.</p>",
      },
    },
    contact: contactPage,
    "not-found": {
      title: "Page Not Found — Kurtis Rogers",
      metaDescription: "Page not found",
      heading: "Page not found",
      body: "<p>Sorry, the page you're looking for doesn't exist.</p>",
      ctaText: "Back to home",
      ctaHref: "/",
    },
  };

  return {
    site: siteConfig,
    features,
    page: pages[slug],
    currentPath,
    theme: "light",
    sections: features.hiringCta ? { hiringCta: hiringCtaSection } : {},
    ...extra,
  };
}
