import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROFILE_META } from '../data/portfolioData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="w-full mt-20 border-t border-black/[0.08] py-10 px-4 sm:px-6 lg:px-8 text-xs text-neutral-600 bg-white/75 backdrop-blur-md">
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Bio info */}
        <div className="space-y-1 text-center lg:text-left">
          <div className="text-sm font-bold text-neutral-900 flex items-center justify-center lg:justify-start gap-2">
            <span>{PROFILE_META.name}</span>
            <span className="text-xs text-neutral-500 font-mono">({PROFILE_META.handle})</span>
          </div>
          <p className="text-[11px] text-neutral-500">
            {PROFILE_META.degree} · {PROFILE_META.location}
          </p>
        </div>

        {/* Quick Nav & Live Demo Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-600">
          <button onClick={() => setActiveTab('home')} className="hover:text-neutral-900 transition-colors cursor-pointer">
            Overview
          </button>
          <button onClick={() => setActiveTab('projects')} className="hover:text-neutral-900 transition-colors cursor-pointer">
            Repositories
          </button>
          <button onClick={() => setActiveTab('experience')} className="hover:text-neutral-900 transition-colors cursor-pointer">
            Experience
          </button>
          <button onClick={() => setActiveTab('capabilities')} className="hover:text-neutral-900 transition-colors cursor-pointer">
            Capabilities
          </button>
          <button onClick={() => setActiveTab('contact')} className="hover:text-neutral-900 transition-colors cursor-pointer">
            Contact
          </button>
          <a
            href="https://tofuwho.github.io/ThesisLibrary/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-700 transition-colors flex items-center gap-1"
          >
            <span>ThesisLibrary</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://tofuwho.github.io/app-cse-public-demo/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-700 transition-colors flex items-center gap-1"
          >
            <span>app-cse-public-demo</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={PROFILE_META.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900 transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Availability indicator */}
        <button
          onClick={() => setActiveTab('contact')}
          className="flex items-center gap-2 rounded-full py-1.5 px-3.5 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/70 transition-colors cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] text-emerald-800 font-semibold">Open for Hiring</span>
        </button>
      </div>
    </footer>
  );
};
