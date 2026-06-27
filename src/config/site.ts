export const site = {
  name: "Kurtis Rogers",
  title: "Kurtis Rogers — Software Engineer",
  description:
    "Software engineer building accessible, user-centred digital services.",
  url: "https://kurtisrogers.github.io/kurtisrogers.com/",
  email: "hello@kurtisrogers.com",
  github: "https://github.com/kurtisrogers",
  linkedin: "https://www.linkedin.com/in/kurtisrogers",
} as const;

export type SiteConfig = typeof site;
