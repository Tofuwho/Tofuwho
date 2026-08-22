import React from 'react';
import { Terminal, Cpu, Briefcase, Code2, Send, Flame, Radio } from 'lucide-react';

interface NavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  audioEnabled: boolean;
  setAudioEnabled: (val: boolean) => void;
}

export const Navigation: React.FC<NavProps> = ({
  activeTab,
  setActiveTab,
  audioEnabled,
  setAudioEnabled,
}) => {
  const navItems = [
    { id: 'home', label: '01 // COMMAND_CENTER', icon: Terminal },
    { id: 'projects', label: '02 // PROJECT_VAULT', icon: Code2 },
    { id: 'experience', label: '03 // DEFENSE_LOGS', icon: Briefcase },
    { id: 'capabilities', label: '04 // AI_MATRIX', icon: Cpu },
    { id: 'contact', label: '05 // INQUIRY_HUB', icon: Send },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#080514]/80 border-b border-[#00f0ff]/30 px-4 lg:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="relative w-10 h-10 rounded-lg bg-gradient-to-tr from-[#ff007f] via-[#7000ff] to-[#00f0ff] p-[2px] shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            <div className="w-full h-full bg-[#080612] rounded-md flex items-center justify-center font-bold text-lg text-[#00f0ff] font-mono">
              TW
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-xl tracking-tight text-white font-['Outfit']">
                TOFUWHO <span className="text-[#ff007f] font-mono text-sm">v2.6</span>
              </h1>
              <span className="cyber-badge-lime text-[10px] py-0.5 px-2">
                <span className="pulse-dot"></span> LIVE
              </span>
            </div>
            <p className="text-xs text-[#94a3b8] font-mono flex items-center gap-2">
              <span>JOHN MARK CAYABYAB</span>
              <span className="text-[#00f0ff]">•</span>
              <span className="text-[#ccff00]">FULL-STACK & AI ENGINEER</span>
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-1 overflow-x-auto max-w-full py-1 no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-xs tracking-wider transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.3)] font-bold scale-105'
                    : 'text-[#94a3b8] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#00f0ff] animate-pulse' : 'text-[#64748b]'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            className={`px-3 py-1.5 rounded-md font-mono text-[11px] border transition-all flex items-center gap-1.5 ${
              audioEnabled
                ? 'bg-[#ff007f]/20 border-[#ff007f] text-[#ff007f] shadow-[0_0_10px_rgba(255,0,127,0.3)]'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            <Radio className={`w-3 h-3 ${audioEnabled ? 'animate-ping' : ''}`} />
            <span>SFX: {audioEnabled ? 'ON' : 'OFF'}</span>
          </button>
          
          <button
            onClick={() => setActiveTab('contact')}
            className="cyber-badge-lime hover:scale-105 transition-transform cursor-pointer"
          >
            <Flame className="w-3.5 h-3.5 text-[#ccff00]" />
            <span>HIRE ME</span>
          </button>
        </div>

      </div>
    </header>
  );
};
