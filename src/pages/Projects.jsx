import React, { useState } from 'react';
import { PROJECTS } from '../utils/data';

const CATS = ['All', 'Full Stack', 'Frontend'];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const techs = Array.isArray(project.tech) ? project.tech : [];

  return (
    <div
      className="card-glass p-8 group relative overflow-hidden transition-all duration-500"
      style={{ borderColor: hovered ? `${project.color}30` : 'rgba(255,255,255,0.07)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow corner */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500"
        style={{ background: project.color, opacity: hovered ? 0.08 : 0 }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${project.color}15` }}
        >
          {project.id === 1 ? '📊' : '🌐'}
        </div>
        <div className="flex flex-col items-end gap-2">
          {project.featured && (
            <span
              className="text-xs font-mono px-3 py-1 rounded-full"
              style={{ background: `${project.color}15`, color: project.color }}
            >
              ✦ Featured
            </span>
          )}
          <span className="tag text-[10px]">{project.period}</span>
        </div>
      </div>

      {/* Title */}
      <h2
        className="text-2xl font-bold text-white mb-1 transition-colors duration-300"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {project.title}
      </h2>
      <p className="font-mono text-xs text-white/30 mb-4 uppercase tracking-widest">
        {project.subtitle}
      </p>

      {/* Desc */}
      <p className="text-white/50 text-sm leading-relaxed mb-6">{project.desc}</p>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mb-8">
        {techs.map(t => (
          <span
            key={t}
            className="px-3 py-1 rounded-lg text-xs font-mono transition-colors duration-200"
            style={{
              background: hovered ? `${project.color}12` : 'rgba(255,255,255,0.04)',
              color: hovered ? project.color : 'rgba(255,255,255,0.4)',
              border: `1px solid ${hovered ? project.color + '30' : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost text-xs py-2 px-4 flex-1 justify-center group/btn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-accent text-xs py-2 px-4 flex-1 justify-center"
            style={{ background: project.color }}
          >
            Live Demo ↗
          </a>
        ) : (
          <div className="btn-ghost text-xs py-2 px-4 flex-1 justify-center opacity-30 cursor-not-allowed">
            Demo Soon
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <main className="pt-28 pb-24 min-h-screen">
      <div className="section-wrap">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">Portfolio</p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Dự Án
            <span className="gradient-text">.</span>
          </h1>
          <p className="text-white/40 max-w-lg">
            Những gì tôi đã xây dựng — từ ý tưởng đến sản phẩm hoàn chỉnh.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>

        {/* Empty note */}
        <div className="mt-12 card-glass p-6 text-center">
          <p className="text-white/20 text-sm font-mono">
            ✦ Đang cập nhật thêm project... ✦
          </p>
        </div>
      </div>
    </main>
  );
}
