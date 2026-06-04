import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LINKS = [
  { label: 'Home',       path: '/'          },
  { label: 'Projects',   path: '/projects'  },
  { label: 'About',      path: '/about'     },
  { label: 'Contact',    path: '/contact'   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3' : 'py-5'
    }`}>
      <div className={`max-w-6xl mx-auto px-6 transition-all duration-500`}>
        <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0F]/90 backdrop-blur-xl border border-white/[0.07] shadow-2xl'
            : 'bg-transparent'
        }`}>

          {/* Logo */}
          <Link to="/" className="font-mono text-[#00FF88] font-semibold text-lg tracking-tight">
            npv<span className="text-white/30">.</span>dev
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {LINKS.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === path
                    ? 'text-[#00FF88] bg-[#00FF88]/10'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a
            href="mailto:npvan21122003@gmail.com"
            className="hidden md:inline-flex btn-accent text-xs py-2 px-4"
          >
            Hire Me ↗
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          >
            <span className={`block h-px bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : 'w-6'}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${open ? 'opacity-0 w-0' : 'w-4'}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px] w-6' : 'w-5'}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden mt-2 overflow-hidden transition-all duration-300 ${open ? 'max-h-64' : 'max-h-0'}`}>
          <div className="bg-[#0A0A0F]/95 backdrop-blur-xl border border-white/[0.07] rounded-2xl px-4 py-3 flex flex-col gap-1">
            {LINKS.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-[#00FF88] bg-[#00FF88]/10'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
