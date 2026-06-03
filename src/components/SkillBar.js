import { useEffect, useRef, useState } from 'react';

export default function SkillBar({ skill }) {
  const [w, setW] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setW(skill.level), 100); obs.disconnect(); }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [skill.level]);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-white/70 group-hover:text-white transition-colors font-medium">{skill.name}</span>
        <span className="font-mono text-xs text-[#00FF88]">{skill.level}%</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${w}%`,
            background: 'linear-gradient(90deg, #00FF88, #00CFFF)',
            boxShadow: w > 0 ? '0 0 12px rgba(0,255,136,0.5)' : 'none',
          }}
        />
      </div>
    </div>
  );
}
