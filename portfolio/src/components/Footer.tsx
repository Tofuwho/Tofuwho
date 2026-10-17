import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="w-full mt-20 border-t border-white/[0.08] py-10 px-4 sm:px-6 lg:px-8 text-xs text-neutral-400 bg-[#08090d]/60 backdrop-blur-md">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Bio info */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
            <span>John Mark Cayabyab</span>
            <span className="text-xs text-indigo-400/80 font-mono">(@Tofuwho)</span>
          </div>
          <p className="text-[11px] text-neutral-400">
            BS Computer Science Graduate June 2026 (Honor Standing · GWA 1.65) · Taguig City University
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors cursor-pointer">
            Overview
          </button>
          <button onClick={() => setActiveTab('projects')} className="hover:text-white transition-colors cursor-pointer">
            Projects
          </button>
          <button onClick={() => setActiveTab('experience')} className="hover:text-white transition-colors cursor-pointer">
            Experience
          </button>
          <button onClick={() => setActiveTab('capabilities')} className="hover:text-white transition-colors cursor-pointer">
            Capabilities
          </button>
          <button onClick={() => setActiveTab('contact')} className="hover:text-white transition-colors cursor-pointer">
            Contact
          </button>
          <a
            href="https://github.com/Tofuwho"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 glass-badge py-1 px-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] text-neutral-300 font-medium">All Systems Operational</span>
        </div>

      </div>
    </footer>
  );
};
