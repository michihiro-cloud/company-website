function ServiceCard({ title, description }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.95)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_-40px_rgba(15,23,42,0.95)]">
      <div className="pointer-events-none absolute -right-8 top-8 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(183,132,87,0.14),transparent_52%)] blur-3xl opacity-80 transition group-hover:opacity-100" />
      <div className="pointer-events-none absolute left-6 top-8 h-10 w-10 rounded-full border border-brand/25 shadow-[0_0_40px_10px_rgba(139,94,52,0.08)]" />
      <div className="relative mb-4 flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-3xl bg-slate-800/80 shadow-inner shadow-slate-950/30">
          <div className="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_12px_rgba(184,132,82,0.3)]" />
        </div>
        <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      </div>
      <p className="relative text-sm leading-7 text-slate-300">{description}</p>
    </article>
  );
}

export default ServiceCard;
