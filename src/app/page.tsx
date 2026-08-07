export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-20 sm:px-10">
      <p className="mb-6 font-mono text-sm uppercase tracking-[0.22em] text-zinc-500">
        Pull request preview
      </p>
      <h1 className="max-w-4xl text-pretty text-5xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-7xl">
        Retention Agency Website
      </h1>
      <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-zinc-600">
        The secure development workflow is live. Every proposed change now runs
        through automated quality, browser, accessibility, dependency, and
        security checks before it can reach production.
      </p>
      <div
        aria-label="Preview validation status"
        className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-900"
      >
        <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500" />
        PR preview validation
      </div>
      <dl className="mt-14 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-3">
        {[
          ["Framework", "Next.js 16"],
          ["Styling", "Tailwind CSS 4"],
          ["Delivery", "GitHub → Vercel"],
        ].map(([term, description]) => (
          <div className="bg-white p-6" key={term}>
            <dt className="text-sm text-zinc-500">{term}</dt>
            <dd className="mt-2 font-medium text-zinc-950">{description}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
