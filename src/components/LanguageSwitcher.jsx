import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const change = (lng) => i18n.changeLanguage(lng);
  const active = i18n.language || 'ko';

  return (
    <div className="flex items-center gap-2">
      {['ko', 'en', 'ja'].map((lng) => (
        <button
          key={lng}
          onClick={() => change(lng)}
          className={`rounded-full px-3 py-1 text-sm font-semibold transition ${active === lng ? 'bg-brand text-slate-950' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}
          aria-label={`Switch language to ${lng}`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
