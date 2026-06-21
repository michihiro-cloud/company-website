import { heroContent } from '../data/placeholderData.js';

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#090b10] via-[#121721] to-[#1b1f2a] p-10 text-white shadow-[0_35px_80px_-35px_rgba(0,0,0,0.85)]">
      <div className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(191,145,98,0.18),transparent_55%)] blur-3xl" />
      <div className="pointer-events-none absolute left-4 top-20 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(109,79,56,0.14),transparent_48%)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 right-28 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)] blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-36 h-32 w-32 rounded-full border border-white/10 shadow-[0_0_120px_20px_rgba(139,94,52,0.1)]" />
      <div className="pointer-events-none absolute left-1/2 top-14 h-52 w-52 -translate-x-1/2 rounded-full border border-brand/20 shadow-[0_0_120px_20px_rgba(139,94,52,0.12)]" />
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">Digital Innovation</p>
        <h1 className="mb-6 text-4xl font-semibold leading-tight sm:text-5xl">{heroContent.title}</h1>
        <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">{heroContent.subtitle}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          {heroContent.ctas.map((cta, index) => (
            <a
              key={cta.href}
              href={cta.href}
              className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-[0_18px_40px_-18px_rgba(0,0,0,0.35)] transition ${
                index === 0 ? 'bg-brand text-slate-950 hover:bg-[#a47551]' : 'border border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800'
              }`}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
