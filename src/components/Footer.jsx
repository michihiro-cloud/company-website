import { useTranslation } from 'react-i18next';
import logoImage from '../../assets/logo/Logo_Generated_Image_4K.png';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative border-t border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-8 shadow-[inset_0_-24px_60px_-24px_rgba(0,0,0,0.4)]">
      <div className="pointer-events-none absolute left-10 top-6 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,94,52,0.1),transparent_52%)] blur-3xl" />
      <div className="pointer-events-none absolute right-16 bottom-8 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(107,79,56,0.08),transparent_48%)] blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 text-sm text-slate-400 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
        <div className="space-y-2">
          <p>© 2026 {t('siteTitle')}. {t('footer.rights', 'All rights reserved.')} </p>
          <p>{t('footer.madeWith', 'Made with React, Vite, and Tailwind CSS.')}</p>
        </div>
        <div className="flex items-center gap-3 md:justify-self-end">
          <img src={logoImage} alt={t('siteTitle')} className="h-12 w-12 object-contain" />
          <p className="text-lg font-semibold text-slate-100">{t('siteTitle')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
