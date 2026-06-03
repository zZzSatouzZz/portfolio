import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROFILE, SKILLS, PROJECTS, TECH_MARQUEE } from '../utils/data';
import SkillBar from '../components/SkillBar';

// ---- Animated counter ----
function Counter({ target, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const num = parseInt(target);
        let cur = 0;
        const step = Math.ceil(num / 40);
        const t = setInterval(() => {
          cur = Math.min(cur + step, num);
          setVal(cur);
          if (cur >= num) clearInterval(t);
        }, 30);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ---- Floating blob ----
function Blob({ className, style }) {
  return (
    <div
      className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
      style={style}
    />
  );
}

// ---- Project mini card ----
function ProjectMini({ project }) {
  const techs = project.tech.slice(0, 3);
  return (
    <Link
      to="/projects"
      className="card-glass p-5 group cursor-pointer block"
      style={{ borderColor: `${project.color}20` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
          style={{ background: `${project.color}15`, color: project.color }}
        >
          {project.id === 1 ? '📊' : '🌐'}
        </div>
        {project.featured && (
          <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{ background: `${project.color}15`, color: project.color }}>
            Featured
          </span>
        )}
      </div>
      <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-[#00FF88] transition-colors leading-snug">
        {project.title}
      </h3>
      <p className="text-white/40 text-xs mb-3 line-clamp-2 leading-relaxed">{project.desc}</p>
      <div className="flex flex-wrap gap-1">
        {techs.map(t => (
          <span key={t} className="tag text-[10px]">{t}</span>
        ))}
        {project.tech.length > 3 && (
          <span className="tag text-[10px]">+{project.tech.length - 3}</span>
        )}
      </div>
    </Link>
  );
}

export default function Home() {
  const heroRef = useRef(null);

  // Parallax on mouse move
  useEffect(() => {
    const fn = (e) => {
      if (!heroRef.current) return;
      const x = (e.clientX / window.innerWidth  - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      heroRef.current.style.setProperty('--mx', `${x}px`);
      heroRef.current.style.setProperty('--my', `${y}px`);
    };
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  // Group skills by category
  const cats = [...new Set(SKILLS.map(s => s.cat))];

  return (
    <main>
      {/* ===================== HERO ===================== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center grid-bg overflow-hidden"
      >
        {/* Blobs */}
        <Blob className="w-[600px] h-[600px] top-[-100px] left-[-200px] animate-float"
          style={{ background: 'radial-gradient(circle, rgba(0,255,136,0.12) 0%, transparent 70%)' }} />
        <Blob className="w-[500px] h-[500px] bottom-[-100px] right-[-100px] animate-float-delay"
          style={{ background: 'radial-gradient(circle, rgba(255,51,102,0.08) 0%, transparent 70%)' }} />

        <div className="section-wrap relative z-10 w-full pt-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF88]/20 bg-[#00FF88]/5 mb-8 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                <span className="font-mono text-[#00FF88] text-xs tracking-widest">AVAILABLE FOR WORK</span>
              </div>

              {/* Name */}
              <h1 className="font-display font-bold leading-[1.05] mb-6 animate-slide-up"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <span className="block text-white/30 text-xl font-normal mb-2 font-mono">Hello, I'm</span>
                <span className="block text-5xl md:text-7xl text-white">Phương</span>
                <span className="block text-5xl md:text-7xl gradient-text">Văn.</span>
              </h1>

              {/* Title */}
              <div className="flex items-center gap-3 mb-6 animate-slide-up-delay">
                <span className="h-px flex-1 max-w-[40px] bg-[#00FF88]/40" />
                <p className="font-mono text-[#00FF88] text-sm tracking-widest uppercase">
                  {PROFILE.title}
                </p>
              </div>

              {/* Bio */}
              <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-lg animate-slide-up-delay2">
                {PROFILE.bio}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-white/30 font-mono mb-8 animate-slide-up-delay2">
                <span>📍 {PROFILE.location}</span>
                <span>🎓 {PROFILE.education.school}</span>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 animate-slide-up-delay2">
                <Link to="/projects" className="btn-accent">
                  View Projects →
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Contact Me
                </Link>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Right: Stats + Project previews */}
            <div className="space-y-4 animate-slide-up-delay">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {PROFILE.stats.map(({ value, label }) => (
                  <div key={label} className="card-glass p-4 text-center">
                    <div className="font-mono text-2xl font-bold gradient-text mb-1">
                      <Counter target={parseInt(value)} suffix={value.replace(/\d/g, '')} />
                    </div>
                    <div className="text-white/30 text-xs">{label}</div>
                  </div>
                ))}
              </div>

              {/* Project previews */}
              {PROJECTS.map(p => <ProjectMini key={p.id} project={p} />)}

              {/* Quick info */}
              <div className="card-glass p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00FF88]/10 flex items-center justify-center text-lg flex-shrink-0">
                  📬
                </div>
                <div>
                  <p className="text-white/30 text-xs mb-0.5">Email</p>
                  <a href={`mailto:${PROFILE.email}`} className="text-white/70 text-sm hover:text-[#00FF88] transition-colors font-mono">
                    {PROFILE.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono text-white/20 text-xs">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* ===================== MARQUEE ===================== */}
      <div className="border-y border-white/[0.06] py-4 overflow-hidden bg-[#00FF88]/[0.02]">
        <div className="flex animate-marquee whitespace-nowrap">
          {TECH_MARQUEE.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-6 font-mono text-xs text-white/30 uppercase tracking-widest">
              <span className="text-[#00FF88]">✦</span> {t}
            </span>
          ))}
        </div>
      </div>

      {/* ===================== SKILLS ===================== */}
      <section className="py-24">
        <div className="section-wrap">
          <div className="text-center mb-16">
            <p className="section-label">Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Kỹ Năng Kỹ Thuật
            </h2>
            <p className="text-white/30 max-w-lg mx-auto">
              Các công nghệ tôi làm việc hằng ngày
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cats.map((cat, idx) => {
              const catSkills = SKILLS.filter(s => s.cat === cat);
              return (
                <div
                  key={cat}
                  className="card-glass p-6 animate-fade-in"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <p className="font-mono text-xs tracking-widest uppercase text-[#00FF88] mb-5 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#00FF88]" />
                    {cat}
                  </p>
                  <div className="space-y-5">
                    {catSkills.map(s => <SkillBar key={s.name} skill={s} />)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="py-20 relative overflow-hidden">
        <Blob className="w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)' }} />
        <div className="section-wrap relative z-10 text-center">
          <div className="card-glass p-12 max-w-2xl mx-auto noise">
            <p className="section-label">Let's Build Together</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Có dự án muốn thực hiện?
            </h2>
            <p className="text-white/40 mb-8">
              Tôi luôn mở cửa cho các cơ hội và ý tưởng mới. Hãy liên hệ!
            </p>
            <Link to="/contact" className="btn-accent text-base px-8 py-4 animate-pulse-accent">
              Liên Hệ Ngay →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
