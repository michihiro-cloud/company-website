import ServiceCard from '../components/ServiceCard.jsx';
import { useTranslation } from 'react-i18next';

const serviceKeys = ['customWebDev', 'uiuxDesign', 'digitalStrategy'];

function Services() {
  const { t } = useTranslation();

  return (
    <section className="space-y-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">{t('solutionsPage.title')}</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-100">{t('solutionsPage.headline')}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{t('solutionsPage.description')}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {serviceKeys.map((key) => (
          <ServiceCard
            key={key}
            title={t(`servicesItems.${key}.title`)}
            description={t(`servicesItems.${key}.description`)}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
