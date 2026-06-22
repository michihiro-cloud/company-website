import { useState } from 'react';

function PortfolioCard({ title, description, image }) {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(image) && !imageError;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.95)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_-40px_rgba(15,23,42,0.95)]">
      <div className="pointer-events-none absolute -right-8 top-8 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(183,132,87,0.14),transparent_52%)] blur-3xl opacity-80 transition group-hover:opacity-100" />
      <div className="relative h-40 overflow-hidden bg-slate-900">
        {showImage ? (
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(184,132,82,0.16),transparent_50%),linear-gradient(135deg,rgba(15,23,42,0.85),rgba(30,41,59,0.7))]" />
        )}
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h3 className="text-lg font-semibold leading-tight text-slate-100 md:text-xl">{title}</h3>
        </div>
      </div>
      <div className="relative space-y-3 p-6">
        <p className="text-sm leading-7 text-slate-300">{description}</p>
      </div>
    </article>
  );
}

export default PortfolioCard;
