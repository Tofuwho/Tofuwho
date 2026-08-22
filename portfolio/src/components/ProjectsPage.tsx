import React, { useState } from 'react';
import { ExternalLink, Sparkles, ArrowUpRight, BookOpen } from 'lucide-react';
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
  color: 'cyan' | 'magenta' | 'lime' | 'purple';
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
      description: 'A production-grade institutional academic search engine built with 267+ commits. Combines weighted metadata search, PyMuPDF full-text document scanning, and RapidFuzz Levenshtein distance correction to deliver sub-second PDF query results.',
      tags: ['Python', 'Django', 'PyMuPDF', 'RapidFuzz', 'GitHub Actions', 'CI/CD', 'Git-Flow'],
      githubUrl: 'https://github.com/Tofuwho',
      highlights: [
        '267+ commits with automated CI/CD pipeline and git-flow branching',
        'Weighted metadata matching + PyMuPDF deep PDF content indexer',
        'Fuzzy spelling error auto-correction algorithm for title & abstract queries',
        'Optimized for high concurrency under institutional search volume'
      ],
      metrics: '267+ Commits · 3-Layer Search',
      color: 'lime',
    },
    {
      id: 'elysee',
      title: 'ELYSEE — Luxury Landing',
      subtitle: 'Ultra High-End E-Commerce Product Experience',
      category: 'Web App',
      description: 'An flagship luxury product showcase designed with immersive visual hierarchy, glassmorphism aesthetics, dynamic scroll animations, and instant responsive layouts.',
      tags: ['JavaScript', 'HTML5', 'Vanilla CSS', 'Animations', 'UI/UX Design'],
      githubUrl: 'https://github.com/Tofuwho/ELYSEE',
      highlights: [
        'Custom glassmorphism design system built from scratch without bloated frameworks',
        'Fluid responsive layout designed for mobile, tablet, and ultra-wide retina displays',
        'Micro-interactions and subtle scroll animations boosting visual appeal'
      ],
      metrics: '100/100 Lighthouse UI',
      color: 'magenta',
    },
    {
      id: 'kalinga',
      title: 'Kalinga — Distance Parenting',
      subtitle: 'OFW Parent-Child Health & Connection Platform',
      category: 'Full-Stack',
      description: 'A specialized full-stack application built for overseas Filipino worker (OFW) families. Features distance child-care tracking, milestone logs, real-time status check-ins, and automated emergency notifications.',
      tags: ['Python', 'Django', 'REST APIs', 'SQLite', 'Mobile-First UI'],
      githubUrl: 'https://github.com/Tofuwho/Kalinga',
      highlights: [
        'Distance-parenting dashboard connecting overseas workers with local guardians',
        'Automated health & milestone logs with real-time push alerts',
        'Secure multi-tier role authorization (Parents, Guardians, Admins)'
      ],
      metrics: 'OFW Family Care Engine',
      color: 'cyan',
    },
    {
      id: 'pickleph',
      title: 'PicklePH — Court Booking',
      subtitle: 'Real-Time Pickleball Court Reservation Platform',
      category: 'Full-Stack',
      description: 'A high-throughput sports booking system that eliminates double-booking conflicts across multiple courts in real-time, features player skill matching, and automates schedule slots.',
      tags: ['Full-Stack', 'JavaScript', 'Database Design', 'Express', 'MySQL'],
      githubUrl: 'https://github.com/Tofuwho/PicklePH',
      highlights: [
        'Atomic transaction engine preventing simultaneous slot reservation overlaps',
        'Skill-level match-making system for casual and competitive players',
        'Automated booking confirmation and venue capacity dashboard'
      ],
      metrics: 'Zero Booking Conflicts',
      color: 'purple',
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="cyber-panel p-6 border-2 border-[#00f0ff] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="cyber-badge-lime text-xs">REPOSITORIES & ARCHITECTURE</span>
            <span className="font-mono text-xs text-[#00f0ff]">&gt; SYSTEM_VAULT</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl font-extrabold text-white mt-1">
            FEATURED <span className="gradient-text-cyan">PROJECT VAULT</span>
          </h2>
          <p className="text-slate-300 font-['Space_Grotesk'] text-sm mt-1">
            Production-tested applications, full-stack systems, and high-performance search engines.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {['All', 'Full-Stack', 'AI & Search', 'Web App'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs border transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#00f0ff]/20 border-[#00f0ff] text-[#00f0ff] font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const panelClass = 
            project.color === 'magenta' ? 'cyber-panel-magenta' :
            project.color === 'lime' ? 'cyber-panel-lime' : 'cyber-panel';

          const badgeClass = 
            project.color === 'magenta' ? 'cyber-badge-magenta' :
            project.color === 'lime' ? 'cyber-badge-lime' : 'cyber-badge';

          return (
            <div
              key={project.id}
              className={`cyber-panel ${panelClass} p-6 flex flex-col justify-between space-y-4 group cursor-pointer`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <span className={`${badgeClass} text-xs`}>
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-[#ccff00] font-bold bg-[#ccff00]/10 px-2 py-0.5 rounded border border-[#ccff00]/30">
                    {project.metrics}
                  </span>
                </div>

                <div>
                  <h3 className="font-['Outfit'] text-2xl font-black text-white group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-[#00f0ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="font-mono text-xs text-[#00f0ff] mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 font-['Space_Grotesk'] text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="text-[11px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-xs font-bold text-slate-300 hover:text-[#00f0ff] flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-4 h-4 text-[#ff007f]" />
                    <span>VIEW GITHUB REPO</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="cyber-badge text-xs py-1 px-3 cursor-pointer"
                  >
                    INSPECT SPECS &gt;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="cyber-panel p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 border-2 border-[#00f0ff] bg-[#0c0822] shadow-[0_0_50px_rgba(0,240,255,0.4)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="cyber-badge-lime text-xs">{selectedProject.category}</span>
                <h2 className="font-['Outfit'] text-3xl font-black text-white mt-1">
                  {selectedProject.title}
                </h2>
                <p className="font-mono text-xs text-[#00f0ff]">
                  {selectedProject.subtitle}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="font-mono text-sm px-3 py-1 bg-white/10 hover:bg-[#ff007f] hover:text-white text-slate-300 rounded border border-white/20 transition-colors cursor-pointer"
              >
                ESC [X]
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono text-xs font-bold text-[#ccff00] uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> ARCHITECTURAL OVERVIEW
              </h4>
              <p className="text-slate-300 font-['Space_Grotesk'] text-sm leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#ff007f] uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> KEY TECHNICAL HIGHLIGHTS
              </h4>
              <ul className="space-y-2 font-mono text-xs text-slate-300">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white/5 p-2.5 rounded border border-white/5">
                    <span className="text-[#00f0ff] font-bold">&gt;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="brutalist-card px-5 py-2.5 rounded font-mono font-bold text-xs text-[#00f0ff] flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>OPEN REPOSITORY</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="cyber-badge-magenta text-xs py-2 px-4 cursor-pointer"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
