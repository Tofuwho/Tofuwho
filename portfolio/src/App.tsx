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
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);

  const playClickSound = () => {
    if (!audioEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
      
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Ignore audio restriction errors
    }
  };

  const handleTabChange = (tab: string) => {
    playClickSound();
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070510] text-slate-100 flex flex-col font-['Space_Grotesk'] selection:bg-[#ff007f] selection:text-white">
      <div className="scanline-overlay" />

      <Navigation
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-8">
        {activeTab === 'home' && <HomePage setActiveTab={handleTabChange} />}
        {activeTab === 'projects' && <ProjectsPage />}
        {activeTab === 'experience' && <ExperiencePage />}
        {activeTab === 'capabilities' && <CapabilitiesPage />}
        {activeTab === 'contact' && <ContactPage />}
      </main>

      <Footer setActiveTab={handleTabChange} />
    </div>
  );
}

export default App;
