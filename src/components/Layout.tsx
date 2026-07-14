import { Menu, X } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../data/site';

function Logo() {
  return (
    <Link to="/" className="group inline-flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-honey text-navy shadow-honey transition group-hover:scale-105">
        <span className="text-lg font-black">M</span>
      </span>
      <span className="leading-none">
        <span className="block text-lg font-black tracking-tight text-white">MaeHive</span>
        <span className="block text-xs font-semibold uppercase text-skysoft/80">Virtual Assistants</span>
      </span>
    </Link>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cloud text-ink">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
          <Logo />
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey ${
                    isActive ? 'bg-white text-navy' : 'text-white/78 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <Link
            to="/hire-a-va"
            className="hidden rounded-full bg-honey px-5 py-2.5 text-sm font-black text-navy shadow-honey transition hover:-translate-y-0.5 hover:bg-pollen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey lg:inline-flex"
          >
            Hire a VA
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </nav>
        {open && (
          <div id="mobile-menu" className="border-t border-white/10 bg-navy px-4 pb-5 pt-2 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey ${
                      isActive ? 'bg-white text-navy' : 'text-white/82 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/72">
            MaeHive connects international businesses with skilled Filipino virtual assistants for focused, professional remote support.
          </p>
          <p className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/68">
            Placeholder contact information: replace with MaeHive’s verified email, phone, and business details before public launch.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase text-honey">Pages</h2>
          <div className="mt-4 grid gap-3">
            {navItems.slice(0, 4).map((item) => (
              <Link key={item.href} to={item.href} className="text-sm text-white/72 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase text-honey">Start</h2>
          <div className="mt-4 grid gap-3">
            {navItems.slice(4).map((item) => (
              <Link key={item.href} to={item.href} className="text-sm text-white/72 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase text-honey">Trust Notes</h2>
          <p className="mt-4 text-sm leading-7 text-white/72">
            Placeholder testimonials, logos, statistics, and contact details are intentionally labeled until verified MaeHive information is available.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/52">
        © {new Date().getFullYear()} MaeHive. All rights reserved.
      </div>
    </footer>
  );
}
