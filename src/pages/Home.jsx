import Hero from '../components/Hero.jsx';
import { services, portfolioItems } from '../data/placeholderData.js';
import ServiceCard from '../components/ServiceCard.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';

function Home() {
  return (
    <div className="space-y-16">
      <Hero />

      <section>
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Our Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-100">What we deliver</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            We create digital products that help companies grow, communicate, and delight customers.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Portfolio</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100">Selected work</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
