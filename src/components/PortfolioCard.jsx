function PortfolioCard({ title, description, image }) {
  return (
    <article className="relative overflow-hidden rounded-[26px] border border-slate-800 bg-slate-950 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:shadow-lg">
      <div className="pointer-events-none absolute -left-8 top-6 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(183,132,87,0.12),transparent_52%)] blur-3xl opacity-90" />
      <div className="h-52 bg-slate-900">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="space-y-2 p-6">
        <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
        <p className="text-sm leading-7 text-slate-300">{description}</p>
      </div>
    </article>
  );
}

export default PortfolioCard;
