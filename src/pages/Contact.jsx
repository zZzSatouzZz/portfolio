import React, { useState } from 'react';
import { PROFILE } from '../utils/data';

const INPUT = `w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08]
  text-white placeholder-white/20 text-sm font-body
  focus:outline-none focus:border-[#00FF88]/50 focus:bg-white/[0.06]
  transition-all duration-200`;

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    // Mở email client với thông tin đã điền
    const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(
      `Tên: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.open(mailto, '_blank');
    setTimeout(() => { setLoading(false); setSent(true); }, 800);
  };

  return (
    <main className="pt-28 pb-24 min-h-screen relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)' }} />

      <div className="section-wrap relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-label">Get In Touch</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Liên Hệ<span className="gradient-text">.</span>
            </h1>
            <p className="text-white/40 max-w-md mx-auto">
              Có dự án muốn hợp tác? Hay chỉ muốn nói chuyện? Inbox luôn mở!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="md:col-span-2 space-y-4">
              {[
                { icon: '✉️', label: 'Email',    value: PROFILE.email,    href: `mailto:${PROFILE.email}` },
                { icon: '📞', label: 'Phone',    value: PROFILE.phone,    href: `tel:${PROFILE.phone}` },
                { icon: '📍', label: 'Location', value: PROFILE.location, href: null },
                { icon: '💻', label: 'GitHub',   value: 'zZzSatouzZz',    href: PROFILE.github },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="card-glass p-5 group">
                  <p className="text-white/30 text-xs mb-2 font-mono">{icon} {label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-white/70 text-sm hover:text-[#00FF88] transition-colors font-mono truncate block">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white/70 text-sm font-mono">{value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="md:col-span-3 card-glass p-8">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-2">Đã mở email client!</h3>
                  <p className="text-white/40 text-sm mb-6">Kiểm tra email app và gửi tin nhắn nhé.</p>
                  <button onClick={() => setSent(false)} className="btn-ghost text-sm">
                    Gửi thêm
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/30 text-xs font-mono mb-2 block">Tên *</label>
                      <input name="name" value={form.name} onChange={handleChange} required
                        placeholder="Nguyễn Văn A" className={INPUT} />
                    </div>
                    <div>
                      <label className="text-white/30 text-xs font-mono mb-2 block">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required
                        placeholder="your@email.com" className={INPUT} />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/30 text-xs font-mono mb-2 block">Chủ đề</label>
                    <input name="subject" value={form.subject} onChange={handleChange}
                      placeholder="Muốn hợp tác về..." className={INPUT} />
                  </div>
                  <div>
                    <label className="text-white/30 text-xs font-mono mb-2 block">Tin nhắn *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required
                      rows={5} placeholder="Nội dung tin nhắn..."
                      className={`${INPUT} resize-none`} />
                  </div>
                  <button type="submit" disabled={loading}
                    className="btn-accent w-full justify-center py-3 disabled:opacity-50">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Đang mở...
                      </span>
                    ) : 'Gửi Tin Nhắn →'}
                  </button>
                  <p className="text-white/20 text-xs text-center font-mono">
                    * Sẽ mở email app với nội dung đã điền sẵn
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
