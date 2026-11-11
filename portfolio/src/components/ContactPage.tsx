import React, { useState } from 'react';
import {
  ArrowUpRight,
  Briefcase,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROFILE_META, RECRUITER_BRIEF_TEXT } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [dispatched, setDispatched] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Full-Time / Junior SWE Opportunity',
    message: '',
  });

  const buildMailtoHref = () => {
    const subject = `[Hiring / Inquiry] ${formData.type} — ${formData.name || 'Recruiter'}`;
    const body = [
      `Hi John Mark,`,
      ``,
      formData.message || 'I would love to connect regarding an engineering role.',
      ``,
      `---`,
      `From: ${formData.name || 'N/A'}`,
      `Reply Email: ${formData.email || 'N/A'}`,
      `Topic: ${formData.type}`,
    ].join('\n');

    return `mailto:${PROFILE_META.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = buildMailtoHref();
    setDispatched(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_META.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE_META.email}`;
    }
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(RECRUITER_BRIEF_TEXT);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2200);
    } catch {
      // Ignore clipboard failure
    }
  };

  const handleCopyDraft = async () => {
    const draft = `To: ${PROFILE_META.email}\nSubject: [${formData.type}] from ${formData.name || 'Recruiter'}\n\n${formData.message}\n\nReply-To: ${formData.email}`;
    try {
      await navigator.clipboard.writeText(draft);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2000);
    } catch {
      // Ignore clipboard failure
    }
  };

  return (
    <div className="w-full space-y-10 sm:space-y-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full py-1 px-3.5 border border-emerald-200 bg-emerald-50">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-semibold text-emerald-800">Open for Hiring</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
            Let's Connect
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Available for Junior Software Engineer, Full-Stack Developer, and Data / AI Systems roles across remote, hybrid, or NCR on-site teams.
          </p>
        </div>

        <button onClick={handleCopyBrief} className="btn-secondary text-xs py-2 px-4 shrink-0">
          {copiedBrief ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700">Summary Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-neutral-500" />
              <span>Copy Profile Summary</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Direct Email Composer */}
        <div className="lg:col-span-7 w-full">
          <div className="glass-card p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct Email Composer</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                Send an Inquiry or Role Note
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Opens your default email client pre-filled, or copy the formatted draft for webmail.
              </p>
            </div>

            {dispatched && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-700 space-y-1">
                  <div className="font-semibold text-neutral-900">Email draft opened for {PROFILE_META.email}</div>
                  <p className="text-neutral-600">
                    If no desktop mail app opened, click "Copy Draft" below or email{' '}
                    <span className="text-emerald-700 font-mono font-semibold">{PROFILE_META.email}</span> directly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-neutral-700 font-semibold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jordan Reyes"
                    className="w-full bg-white border border-black/10 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/20 focus:outline-none p-3 rounded-xl text-neutral-900 placeholder:text-neutral-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-neutral-700 font-semibold">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jordan@company.com"
                    className="w-full bg-white border border-black/10 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/20 focus:outline-none p-3 rounded-xl text-neutral-900 placeholder:text-neutral-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-700 font-semibold">Role / Inquiry Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full bg-white border border-black/10 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/20 focus:outline-none p-3 rounded-xl text-neutral-900 transition-colors"
                >
                  <option value="Full-Time / Junior SWE Opportunity">Junior Software Engineer (Full-Time)</option>
                  <option value="Full-Stack Developer (Python / TypeScript)">Full-Stack Developer (Python / TypeScript)</option>
                  <option value="AI & Data Systems Role">Data &amp; AI Systems / Backend Role</option>
                  <option value="Contract / Project Inquiry">Contract / System Build Inquiry</option>
                  <option value="General Collaboration">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-700 font-semibold">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share role details, interview schedule, or questions about Data-Assist / ThesisLibrary / app-cse-public-demo..."
                  className="w-full bg-white border border-black/10 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/20 focus:outline-none p-3 rounded-xl text-neutral-900 placeholder:text-neutral-400 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button type="submit" className="flex-1 btn-emerald py-3 text-xs">
                  <Send className="w-3.5 h-3.5" />
                  <span>Open Email Draft</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="btn-secondary py-3 px-4 text-xs"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Draft Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Draft</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right: Target Roles & Direct Channels */}
        <div className="lg:col-span-5 space-y-4 w-full">
          {/* Target Roles Card */}
          <div className="glass-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700 font-mono flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-emerald-700" />
                <span>Target Roles</span>
              </h3>
              <span className="text-[11px] font-mono text-emerald-700 font-semibold">Immediate</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {PROFILE_META.targetRoles.map((role) => (
                <span
                  key={role}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white text-neutral-800 border border-black/[0.08]"
                >
                  {role}
                </span>
              ))}
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed">
              {PROFILE_META.availability}. Happy to walk through any repository or live demo on a call.
            </p>
          </div>

          {/* Direct Channels */}
          <div className="glass-card p-6 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">
              Direct Channels
            </h3>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl bg-white border border-black/[0.08] flex items-center justify-between gap-2">
                <a href={`mailto:${PROFILE_META.email}`} className="flex items-center gap-3 min-w-0 group">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-neutral-500 font-medium">Direct Email</div>
                    <div className="text-xs text-neutral-900 font-semibold truncate group-hover:text-emerald-700 transition-colors">
                      {PROFILE_META.email}
                    </div>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-[11px] text-neutral-700 font-mono cursor-pointer shrink-0"
                >
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <a
                href={PROFILE_META.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-white hover:bg-neutral-50 border border-black/[0.08] flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 border border-black/[0.06] flex items-center justify-center">
                    <GithubIcon className="w-4 h-4 text-neutral-900" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 font-medium">GitHub Profile</div>
                    <span className="text-xs text-neutral-900 font-semibold group-hover:text-emerald-700 transition-colors">
                      github.com/Tofuwho
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
              </a>

              <a
                href="https://tofuwho.github.io/ThesisLibrary/"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-white hover:bg-neutral-50 border border-black/[0.08] flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 border border-black/[0.06] flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-neutral-700" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 font-medium">Live OPAC Demo</div>
                    <span className="text-xs text-neutral-900 font-semibold group-hover:text-emerald-700 transition-colors">
                      tofuwho.github.io/ThesisLibrary
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
              </a>

              <div className="p-3.5 rounded-xl bg-white border border-black/[0.08] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 border border-black/[0.06] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-neutral-700" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-500 font-medium">Location</div>
                  <span className="text-xs text-neutral-700 font-medium">
                    {PROFILE_META.location} · Remote &amp; On-Site
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
