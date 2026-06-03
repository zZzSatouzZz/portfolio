import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) {
        dot.current.style.left  = mx - 4 + 'px';
        dot.current.style.top   = my - 4 + 'px';
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;
    let raf;
    const animate = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      if (ring.current) {
        ring.current.style.left = rx - 18 + 'px';
        ring.current.style.top  = ry - 18 + 'px';
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    // Scale up ring on hoverable elements
    const onEnter = () => ring.current && (ring.current.style.transform = 'scale(1.8)');
    const onLeave = () => ring.current && (ring.current.style.transform = 'scale(1)');
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
