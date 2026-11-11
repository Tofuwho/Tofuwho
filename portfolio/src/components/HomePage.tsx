import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Copy,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROFILE_META, PROJECTS, WHAT_I_BRING } from '../data/portfolioData';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_META.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE_META.email}`;
    }
  };

  const techCategories = [
    {
      label: 'Full-Stack & Web',
      skills: ['Python', 'Django 4.2', 'FastAPI', 'Next.js 16', 'React 19', 'TypeScript', 'Node.js', 'Electron'],
    },
    {
      label: 'Data & Search',
      skills: ['Polars', 'PyMuPDF', 'RapidFuzz', 'NLTK', 'SheetJS', 'PDF.js', 'Audit Lineage'],
    },
    {
      label: 'Databases, Testing & Ops',
      skills: ['MariaDB', 'MySQL', 'SQLite', 'SQLAlchemy', 'pytest', 'ruff', 'Docker', 'GitHub Actions'],
    },
  ];

  return (
    <div className="w-full space-y-12 sm:space-y-14">
      {/* Calm Gloss White Hero Introduction */}
      <section className="w-full pt-2 sm:pt-4">
        <div className="glass-card p-7 sm:p-11 lg:p-14 text-center relative">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-5 sm:gap-6 relative z-10">
            {/* Open for Hiring + Location Badge */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full py-1 px-3.5 border border-emerald-200 bg-emerald-50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs text-emerald-800 font-semibold">
                  Open for Hiring · Remote, Hybrid &amp; On-Site
                </span>
              </div>

              <div className="inline-flex items-center gap-2 glass-badge py-1 px-3.5">
                <span className="text-xs text-neutral-600 font-medium">NCR, Philippines</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
              Calm, reliable software.<br />
              <span className="gradient-text-accent">Built for everyday clarity.</span>
            </h1>

            {/* Clean Introduction */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl font-normal">
              Hi, I'm <strong className="text-neutral-900 font-semibold">{PROFILE_META.name}</strong>{' '}
              (<span className="font-mono text-neutral-700">{PROFILE_META.handle}</span>) — a Computer Science graduate
              and full-stack developer building audited data platforms, document search tools, and production office systems.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1 w-full">
              <button
                onClick={() => setActiveTab('projects')}
                className="btn-primary text-xs sm:text-sm py-2.5 px-5"
              >
                <span>View Selected Builds</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('contact')}
                className="btn-emerald text-xs sm:text-sm py-2.5 px-5"
              >
                <span>Get in Touch</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="btn-secondary text-xs sm:text-sm py-2.5 px-4"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Copied {PROFILE_META.email}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={PROFILE_META.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-xs sm:text-sm py-2.5 px-4"
              >
                <GithubIcon className="w-4 h-4 text-neutral-700" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What I Bring to the Table */}
      <section className="w-full space-y-4">
        <div className="px-1">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 font-mono">
            Introduction
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mt-1">
            What I Bring to the Table
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {WHAT_I_BRING.map((item) => (
            <div key={item.title} className="glass-card p-6 space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="text-sm font-bold text-neutral-900">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Repositories (3 focused builds) */}
      <section className="w-full space-y-5">
        <div className="flex items-center justify-between px-1">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 font-mono">
              Selected Repositories
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mt-1">
              Featured Work ({PROJECTS.length})
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('projects')}
            className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Inspect details</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="glass-card p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-neutral-500">
                    0{index + 1} · {project.category}
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {project.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900">{project.title}</h3>
                  <p className="text-xs text-neutral-500 font-medium mt-0.5">{project.subtitle}</p>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 border border-black/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap lg:flex-col items-stretch lg:items-end justify-end gap-2.5 shrink-0">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-emerald text-xs py-2 px-4"
                  >
                    <span>{project.liveDemoLabel ?? 'Live Demo'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-xs py-2 px-4"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clean Technical Stack */}
      <section className="glass-card p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-black/[0.08] pb-4">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-neutral-700" />
            <h2 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
              Technical Stack
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('experience')}
            className="text-xs text-neutral-600 hover:text-neutral-900 font-mono flex items-center gap-1 cursor-pointer"
          >
            <span>TESDA &amp; Background</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techCategories.map((cat) => (
            <div key={cat.label} className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">
                {cat.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-neutral-700 border border-black/[0.08] shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
