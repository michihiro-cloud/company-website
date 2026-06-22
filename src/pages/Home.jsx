import Hero from '../components/Hero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';
import { useTranslation } from 'react-i18next';

const serviceKeys = ['customWebDev', 'uiuxDesign', 'digitalStrategy'];
const portfolioKeys = ['aiDiagnostics', 'drClone', 'knowledgeRouter', 'heartwellPilot'];
const portfolioImages = [
  '/images/portfolio-01.jpg',
  '/images/portfolio-02.jpg',
  '/images/portfolio-03.jpg',
  '/images/portfolio-04.jpg'
];

function Home() {
  const { t } = useTranslation();

  return (
    <div className="space-y-16">
      <Hero />

      <section>
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">{t('sections.solutions.title')}</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-100">{t('sections.solutions.headline')}</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            {t('sections.solutions.description')}
          </p>
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

      <section>
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">{t('sections.caseStudies.title')}</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100">{t('sections.caseStudies.headline')}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioKeys.map((key, index) => (
            <PortfolioCard
              key={key}
              title={t(`portfolioItems.${key}.title`)}
              description={t(`portfolioItems.${key}.description`)}
              image={portfolioImages[index]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
