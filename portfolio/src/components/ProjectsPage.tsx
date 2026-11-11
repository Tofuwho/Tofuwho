import React, { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, ExternalLink, Layers, X } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';

export const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <div className="w-full space-y-8 sm:space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 glass-badge">
          <Layers className="w-3.5 h-3.5 text-emerald-700" />
          <span>Selected Repositories</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
          Focused Builds
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base max-w-2xl leading-relaxed">
          Three core repositories showcasing full-stack data auditing, hybrid document search, and client-side procurement workflows.
        </p>
      </div>

      {/* Focused 3-Repository Stack */}
      <div className="space-y-5">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="glass-card p-6 sm:p-8 flex flex-col justify-between space-y-5 group cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="glass-badge text-neutral-700 font-medium">
                  0{index + 1} · {project.category}
                </span>
                <span className="text-xs text-emerald-700 font-mono font-semibold">
                  {project.status} · {project.timeframe}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-medium">{project.subtitle}</p>
                <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 border border-black/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-black/[0.08]">
              <span className="text-xs text-neutral-500 font-mono">{project.metrics}</span>
              <div className="flex items-center gap-2">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="btn-emerald text-xs py-1.5 px-3.5"
                  >
                    <span>{project.liveDemoLabel ?? 'Live Demo'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="btn-secondary text-xs py-1.5 px-3.5"
                >
                  <span>Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subtle GitHub All-Repos Link */}
      <div className="glass-card p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
        <span>Want to inspect additional experiments and earlier prototypes?</span>
        <a
          href="https://github.com/Tofuwho?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-900 hover:text-emerald-700 font-semibold inline-flex items-center gap-1 shrink-0"
        >
          <span>Browse All Repositories on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Gloss White Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/30 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative bg-white"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2 pr-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="glass-badge bg-emerald-50 text-emerald-800 border-emerald-200">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-neutral-500 font-mono font-medium">
                  {selectedProject.metrics} · {selectedProject.timeframe}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
                {selectedProject.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 font-medium">{selectedProject.subtitle}</p>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">
                Overview
              </h4>
              <p className="text-sm text-neutral-700 leading-relaxed">{selectedProject.description}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">
                Key Implementation Details
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 border border-black/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-5 border-t border-black/[0.08]">
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-secondary text-xs py-2 px-4"
              >
                Close
              </button>
              {selectedProject.liveDemoUrl && (
                <a
                  href={selectedProject.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-emerald text-xs py-2 px-4"
                >
                  <span>{selectedProject.liveDemoLabel ?? 'Launch Live Demo'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
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
