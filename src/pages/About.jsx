function About() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950 p-10 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.9)]">
      <div className="pointer-events-none absolute right-10 top-12 hidden h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(183,132,87,0.12),transparent_52%)] blur-3xl lg:block" />
      <div className="max-w-4xl space-y-6">
        <h1 className="text-3xl font-semibold text-slate-100">About the Company</h1>
        <p className="text-base leading-8 text-slate-400">
          This placeholder page describes the company vision, values, and mission. Replace this text with real company information when ready.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-slate-900 p-6">
            <h2 className="mb-3 text-xl font-semibold text-slate-100">Our Mission</h2>
            <p className="text-sm leading-7 text-slate-400">Build digital products that connect people, streamline operations, and create measurable business value.</p>
          </div>
          <div className="rounded-3xl bg-slate-900 p-6">
            <h2 className="mb-3 text-xl font-semibold text-slate-100">Our Vision</h2>
            <p className="text-sm leading-7 text-slate-400">Be the trusted partner for companies seeking design-driven digital transformation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
