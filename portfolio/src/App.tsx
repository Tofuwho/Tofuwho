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
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-[#08090d] text-[#f3f4f6] flex flex-col font-sans selection:bg-indigo-500/30 selection:text-white relative overflow-x-hidden">
      {/* Ambient Lighting Gradients */}
      <div 
        aria-hidden="true" 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[400px] bg-gradient-to-b from-indigo-500/15 via-purple-500/5 to-transparent blur-[120px] pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="fixed top-60 right-0 w-[450px] h-[300px] bg-cyan-500/10 blur-[130px] pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="fixed bottom-0 left-0 w-[500px] h-[300px] bg-indigo-600/10 blur-[140px] pointer-events-none -z-10" 
      />

      {/* Subtle Grid Texture */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none -z-10 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <Navigation
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
      />

      <main className="w-full max-w-6xl mx-auto flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
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
