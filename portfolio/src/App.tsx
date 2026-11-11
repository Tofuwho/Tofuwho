import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { ExperiencePage } from './components/ExperiencePage';
import { CapabilitiesPage } from './components/CapabilitiesPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-[#f5f5f7] text-[#1d1d1f] flex flex-col font-sans selection:bg-emerald-500/20 selection:text-neutral-900 relative overflow-x-hidden">
      {/* Subtle Pure White & Warm Neutral Gloss Ambient Layer */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1200px] h-[380px] bg-gradient-to-b from-white via-white/60 to-transparent blur-[90px] pointer-events-none -z-10"
      />

      <Navigation activeTab={activeTab} setActiveTab={handleTabChange} />

      <main className="w-full max-w-5xl mx-auto flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {activeTab === 'home' && <HomePage setActiveTab={handleTabChange} />}
        {activeTab === 'projects' && <ProjectsPage />}
        {activeTab === 'experience' && <ExperiencePage setActiveTab={handleTabChange} />}
        {activeTab === 'capabilities' && <CapabilitiesPage />}
        {activeTab === 'contact' && <ContactPage />}
      </main>

      <Footer setActiveTab={handleTabChange} />
    </div>
  );
}

export default App;
