import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, Terminal, MessageSquare, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Job Opportunity',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jcayabyab655@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="cyber-panel p-6 border-2 border-[#00f0ff] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="cyber-badge text-xs">INQUIRY & TERMINAL HUB</span>
            <span className="font-mono text-xs text-[#00f0ff]">&gt; CONTACT_TRANSMITTER</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl font-extrabold text-white mt-1">
            LET'S BUILD <span className="gradient-text-cyan">SOMETHING EXTRAORDINARY</span>
          </h2>
          <p className="text-slate-300 font-['Space_Grotesk'] text-sm mt-1">
            Actively seeking Junior Software Engineer, Full-Stack Developer, or AI/Automation roles.
          </p>
        </div>

        <button
          onClick={handleCopyEmail}
          className="cyber-badge-lime text-xs py-2.5 px-4 cursor-pointer hover:scale-105 transition-transform"
        >
          {copiedEmail ? <Check className="w-4 h-4 text-[#ccff00]" /> : <Copy className="w-4 h-4 text-[#ccff00]" />}
          <span>{copiedEmail ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL: jcayabyab655@gmail.com'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="cyber-panel cyber-panel-magenta p-6 space-y-6 bg-[#0c0822]/95 border-2 border-[#ff007f]">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#ff007f]">
                <Terminal className="w-4 h-4" /> TRANSMITTER_CLI_FORM
              </div>
              <span className="font-mono text-[10px] text-slate-400">ENCRYPTION: 256-BIT SSL</span>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#00f0ff]/10 border border-[#00f0ff] rounded-lg text-center space-y-3">
                <ShieldCheck className="w-10 h-10 text-[#00f0ff] mx-auto animate-bounce" />
                <h3 className="font-['Outfit'] text-xl font-bold text-white">
                  TRANSMISSION RECEIVED SUCCESSFULLY!
                </h3>
                <p className="text-xs font-mono text-slate-300">
                  Thank you, <strong className="text-[#00f0ff]">{formData.name}</strong>. Your inquiry has been queued for immediate review.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="cyber-badge text-xs py-1.5 px-4 cursor-pointer mt-2"
                >
                  SEND ANOTHER MESSAGE &gt;
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="space-y-1.5">
                  <label className="text-slate-300 flex items-center gap-1.5">
                    <span className="text-[#00f0ff] font-bold">&gt;</span> ENTER_NAME:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full bg-[#080514] border border-[#ff007f]/40 focus:border-[#00f0ff] focus:outline-none p-2.5 rounded text-white font-mono placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 flex items-center gap-1.5">
                    <span className="text-[#00f0ff] font-bold">&gt;</span> SENDER_EMAIL:
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-[#080514] border border-[#ff007f]/40 focus:border-[#00f0ff] focus:outline-none p-2.5 rounded text-white font-mono placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 flex items-center gap-1.5">
                    <span className="text-[#00f0ff] font-bold">&gt;</span> INQUIRY_TYPE:
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-[#080514] border border-[#ff007f]/40 focus:border-[#00f0ff] focus:outline-none p-2.5 rounded text-white font-mono"
                  >
                    <option value="Job Opportunity">Job Opportunity (Full-Time / Junior Software Eng)</option>
                    <option value="Full-Stack Project">Full-Stack Project Development</option>
                    <option value="AI Workflow Consultation">AI Agentic Workflow Consultation</option>
                    <option value="Other Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 flex items-center gap-1.5">
                    <span className="text-[#00f0ff] font-bold">&gt;</span> PAYLOAD_MESSAGE:
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message details here..."
                    className="w-full bg-[#080514] border border-[#ff007f]/40 focus:border-[#00f0ff] focus:outline-none p-2.5 rounded text-white font-mono placeholder:text-slate-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full brutalist-card py-3 rounded font-mono font-bold text-sm text-[#00f0ff] flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] transition-transform"
                >
                  <Send className="w-4 h-4 text-[#ff007f]" />
                  <span>{submitting ? 'TRANSMITTING PAYLOAD...' : 'TRANSMIT MESSAGE NOW'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="cyber-panel p-6 space-y-4">
            <h3 className="font-['Outfit'] text-xl font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#00f0ff]" />
              DIRECT CHANNELS
            </h3>

            <div className="space-y-3 font-mono text-xs text-slate-300">
              <a
                href="mailto:jcayabyab655@gmail.com"
                className="p-3 bg-white/5 hover:bg-[#00f0ff]/10 rounded border border-white/10 hover:border-[#00f0ff] flex items-center justify-between transition-colors block"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#00f0ff]" />
                  <span>jcayabyab655@gmail.com</span>
                </div>
                <span className="text-[10px] text-[#00f0ff] font-bold">EMAIL &gt;</span>
              </a>

              <a
                href="https://github.com/Tofuwho"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 hover:bg-[#ff007f]/10 rounded border border-white/10 hover:border-[#ff007f] flex items-center justify-between transition-colors block"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-[#ff007f]" />
                  <span>github.com/Tofuwho</span>
                </div>
                <span className="text-[10px] text-[#ff007f] font-bold">GITHUB &gt;</span>
              </a>

              <div className="p-3 bg-white/5 rounded border border-white/10 flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#ccff00]" />
                <span>NCR, Philippines (Open to Remote & On-Site)</span>
              </div>
            </div>
          </div>

          <div className="cyber-panel cyber-panel-lime p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[#ccff00]">
                🐍 CONTRIBUTION SNAKE GRAPHIC
              </span>
              <span className="text-[10px] font-mono text-slate-400">267+ COMMITS</span>
            </div>

            <div className="p-3 bg-[#080514] rounded border border-[#ccff00]/30 space-y-2">
              <div className="grid grid-cols-12 gap-1 py-1">
                {Array.from({ length: 48 }).map((_, i) => {
                  const isBright = i % 5 === 0 || i % 7 === 0;
                  const isSuper = i === 12 || i === 23 || i === 34;
                  return (
                    <div
                      key={i}
                      className={`h-3.5 rounded-sm transition-all ${
                        isSuper
                          ? 'bg-[#ccff00] shadow-[0_0_8px_#ccff00]'
                          : isBright
                          ? 'bg-[#00f0ff]'
                          : 'bg-[#ff007f]/20'
                      }`}
                    />
                  );
                })}
              </div>
              <p className="text-[11px] font-mono text-slate-400 text-center">
                Consistently committing code to full-stack & AI repositories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
