import PortfolioCard from '../components/PortfolioCard.jsx';
import { useTranslation } from 'react-i18next';

const portfolioKeys = ['aiDiagnostics', 'drClone', 'knowledgeRouter', 'heartwellPilot', 'sonyAmazon', 'thaiGovernment'];
const portfolioImages = [
  '/images/portfolio-01.jpg',
  '/images/portfolio-02.jpg',
  '/images/portfolio-03.jpg',
  '/images/portfolio-04.jpg',
  '/images/portfolio-05.jpg',
  '/images/portfolio-06.jpg'
];

function Portfolio() {
  const { t } = useTranslation();

  return (
    <section className="space-y-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">{t('caseStudiesPage.title')}</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-100">{t('caseStudiesPage.headline')}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{t('caseStudiesPage.description')}</p>
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
  );
}

export default Portfolio;
