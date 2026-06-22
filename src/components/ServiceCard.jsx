function ServiceCard({ title, description }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.95)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_-40px_rgba(15,23,42,0.95)]">
      <div className="pointer-events-none absolute -right-8 top-8 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(183,132,87,0.14),transparent_52%)] blur-3xl opacity-80 transition group-hover:opacity-100" />
      <h3 className="relative mb-4 text-center text-xl font-semibold text-slate-100">{title}</h3>
      <p className="relative text-sm leading-7 text-slate-300">{description}</p>
    </article>
  );
}

export default ServiceCard;
