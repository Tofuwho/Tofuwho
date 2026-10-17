import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ArrowUpRight, MessageSquare, Terminal } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Job Opportunity',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full space-y-10 sm:space-y-12">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 glass-badge">
          <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Let's Build Something Exceptional
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          Available for software engineering roles, full-stack application development, and high-performance system architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Form Column */}
        <div className="lg:col-span-7 w-full">
          <div className="glass-card p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Send a Direct Inquiry
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Fill in your details below. I usually respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Received Successfully</h4>
                <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your note has been queued and I will reach out shortly via <span className="text-indigo-400">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', type: 'Job Opportunity', message: '' });
                  }}
                  className="btn-secondary text-xs mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="space-y-1.5">
                  <label className="text-neutral-300 font-semibold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full bg-white/[0.04] border border-white/10 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/30 focus:outline-none p-3 rounded-xl text-white placeholder:text-neutral-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-neutral-300 font-semibold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-white/[0.04] border border-white/10 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/30 focus:outline-none p-3 rounded-xl text-white placeholder:text-neutral-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-neutral-300 font-semibold">Subject / Inquiry Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-[#11131a] border border-white/10 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/30 focus:outline-none p-3 rounded-xl text-white transition-colors"
                  >
                    <option value="Job Opportunity">Software Engineering Role (Full-Time / Contract)</option>
                    <option value="Full-Stack Project">Full-Stack System Architecture & Build</option>
                    <option value="AI Workflow Consultation">Search Engine & AI Workflow Consultation</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-neutral-300 font-semibold">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, project requirements, or opportunity..."
                    className="w-full bg-white/[0.04] border border-white/10 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/30 focus:outline-none p-3 rounded-xl text-white placeholder:text-neutral-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary py-3 text-xs mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{submitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Direct Channels Column */}
        <div className="lg:col-span-5 space-y-4 w-full">
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">
              Direct Channels
            </h3>

            <div className="space-y-2.5">
              <a
                href="mailto:jcayabyab655@gmail.com"
                className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-indigo-400/30 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 font-medium">Email</div>
                    <span className="text-xs text-white font-semibold group-hover:text-indigo-300 transition-colors">
                      jcayabyab655@gmail.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://github.com/Tofuwho"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-indigo-400/30 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                    <GithubIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 font-medium">GitHub Profile</div>
                    <span className="text-xs text-white font-semibold group-hover:text-indigo-300 transition-colors">
                      github.com/Tofuwho
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              </a>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400 font-medium">Location</div>
                  <span className="text-xs text-neutral-300 font-medium">
                    NCR, Philippines · Open to Remote & On-Site
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Repository Activity Card */}
          <div className="glass-card p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Repository Velocity</span>
              <span className="text-xs text-indigo-400 font-mono font-medium">267+ Commits</span>
            </div>

            <div className="overflow-x-auto pb-1">
              <div className="grid grid-cols-12 gap-1.5 min-w-[280px] py-1">
                {Array.from({ length: 48 }).map((_, i) => {
                  const isSuper = i === 8 || i === 18 || i === 29 || i === 41;
                  const isBright = i % 3 === 0;
                  return (
                    <div
                      key={i}
                      className={`h-3 rounded-[3px] transition-all ${
                        isSuper
                          ? 'bg-indigo-400 shadow-[0_0_6px_rgba(129,140,248,0.6)]'
                          : isBright
                          ? 'bg-neutral-300'
                          : 'bg-neutral-800'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
            <p className="text-[11px] text-neutral-400 text-center leading-relaxed">
              Consistently contributing code to high-availability production repositories.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
