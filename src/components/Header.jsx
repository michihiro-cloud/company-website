import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' }
];

function Header() {
  return (
    <header className="relative border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)]">
      <div className="pointer-events-none absolute left-20 top-8 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,94,52,0.12),transparent_55%)] blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-4 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(107,79,56,0.1),transparent_50%)] blur-3xl" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="relative text-lg font-semibold text-slate-100 transition hover:text-brand">CompanyName</a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative text-sm font-medium transition ${isActive ? 'text-brand after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-brand after:rounded-full' : 'text-slate-400 hover:text-slate-100'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
