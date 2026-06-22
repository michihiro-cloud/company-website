import { useTranslation } from 'react-i18next';

const historyKeys = [
  'customWebDev',
  'uiuxDesign',
  'digitalStrategy'
];

function Technology() {
  const { t } = useTranslation();
  const historyItems = t('technologyPage.history', { returnObjects: true }) || [];
  const aiItems = t('aiSection.items', { returnObjects: true }) || [];

  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <section className="text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-brand">
          {t('technologyPage.title')}
        </p>
        <h1 className="mb-4 text-3xl font-semibold sm:text-4xl">
          {t('technologyPage.headline')}
        </h1>
        <p className="mx-auto max-w-2xl text-slate-400 leading-relaxed">
          {t('technologyPage.description')}
        </p>
      </section>

      {/* Industry Comparison */}
      <section className="rounded-2xl border border-brand/20 bg-slate-900/60 p-8">
        <h2 className="mb-6 text-xl font-semibold text-brand">
          {t('technologyPage.comparisonTitle')}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
            <p className="mb-1 text-xs uppercase tracking-widest text-slate-500">Industry Standard</p>
            <p className="text-slate-300 leading-relaxed">{t('technologyPage.comparison.titanic')}</p>
          </div>
          <div className="rounded-xl border border-brand/40 bg-brand/5 p-5">
            <p className="mb-1 text-xs uppercase tracking-widest text-brand">Zyx Global</p>
            <p className="text-slate-100 font-medium leading-relaxed">{t('technologyPage.comparison.zyx')}</p>
          </div>
        </div>
      </section>

      {/* Platform */}
      <section>
        <h2 className="mb-2 text-xl font-semibold">{t('technologyPage.platformTitle')}</h2>
        <p className="mb-8 max-w-3xl text-slate-400 leading-relaxed">
          {t('technologyPage.platformDescription')}
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {historyKeys.map((key) => (
            <div
              key={key}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6 space-y-3"
            >
              <h3 className="font-semibold text-slate-100">
                {t(`servicesItems.${key}.title`)}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t(`servicesItems.${key}.description`)}
              </p>
              <p className="text-xs text-brand/80 border-t border-brand/20 pt-3 leading-relaxed">
                {t(`servicesItems.${key}.aiNote`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Section */}
      <section className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#1b1410] p-8 border border-brand/10">
        <p className="mb-2 text-sm uppercase tracking-[0.25em] text-brand">{t('aiSection.title')}</p>
        <h2 className="mb-3 text-2xl font-semibold">{t('aiSection.headline')}</h2>
        <p className="mb-8 max-w-2xl text-slate-400 leading-relaxed">{t('aiSection.description')}</p>
        <div className="grid gap-5 sm:grid-cols-3">
          {aiItems.map((item, i) => (
            <div key={i} className="rounded-xl border border-brand/20 bg-slate-800/40 p-5 space-y-2">
              <h3 className="font-semibold text-brand text-sm">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Development History */}
      <section>
        <h2 className="mb-8 text-xl font-semibold">{t('technologyPage.historyTitle')}</h2>
        <div className="relative border-l border-brand/30 pl-6 space-y-6">
          {historyItems.map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[25px] top-1 h-3 w-3 rounded-full border-2 border-brand bg-slate-950" />
              <p className="text-sm font-semibold text-brand mb-1">{item.year}</p>
              <p className="text-slate-300 leading-relaxed">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8">
        <p className="mb-2 text-sm uppercase tracking-[0.25em] text-brand">{t('coreValues.title')}</p>
        <h2 className="mb-3 text-2xl font-semibold">{t('coreValues.headline')}</h2>
        <p className="mb-8 max-w-2xl text-slate-400 leading-relaxed">{t('coreValues.description')}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {['z', 'y', 'x'].map((axis) => (
            <div key={axis} className="rounded-xl border border-slate-700 bg-slate-800/50 p-5 space-y-2">
              <h3 className="text-brand font-semibold">{t(`coreValues.${axis}.label`)}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{t(`coreValues.${axis}.text`)}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-slate-400 italic text-sm leading-relaxed">
          &ldquo;{t('coreValues.tagline')}&rdquo;
        </p>
      </section>
    </div>
  );
}

export default Technology;
