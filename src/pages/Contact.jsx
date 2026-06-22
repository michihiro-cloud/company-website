import ContactForm from '../components/ContactForm.jsx';
import { contactInfo } from '../data/placeholderData.js';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="grid gap-10 lg:grid-cols-[1fr_420px]">
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-10 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.9)]">
        <h1 className="text-3xl font-semibold text-slate-100">{t('contact.title')}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-400">{t('contact.description')}</p>
        <div className="mt-8 space-y-5 text-sm text-slate-400">
          <div>
            <p className="font-semibold text-slate-100">{t('contact.emailLabel')}</p>
            <p>{contactInfo.email}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">{t('contact.phoneLabel')}</p>
            <p>{contactInfo.phone}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">{t('contact.addressLabel')}</p>
            <p>{contactInfo.address}</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}

export default Contact;
