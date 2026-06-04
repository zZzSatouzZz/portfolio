import React from 'react';
import { Link } from 'react-router-dom';
import { PROFILE } from '../utils/data';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-mono text-[#00FF88] font-semibold">npv.dev</Link>
        <p className="font-mono text-xs text-white/20">
          © {new Date().getFullYear()} {PROFILE.name} · Built with React + TailwindCSS
        </p>
        <div className="flex gap-4">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-white/30 hover:text-[#00FF88] text-xs font-mono transition-colors">GitHub</a>
          <a href={`mailto:${PROFILE.email}`} className="text-white/30 hover:text-[#00FF88] text-xs font-mono transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
