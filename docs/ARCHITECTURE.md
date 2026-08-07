# Architecture

## Runtime

- Next.js App Router with React Server Components by default.
- Client Components only where interaction requires browser state.
- Static generation for marketing pages whenever possible.
- Server actions or route handlers only for validated form submissions.

## UI

- Tailwind CSS defines project tokens and responsive rules.
- shadcn/ui components are copied into the repository and reviewed as first-party code.
- Radix primitives provide accessible interaction behavior.
- Motion is optional and limited to one or two meaningful signature interactions.

## Data and integrations

The initial website must not require production CRM credentials. Contact-form delivery, analytics, consent, and CRM integrations are separate reviewed changes.

## Boundaries

- `src/app`: routes, layouts, metadata, server boundaries.
- `src/components/ui`: reviewed shadcn/Radix primitives.
- `src/components/sections`: page sections composed from primitives.
- `src/lib`: schemas, utilities, and server-only integrations.
- `e2e`: Playwright user-flow and accessibility tests.

## Environments

Pull requests are the test environment. Vercel creates an isolated preview URL for each PR. Preview environment variables must use sandbox accounts or be omitted. Production variables exist only in Vercel Production scope.
