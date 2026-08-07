# Security Policy

## Reporting

Report suspected vulnerabilities privately to the repository owner. Do not open a public issue containing credentials, exploit details, or personal data.

## Secrets

- Never commit `.env`, `.env.local`, API keys, tokens, private keys, or production data.
- `.env.example` contains names and documentation only, never values.
- Preview deployments use sandbox or no credentials.
- Production secrets live only in Vercel's Production environment scope.

## Dependencies

- Commit `package-lock.json` and use `npm ci` in CI.
- Pin agent CLIs and review lockfile changes.
- Dependabot updates require CI and human review.
- Do not execute `curl | bash` or unpinned `npx ...@latest` commands.
- Community shadcn registries, MCP servers, and copied components require source and license review.

## Application

- Validate all form input on the server.
- Rate-limit and spam-protect public forms.
- Use security headers and a Content Security Policy before launch.
- Minimize third-party scripts and do not add analytics before privacy review.
