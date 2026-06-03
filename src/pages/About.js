import React from 'react';
import { PROFILE, SKILLS, EXPERIENCE } from '../utils/data';
import SkillBar from '../components/SkillBar';

function TimelineItem({ exp }) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-[#00FF88]/50 to-transparent" />
      {/* Dot */}
      <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#00FF88] ring-4 ring-[#00FF88]/20" />

      <div className="card-glass p-6">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-bold text-white text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {exp.role}
            </h3>
            <p className="text-[#00FF88] text-sm font-medium">{exp.company}</p>
            <p className="text-white/30 text-xs">{exp.location}</p>
          </div>
          <div className="text-right">
            <span className="tag text-xs">{exp.period}</span>
            <p className="text-white/30 text-xs mt-1">{exp.type}</p>
          </div>
        </div>
        <ul className="space-y-2">
          {exp.points.map((p, i) => (
            <li key={i} className="flex gap-2 text-sm text-white/50">
              <span className="text-[#00FF88] mt-0.5 flex-shrink-0">▸</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function About() {
  const cats = [...new Set(SKILLS.map(s => s.cat))];

  return (
    <main className="pt-28 pb-24">
      <div className="section-wrap">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label">About Me</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Về Tôi<span className="gradient-text">.</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-white/50 text-lg leading-relaxed">{PROFILE.bio}</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '✉️', label: 'Email',    value: PROFILE.email    },
                { icon: '📞', label: 'Phone',    value: PROFILE.phone    },
                { icon: '📍', label: 'Location', value: PROFILE.location },
                { icon: '🎓', label: 'GPA',      value: PROFILE.education.gpa },
              ].map(({ icon, label, value }) => (
                <div key={label} className="card-glass p-4">
                  <p className="text-white/20 text-xs mb-1">{icon} {label}</p>
                  <p className="text-white/70 text-sm font-mono truncate">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <p className="section-label">Education</p>
          <div className="card-glass p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#00FF88]/10 flex items-center justify-center text-3xl flex-shrink-0">
              🎓
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {PROFILE.education.school}
              </h3>
              <p className="text-[#00FF88] text-sm mb-2">{PROFILE.education.major}</p>
              <div className="flex flex-wrap gap-3">
                <span className="tag">{PROFILE.education.period}</span>
                <span className="tag">GPA: {PROFILE.education.gpa}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <p className="section-label">Technical Skills</p>
          <h2 className="text-3xl font-bold text-white mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Kỹ Năng
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cats.map((cat, idx) => {
              const catSkills = SKILLS.filter(s => s.cat === cat);
              return (
                <div key={cat} className="card-glass p-6 animate-fade-in" style={{ animationDelay: `${idx * 80}ms` }}>
                  <p className="font-mono text-xs tracking-widest uppercase text-[#00FF88] mb-5 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#00FF88]" /> {cat}
                  </p>
                  <div className="space-y-5">
                    {catSkills.map(s => <SkillBar key={s.name} skill={s} />)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience */}
        <div>
          <p className="section-label">Experience</p>
          <h2 className="text-3xl font-bold text-white mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Kinh Nghiệm
          </h2>
          {EXPERIENCE.map(exp => <TimelineItem key={exp.id} exp={exp} />)}
        </div>
      </div>
    </main>
  );
}
