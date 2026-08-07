# Retention Agency Website

Private development repository for the English-language retention/lifecycle CRM agency website.

## Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui and Radix UI after component selection
- Vitest and Testing Library
- Playwright and axe-core
- GitHub Actions and Vercel previews

## Local development

```bash
nvm use
npm ci
npm run dev
```

Open <http://localhost:3000>.

## Quality gates

```bash
npm run check
npm run audit:prod
npm run test:e2e:install # first time only
npm run test:e2e
```

## Environments

- **Local:** developer machine, `.env.local`, never committed.
- **Preview:** every pull request through Vercel; no production credentials.
- **Production:** protected `main` branch only after required checks and review.

There is intentionally no long-lived staging branch. Every pull request is an isolated test environment and can be promoted by merging to `main`.

See [Development Workflow](docs/DEVELOPMENT.md), [Architecture](docs/ARCHITECTURE.md), [Security](SECURITY.md), and [Design System](DESIGN.md).
