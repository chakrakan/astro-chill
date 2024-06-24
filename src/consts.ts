import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "devkanisk",
  DESCRIPTION:
    "Hi, this is Kanisk! Welcome to my corner of the internet. Here, I share my passions, projects, and ponderings with the world.",
  EMAIL: "dev.kanisk@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "devkanisk's home page.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A smattering of thoughts on topics I am dabbling with.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of arbitrary projects with links to repositories and live demos where applicable.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/devkanisk",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/chakrakan",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/kaniskc",
  },
  {
    NAME: "Instagram",
    HREF: "https://www.instagram.com/kan.yyz/",
  },
];

export const INTRO_TITLES = ["Software Engineer", "Musician"];
