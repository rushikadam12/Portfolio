// src/data/profile.ts
// Single source of truth for every fact shown on the site.
// Both views (Professional and Engineer) and the landing page read from here,
// so a fact is changed in one place only. Open items are listed in TODO.md.

export const profile = {
  name: "Rushikesh Kadam",
  shortName: "RK",
  role: "SDE-2",
  title: "AI and full-stack engineer",
  company: "Sciverse Solutions Pvt. Ltd.",
  companyShort: "Sciverse Solutions",
  experience: "2.5+ years",
  openToWork: true,
  summary:
    "I build LLM pipelines and the web applications that put them in front of people: retrieval and agent workflows in Python, FastAPI services behind them, and TypeScript interfaces on top.",

  // Shown to visitors as the domain address. The link goes to the inbox that
  // receives mail today. Switch `href` to the domain address once forwarding
  // is set up (see TODO.md).
  email: {
    display: "contact@rushikeshkadam.dev",
    href: "mailto:rushi55578@gmail.com",
  },

  links: {
    github: { label: "github.com/rushikadam12", href: "https://github.com/rushikadam12" },
    linkedin: { label: "linkedin.com/in/rushikeshkadam", href: "https://linkedin.com/in/rushikeshkadam" },
  },
} as const;

export interface Job {
  role: string;
  company: string;
  /** Leave empty until the real dates are confirmed; the UI hides it. */
  period: string;
  current: boolean;
  points: string[];
}

export const experience: Job[] = [
  {
    role: "SDE-2",
    company: "Sciverse Solutions Pvt. Ltd.",
    period: "",
    current: true,
    points: [
      "Build LLM-powered pipelines with LangChain, the OpenAI API and Python.",
      "Design and ship FastAPI services and the TypeScript front ends that use them.",
      "Own features end to end, from data model and API to the screen a user sees.",
    ],
  },
];

export interface Focus {
  name: string;
  file: string;
  body: string;
  tools: string[];
}

export const focusAreas: Focus[] = [
  {
    name: "AI systems",
    file: "ai-systems.md",
    body: "Retrieval-augmented generation and agent workflows: chunking and indexing documents, calling models with the right context, and returning answers an application can trust.",
    tools: ["Python", "LangChain", "LlamaIndex", "OpenAI API", "FastAPI"],
  },
  {
    name: "Full-stack products",
    file: "full-stack.md",
    body: "Web applications from database to interface: typed APIs, authentication, background jobs, and front ends that stay fast as they grow.",
    tools: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
  },
];

export const stack: { group: string; key: string; tools: string[] }[] = [
  { group: "AI and ML", key: "ai", tools: ["LangChain", "LlamaIndex", "OpenAI API", "Hugging Face", "Ollama"] },
  { group: "Backend", key: "backend", tools: ["Python", "FastAPI", "Pydantic", "Node.js", "Express", "REST", "GraphQL"] },
  { group: "Frontend", key: "frontend", tools: ["TypeScript", "React", "Next.js", "Astro", "Tailwind CSS"] },
  { group: "Data", key: "data", tools: ["PostgreSQL", "SQLAlchemy", "Prisma", "Redis"] },
  { group: "Delivery", key: "delivery", tools: ["Docker", "GitHub Actions", "Vercel", "Linux", "Pytest"] },
];

export const headlineStack = ["Python", "FastAPI", "LangChain", "TypeScript", "React"];
