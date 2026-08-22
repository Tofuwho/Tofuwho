import React from 'react';
import { Shield } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="mt-16 border-t border-[#00f0ff]/30 bg-[#060410] py-8 px-4 lg:px-8 font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-white text-sm">
            <span className="text-[#00f0ff]">&gt;</span> TOFUWHO MAXIMALIST UI ARCHITECTURE
          </div>
          <p className="text-slate-500 text-[11px]">
            Designed & Engineered by John Mark Cayabyab (BS CS Graduate June 2026, GWA 1.65).
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setActiveTab('home')} className="hover:text-[#00f0ff] transition-colors cursor-pointer">
            COMMAND CENTER
          </button>
          <span>•</span>
          <button onClick={() => setActiveTab('projects')} className="hover:text-[#ff007f] transition-colors cursor-pointer">
            PROJECT VAULT
          </button>
          <span>•</span>
          <button onClick={() => setActiveTab('experience')} className="hover:text-[#ccff00] transition-colors cursor-pointer">
            DEFENSE LOGS
          </button>
          <span>•</span>
          <button onClick={() => setActiveTab('contact')} className="hover:text-[#00f0ff] transition-colors cursor-pointer">
            INQUIRY HUB
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="cyber-badge-lime text-[10px] py-1 px-3">
            <Shield className="w-3 h-3 text-[#ccff00]" /> SYSTEM STATUS: 100% OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
};
