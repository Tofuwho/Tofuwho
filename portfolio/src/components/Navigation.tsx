import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PROFILE_META } from '../data/portfolioData';

interface NavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navigation: React.FC<NavProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'projects', label: 'Repositories' },
    { id: 'experience', label: 'Experience' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-3.5 backdrop-blur-xl bg-[#f5f5f7]/85 border-b border-black/[0.06] transition-all">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group text-left transition-transform active:scale-95"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-white border border-black/10 shadow-sm flex items-center justify-center font-bold text-sm text-neutral-900 group-hover:border-black/20 transition-all">
              JM
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#f5f5f7]" />
          </div>
          <div>
            <div className="text-sm font-bold text-neutral-900 tracking-tight flex items-center gap-1.5">
              <span>{PROFILE_META.name}</span>
              <span className="text-[11px] text-neutral-500 font-mono hidden sm:inline">
                {PROFILE_META.handle}
              </span>
            </div>
            <p className="text-[11px] text-neutral-500 font-medium">Full-Stack Software Engineer</p>
          </div>
        </button>

        {/* Desktop Segmented Navigation Bar */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full glass-panel">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 text-white font-semibold shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-black/[0.04]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden lg:inline-flex items-center gap-2 rounded-full py-1 px-3 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/70 transition-colors cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] text-emerald-800 font-semibold">Open for Hiring</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="btn-secondary text-xs py-1.5 px-3.5 group"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-900 transition-colors" />
          </button>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => handleNavClick('contact')}
            className="btn-emerald text-xs py-1 px-3"
          >
            <span>Hire Me</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl glass-panel text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-black/[0.08] animate-fade-in space-y-2 pb-2">
          <div className="grid grid-cols-2 gap-1.5 p-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                    isActive
                      ? 'bg-neutral-900 text-white font-semibold shadow-sm'
                      : 'bg-white/80 text-neutral-700 hover:bg-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 px-1 flex items-center justify-between text-xs text-neutral-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Open for full-time, contract &amp; remote</span>
            </div>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-xs text-emerald-700 font-semibold flex items-center gap-1"
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
