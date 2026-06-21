import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/placeholderData.js';

function Services() {
  return (
    <section className="space-y-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Services</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-100">What we offer</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
          Our team provides end-to-end product development support from strategy and design to launch and ongoing optimization.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
