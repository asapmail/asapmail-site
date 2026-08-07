# Development Workflow

## Branch model

- `main`: protected and deployable to production.
- `feat/*`, `fix/*`, `chore/*`: short-lived branches.
- Every change goes through a pull request and a Vercel preview.
- No direct pushes to `main` after GitHub protection is enabled.

## Required pull-request checks

1. ESLint with zero warnings.
2. TypeScript typecheck.
3. Unit tests.
4. Production build.
5. Production dependency audit.
6. Playwright smoke and accessibility test.
7. CodeQL analysis.

## Component intake

1. Prefer local components and official shadcn/Radix sources.
2. Run shadcn CLI at an exact version and inspect dry-run/diff.
3. Add one component per focused commit when practical.
4. Review all newly introduced package dependencies and licenses.
5. Run `npm audit`, tests, and build before merge.
6. Never give community registries access to `.env.local` or deployment credentials.

## Vercel setup

1. Import the private GitHub repository into Vercel.
2. Production branch: `main`.
3. Enable preview deployments for pull requests.
4. Keep Preview and Production environment variables separate.
5. Do not expose secrets through `NEXT_PUBLIC_*`.
6. Require successful GitHub checks before merge.

## Before launch

- Replace `robots: noindex` with the approved indexing policy.
- Confirm domain, privacy policy, cookie/analytics decisions, and contact-form abuse protection.
- Run Lighthouse, keyboard, screen-reader, responsive, and reduced-motion reviews.
