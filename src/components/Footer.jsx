function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-8 shadow-[inset_0_-24px_60px_-24px_rgba(0,0,0,0.4)]">
      <div className="pointer-events-none absolute left-10 top-6 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,94,52,0.1),transparent_52%)] blur-3xl" />
      <div className="pointer-events-none absolute right-16 bottom-8 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(107,79,56,0.08),transparent_48%)] blur-3xl" />
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-slate-400 sm:px-6 lg:px-8">
        <p>© 2026 CompanyName. All rights reserved.</p>
        <p>Made with React, Vite, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;
