import React, { useState } from 'react';
import { ArrowUpRight, X, Layers, Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & Search' | 'Web App';
  description: string;
  tags: string[];
  githubUrl: string;
  highlights: string[];
  metrics: string;
}

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'thesis-library',
      title: 'ThesisLibrary Search Engine',
      subtitle: '3-Layer Hybrid Search Algorithm & Automated Pipeline',
      category: 'AI & Search',
      description: 'An institutional academic search engine built with 267+ commits. Combines weighted metadata search, PyMuPDF full-text document scanning, and RapidFuzz Levenshtein distance correction to deliver sub-second PDF query results.',
      tags: ['Python', 'Django', 'PyMuPDF', 'RapidFuzz', 'GitHub Actions', 'CI/CD', 'Git-Flow'],
      githubUrl: 'https://github.com/Tofuwho',
      highlights: [
        '267+ commits with automated CI/CD pipeline and git-flow branching methodology',
        'Weighted metadata matching coupled with deep PyMuPDF binary indexing',
        'RapidFuzz Levenshtein algorithm automatically auto-correcting title and author search typos',
        'Engineered for sub-second query latency under high concurrent search traffic'
      ],
      metrics: '267+ Commits · 3-Layer Search',
    },
    {
      id: 'tesda-systems',
      title: 'TESDA Real-Time QMS & Fiscal Ledger',
      subtitle: 'Government Operational Infrastructure Automation',
      category: 'Full-Stack',
      description: 'Replaced manual paper ticketing and document logging at the TESDA Service Office with a real-time asynchronous queue monitoring system and automated government fiscal ledger.',
      tags: ['Full-Stack', 'Asynchronous Queues', 'DocGen Automation', 'Hardware Diagnostic', 'Subnet Routing'],
      githubUrl: 'https://github.com/Tofuwho',
      highlights: [
        'Real-time queue management eliminating paper tickets for hundreds of daily service applicants',
        'Automated document compilation for RIS, PR, PO, PPMP, and APP-CSE government forms',
        'Zero downtime across mission-critical live government service operations',
        'Network subnet printing configuration across office hardware stations'
      ],
      metrics: '2 Live Govt Systems Deployed',
    },
    {
      id: 'elysee',
      title: 'ELYSEE Luxury Showcase',
      subtitle: 'High-Fidelity Responsive Digital Experience',
      category: 'Web App',
      description: 'A flagship luxury digital storefront built with refined visual hierarchy, glassmorphism aesthetics, fluid transitions, and adaptive responsive design for retina displays.',
      tags: ['JavaScript', 'HTML5', 'Vanilla CSS', 'Retina Typography', 'Micro-interactions'],
      githubUrl: 'https://github.com/Tofuwho/ELYSEE',
      highlights: [
        'Custom glassmorphism design system engineered without heavy UI dependencies',
        'Fluid responsive layout fine-tuned for ultra-wide monitors, tablets, and smartphones',
        'Subtle micro-interactions and scroll responses driving enhanced visual engagement'
      ],
      metrics: '100/100 Lighthouse Score',
    },
    {
      id: 'kalinga',
      title: 'Kalinga OFW Family Care',
      subtitle: 'Distance Parenting & Child Health Management Platform',
      category: 'Full-Stack',
      description: 'A purpose-built full-stack application for overseas Filipino worker families, providing milestone tracking, medical records logging, real-time parent check-ins, and emergency notification alerts.',
      tags: ['Python', 'Django', 'REST APIs', 'SQLite', 'Mobile-First UI'],
      githubUrl: 'https://github.com/Tofuwho/Kalinga',
      highlights: [
        'Distance-parenting dashboard connecting overseas workers with local guardians in real time',
        'Automated health records and milestone logs with instant push alert dispatches',
        'Multi-tier role authorization architecture protecting family and minor records'
      ],
      metrics: 'OFW Care Architecture',
    },
    {
      id: 'pickleph',
      title: 'PicklePH Court Reservation',
      subtitle: 'Real-Time High-Throughput Sports Booking Engine',
      category: 'Full-Stack',
      description: 'A real-time sports court reservation platform engineered to eliminate double-booking overlaps across multiple facilities, incorporating player skill matching and automatic slot expiration.',
      tags: ['Full-Stack', 'JavaScript', 'Database Architecture', 'Express', 'MySQL'],
      githubUrl: 'https://github.com/Tofuwho/PicklePH',
      highlights: [
        'Atomic transaction engine guaranteeing zero simultaneous booking conflicts',
        'Dynamic skill-level player matching for competitive and recreational court sessions',
        'Automated reservation confirmations and facility capacity utilization dashboards'
      ],
      metrics: 'Zero Booking Conflicts',
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full space-y-8 sm:space-y-10">
      
      {/* Header & Category Filters */}
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 glass-badge">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Architecture & Code</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Featured Projects
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            A selection of production-tested platforms, high-speed document search engines, and real-time full-stack systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full glass-panel max-w-fit border border-white/10">
          {['All', 'Full-Stack', 'AI & Search', 'Web App'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-black shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-6 group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="glass-badge bg-white/[0.04] text-neutral-300 font-medium">
                  {project.category}
                </span>
                <span className="text-xs text-indigo-400 font-mono font-medium">
                  {project.metrics}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 font-medium">{project.subtitle}</p>
                <p className="text-sm text-neutral-300/80 mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.07]">
              <span className="text-xs text-neutral-400 font-medium">Click to inspect architecture</span>
              <button className="btn-secondary text-xs py-1.5 px-3">
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Project Detail Modal */}
      {selectedProject && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="glass-panel rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 border border-white/15 shadow-2xl relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <span className="glass-badge bg-indigo-500/10 text-indigo-300 border-indigo-500/20">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-neutral-400 font-mono font-medium">
                  {selectedProject.metrics}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {selectedProject.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-medium">{selectedProject.subtitle}</p>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
                System Overview
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
                Technical Highlights & Architecture
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.06] text-neutral-200 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-5 border-t border-white/10">
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-secondary text-xs py-2 px-4"
              >
                Close
              </button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs py-2 px-4.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
