# Rushikesh Kadam

**SDE-2 at Sciverse Solutions Pvt. Ltd. | AI and Full-Stack Engineer**

[rushikeshkadam.dev](https://rushikeshkadam.dev) | [contact@rushikeshkadam.dev](mailto:rushi55578@gmail.com) | [LinkedIn](https://linkedin.com/in/rushikeshkadam) | [GitHub](https://github.com/rushikadam12)

---

## Summary

Software engineer with 2.5+ years of experience building LLM pipelines and the web applications that put them in front of people. I work across the stack: retrieval and agent workflows in Python, FastAPI services behind them, and TypeScript interfaces on top. Open to AI engineering, full-stack and backend roles.

## Experience

### SDE-2, Sciverse Solutions Pvt. Ltd.
*Current role*

- Build LLM-powered pipelines with LangChain, the OpenAI API and Python.
- Design and ship FastAPI services and the TypeScript front ends that use them.
- Own features end to end, from data model and API to the screen a user sees.

## Areas of Focus

**AI systems.** Retrieval-augmented generation and agent workflows: chunking and indexing documents, calling models with the right context, and returning answers an application can trust.
*Python, LangChain, LlamaIndex, OpenAI API, FastAPI*

**Full-stack products.** Web applications from database to interface: typed APIs, authentication, background jobs, and front ends that stay fast as they grow.
*TypeScript, React, Next.js, Node.js, PostgreSQL*

## Technical Skills

| Area | Tools |
| :--- | :--- |
| AI and ML | LangChain, LlamaIndex, OpenAI API, Hugging Face, Ollama |
| Backend | Python, FastAPI, Pydantic, Node.js, Express, REST, GraphQL |
| Frontend | TypeScript, React, Next.js, Astro, Tailwind CSS |
| Data | PostgreSQL, SQLAlchemy, Prisma, Redis |
| Delivery | Docker, GitHub Actions, Vercel, Linux, Pytest |

## Contact

Email is the fastest way to reach me: [contact@rushikeshkadam.dev](mailto:rushi55578@gmail.com)

---

## About This Repository

Source for [rushikeshkadam.dev](https://rushikeshkadam.dev). The portfolio can be read two ways: a **Professional** view for a quick read, and an **Engineer** view that presents the same facts as source files (`profile.json`, `experience.ts`, `stack.yaml`).

**Stack:** Astro 7 (static output), Tailwind CSS 4, TypeScript. No client framework; pages ship about 100 KB or less.

**Structure**

| Path | Purpose |
| :--- | :--- |
| `src/data/profile.ts` | Every fact shown on the site, in one place |
| `src/pages/` | Routes: `/`, `/professional`, `/engineer` |
| `src/components/` | Components grouped by view, plus shared header, footer and icons |
| `src/styles/theme.css` | Design tokens for light and dark themes |
| `public/_headers` | Security headers for Netlify / Cloudflare Pages |

**Run locally** (Node 22+)

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the build
```
