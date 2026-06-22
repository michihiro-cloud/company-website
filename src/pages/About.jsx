import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950 p-10 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.9)]">
      <div className="pointer-events-none absolute right-10 top-12 hidden h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(183,132,87,0.12),transparent_52%)] blur-3xl lg:block" />
      <div className="max-w-4xl space-y-6">
        <h1 className="text-3xl font-semibold text-slate-100">{t('about.title')}</h1>
        <p className="text-base leading-8 text-slate-400">{t('about.description')}</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-slate-900 p-6">
            <h2 className="mb-3 text-xl font-semibold text-slate-100">{t('about.missionTitle')}</h2>
            <p className="text-sm leading-7 text-slate-400">{t('about.missionText')}</p>
          </div>
          <div className="rounded-3xl bg-slate-900 p-6">
            <h2 className="mb-3 text-xl font-semibold text-slate-100">{t('about.visionTitle')}</h2>
            <p className="text-sm leading-7 text-slate-400">{t('about.visionText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default About;
