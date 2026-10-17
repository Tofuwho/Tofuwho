import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface NavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  audioEnabled: boolean;
  setAudioEnabled: (val: boolean) => void;
}

export const Navigation: React.FC<NavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-3.5 backdrop-blur-xl bg-[#08090d]/80 border-b border-white/[0.07] transition-all">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group text-left transition-transform active:scale-95"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 flex items-center justify-center font-bold text-sm text-white shadow-inner group-hover:border-indigo-400/60 transition-all">
              JM
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#08090d]" />
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>John Mark Cayabyab</span>
              <span className="text-[11px] text-indigo-400/80 font-mono hidden sm:inline">@Tofuwho</span>
            </div>
            <p className="text-[11px] text-neutral-400 font-medium">Software Engineer & Systems Architect</p>
          </div>
        </button>

        {/* Desktop Segmented Navigation Bar */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full glass-panel shadow-xl border border-white/10">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-neutral-950 font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 glass-badge py-1 px-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] text-neutral-300 font-medium">Available for Roles</span>
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="btn-secondary text-xs py-1.5 px-3.5"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => handleNavClick('contact')}
            className="btn-secondary text-xs py-1 px-2.5"
          >
            <span>Contact</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl glass-panel text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-white/[0.08] animate-fade-in space-y-2 pb-2">
          <div className="grid grid-cols-2 gap-1.5 p-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 px-1 flex items-center justify-between text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Available for full-time & contract</span>
            </div>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-xs text-indigo-400 font-medium flex items-center gap-1"
            >
              <span>Message</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
