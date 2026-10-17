import React from 'react';
import { Award, ArrowRight, CheckCircle2, GitCommit, ChevronRight, Layers, Sparkles, Terminal, Code2, Database, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab }) => {
  const techCategories = [
    {
      label: 'Core & Backend',
      skills: ['Python', 'Django', 'TypeScript', 'Node.js', 'Express', 'Electron']
    },
    {
      label: 'Search & Document AI',
      skills: ['PyMuPDF', 'RapidFuzz', 'Levenshtein Distance', 'LLM Agentic Systems', 'Vector Search']
    },
    {
      label: 'Data & Infrastructure',
      skills: ['MySQL', 'SQLite', 'REST APIs', 'GitHub Actions', 'CI/CD Pipelines', 'Git-Flow']
    }
  ];

  return (
    <div className="w-full space-y-12 sm:space-y-16">
      
      {/* Hero Section */}
      <section className="w-full pt-2 sm:pt-6">
        <div className="glass-card p-6 sm:p-10 lg:p-12 text-center relative overflow-hidden">
          {/* Subtle Ambient Radial Highlight inside card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto flex flex-col items-center gap-5 sm:gap-6 relative z-10">
            {/* Academic Honor Badge */}
            <div className="inline-flex items-center gap-2 glass-badge py-1 px-3.5 border border-indigo-400/20 bg-indigo-500/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              <span className="text-xs text-neutral-300 font-medium">
                BS Computer Science · Honor Standing (GWA 1.65)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Engineered with precision.<br />
              <span className="gradient-text-accent">Built for real-world impact.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed max-w-2xl font-normal">
              I'm <strong className="text-white font-semibold">John Mark Cayabyab</strong>, a software engineer specializing in scalable full-stack architectures, high-uptime government systems, and intelligent document search engines.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 w-full">
              <button
                onClick={() => setActiveTab('projects')}
                className="btn-primary text-xs sm:text-sm py-2.5 px-5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('experience')}
                className="btn-secondary text-xs sm:text-sm py-2.5 px-5"
              >
                <span>Government Experience</span>
              </button>

              <a
                href="https://github.com/Tofuwho"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-xs sm:text-sm py-2.5 px-4"
              >
                <GithubIcon className="w-4 h-4 text-neutral-300" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 mt-4 border-t border-white/[0.08] w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">1.65</div>
                <div className="text-[11px] text-neutral-400 font-medium">GWA Honor Standing</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-amber-400 font-mono">1st Place</div>
                <div className="text-[11px] text-neutral-400 font-medium">CICT Research Champion</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-indigo-400 font-mono">267+</div>
                <div className="text-[11px] text-neutral-400 font-medium">Production Commits</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">2 Systems</div>
                <div className="text-[11px] text-neutral-400 font-medium">TESDA Live Deployment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Accomplishments Section */}
      <section className="w-full space-y-4">
        <div className="flex items-center justify-between px-1">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 font-mono">
              Proven Milestones
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              Key Accomplishments
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="glass-card p-6 flex flex-col justify-between space-y-4 group">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-semibold tracking-wide uppercase text-neutral-400 font-mono">Academic</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Award className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">1.65</div>
              <div className="text-xs font-semibold text-neutral-300 mt-1">General Weighted Average</div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              Taguig City University · BS Computer Science Graduate June 2026 (Final Term GPA: 1.53).
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-6 flex flex-col justify-between space-y-4 group">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-semibold tracking-wide uppercase text-neutral-400 font-mono">Research</span>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">1st Place</div>
              <div className="text-xs font-semibold text-neutral-300 mt-1">CICT Research Festival 2026</div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              Principal Investigator for high-efficiency document search and fuzzy matching algorithms.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-6 flex flex-col justify-between space-y-4 group">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-semibold tracking-wide uppercase text-neutral-400 font-mono">Velocity</span>
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <GitCommit className="w-4 h-4 text-indigo-400" />
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">267+</div>
              <div className="text-xs font-semibold text-neutral-300 mt-1">Production Commits</div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              ThesisLibrary repository built with automated CI/CD workflows and strict git-flow standards.
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-card p-6 flex flex-col justify-between space-y-4 group">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="text-xs font-semibold tracking-wide uppercase text-neutral-400 font-mono">Production</span>
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">2 Systems</div>
              <div className="text-xs font-semibold text-neutral-300 mt-1">TESDA Service Office</div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              Real-time Queue Management Engine & Automated Fiscal Procurement Ledger deployed live.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Architecture Section */}
      <section className="w-full space-y-5">
        <div className="flex items-center justify-between px-1">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 font-mono">
              Production Architectures
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              Flagship Systems
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('projects')}
            className="text-xs font-semibold text-neutral-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>View all 5 projects</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* System 1: ThesisLibrary */}
          <div
            onClick={() => setActiveTab('projects')}
            className="glass-card p-6 sm:p-8 flex flex-col justify-between space-y-6 group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="glass-badge bg-indigo-500/10 border-indigo-500/20 text-indigo-300">
                  AI & Search Engine
                </span>
                <span className="text-xs font-mono text-neutral-400">Sub-second Latency</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  ThesisLibrary Academic Search Engine
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  A high-throughput search system combining weighted metadata indexing, PyMuPDF full-document binary scans, and RapidFuzz Levenshtein distance typo auto-correction.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Python', 'Django', 'PyMuPDF', 'RapidFuzz', 'GitHub Actions', 'CI/CD'].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/[0.06]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
              <span className="text-xs text-neutral-400 font-mono">267+ Commits · CI/CD Verified</span>
              <span className="text-xs font-semibold text-white flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                <span>Inspect Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
              </span>
            </div>
          </div>

          {/* System 2: TESDA Systems */}
          <div
            onClick={() => setActiveTab('experience')}
            className="glass-card p-6 sm:p-8 flex flex-col justify-between space-y-6 group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="glass-badge bg-emerald-500/10 border-emerald-500/20 text-emerald-300">
                  Government Systems
                </span>
                <span className="text-xs font-mono text-neutral-400">Feb – May 2026</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  TESDA Real-Time Queue & Fiscal Ledger
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  Replaced physical paper ticketing and manual budget registers with a live asynchronous queue monitor and automated document generation for RIS, PR, PO, and PPMP records.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Asynchronous QMS', 'Fiscal DocGen', 'Subnet Routing', 'High Uptime'].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/[0.06]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
              <span className="text-xs text-neutral-400 font-mono">Live Office Deployment</span>
              <span className="text-xs font-semibold text-white flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                <span>Explore Defense Logs</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Matrix Breakdown */}
      <section className="glass-card p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-indigo-400" />
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Technical Matrix & Tooling
            </h2>
          </div>
          <span className="text-xs text-neutral-400 font-mono hidden sm:inline">100% Production Ready</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techCategories.map((cat) => (
            <div key={cat.label} className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
                {cat.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] text-neutral-200 border border-white/[0.07] hover:bg-white/[0.08] hover:border-indigo-400/30 transition-all cursor-default"
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
