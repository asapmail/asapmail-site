export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-20 sm:px-10">
      <p className="mb-6 font-mono text-sm uppercase tracking-[0.22em] text-zinc-500">
        Development environment
      </p>
      <h1 className="max-w-4xl text-pretty text-5xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-7xl">
        Retention Agency Website
      </h1>
      <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-zinc-600">
        Foundation ready. Strategy, content, and visual direction will be added
        after the specification handoff.
      </p>
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
