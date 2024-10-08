import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Ordeeper",
  DESCRIPTION: "Welcome to my portfolio, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "pedrordeeper@gmail.com",
    HREF: "mailto:pedrordeeper@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Ordeeper Cypher",
    HREF: "https://github.com/Ordeeper"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Pedro Jalisson",
    HREF: "https://www.linkedin.com/in/pedro-jalisson-de-melo-832508307/",
  }
]

