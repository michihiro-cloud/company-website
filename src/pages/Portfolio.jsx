import PortfolioCard from '../components/PortfolioCard.jsx';
import { portfolioItems } from '../data/placeholderData.js';

function Portfolio() {
  return (
    <section className="space-y-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Portfolio</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-100">Featured projects</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
          These sample projects show our style, approach, and ability to deliver polished digital experiences.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
