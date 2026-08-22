import React from 'react';
import { Award, Code, Sparkles, Terminal, ArrowRight, ShieldCheck, Zap, Activity, GitCommit, CheckCircle2, Cpu } from 'lucide-react';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab }) => {
  const techList = [
    'Python', 'JavaScript', 'Django', 'Express.js', 'Electron', 'MySQL', 
    'SQLite', 'MongoDB', 'Git', 'GitHub Actions', 'REST APIs', 'LLM Agents', 
    'PyMuPDF', 'RapidFuzz', 'TailwindCSS', 'CI/CD Pipelines'
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <section className="relative cyber-panel p-6 lg:p-10 border-2 border-[#00f0ff] shadow-[0_0_30px_rgba(0,240,255,0.2)]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ff007f]/20 via-[#7000ff]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#00f0ff]/20 via-[#ccff00]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="cyber-badge-lime text-xs py-1 px-3">
                <span className="pulse-dot"></span> AVAILABLE FOR HIRE
              </span>
              <span className="cyber-badge text-xs py-1 px-3">
                <ShieldCheck className="w-3.5 h-3.5" /> GOVT PRODUCTION TESTED
              </span>
              <span className="cyber-badge-magenta text-xs py-1 px-3">
                <Award className="w-3.5 h-3.5" /> GRAND CHAMPION 2026
              </span>
            </div>

            <div>
              <h1 className="font-['Outfit'] text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
                JOHN MARK <span className="gradient-text-cyan">CAYABYAB</span>
              </h1>
              <p className="font-['Space_Grotesk'] text-lg sm:text-2xl font-bold text-[#ccff00] mt-2 flex items-center gap-2">
                <Zap className="w-6 h-6 text-[#ccff00] animate-bounce" />
                FULL-STACK DEVELOPER & AI AGENTIC SYSTEMS ARCHITECT
              </p>
            </div>

            <p className="text-slate-300 font-['Space_Grotesk'] text-base leading-relaxed max-w-3xl">
              Computer Science Graduate (<strong className="text-white">GWA 1.65</strong>) with proven hands-on experience building and deploying high-uptime systems in live government service offices (<strong className="text-[#00f0ff]">TESDA</strong>). Specializing in automated fiscal ledgers, real-time queue management, multi-step LLM agent workflows, and hybrid fuzzy PDF search engines.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setActiveTab('projects')}
                className="brutalist-card px-6 py-3 rounded-lg font-mono font-bold text-sm text-[#00f0ff] flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
              >
                <Code className="w-4 h-4" />
                <span>EXPLORE PROJECT VAULT</span>
                <ArrowRight className="w-4 h-4 text-[#ff007f]" />
              </button>

              <button
                onClick={() => setActiveTab('experience')}
                className="cyber-panel cyber-panel-magenta px-6 py-3 font-mono font-bold text-sm text-[#ff007f] flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
              >
                <Activity className="w-4 h-4" />
                <span>GOVERNMENT DEFENSE LOGS</span>
              </button>

              <button
                onClick={() => setActiveTab('contact')}
                className="cyber-panel cyber-panel-lime px-6 py-3 font-mono font-bold text-sm text-[#ccff00] flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
              >
                <Terminal className="w-4 h-4" />
                <span>OPEN CLI TERMINAL</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="cyber-panel cyber-panel-magenta p-5 space-y-4 bg-[#0d0921]/90">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs font-bold text-[#ff007f] flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" /> SYSTEM_IDENTITY
                </span>
                <span className="font-mono text-[10px] text-slate-400">ID: TOFUWHO-01</span>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-slate-400">DEGREE:</span>
                  <span className="text-white font-bold">BS Computer Science</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-slate-400">GWA:</span>
                  <span className="text-[#ccff00] font-extrabold text-sm">1.65 (Honor)</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-slate-400">LOCATION:</span>
                  <span className="text-[#00f0ff] font-bold">NCR, Philippines</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-slate-400">REPOS:</span>
                  <span className="text-[#ff007f] font-bold">ThesisLibrary, ELYSEE, Kalinga</span>
                </div>
              </div>

              <div className="p-3 bg-[#080512] rounded border border-[#00f0ff]/30 text-[11px] font-mono text-slate-400">
                <span className="text-[#00f0ff] font-bold">&gt; STATUS:</span> Ready to deploy scalable applications, build automated agentic pipelines, and optimize data workflows.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="cyber-panel p-5 space-y-2 border-l-4 border-l-[#00f0ff]">
          <div className="flex items-center justify-between text-[#00f0ff]">
            <span className="font-mono text-xs font-bold uppercase">ACADEMIC STANDING</span>
            <Award className="w-5 h-5" />
          </div>
          <div className="font-['Outfit'] text-4xl font-extrabold text-white">
            1.65 <span className="text-xs text-[#00f0ff] font-mono font-normal">GWA</span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Taguig City University • BS CS Graduate June 2026 (Final Term GPA: 1.53)
          </p>
        </div>

        <div className="cyber-panel cyber-panel-magenta p-5 space-y-2 border-l-4 border-l-[#ff007f]">
          <div className="flex items-center justify-between text-[#ff007f]">
            <span className="font-mono text-xs font-bold uppercase">RESEARCH AWARD</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="font-['Outfit'] text-4xl font-extrabold text-white">
            1st <span className="text-xs text-[#ff007f] font-mono font-normal">CHAMPION</span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            CICT 2026 University Research Festival (Principal Investigator)
          </p>
        </div>

        <div className="cyber-panel cyber-panel-lime p-5 space-y-2 border-l-4 border-l-[#ccff00]">
          <div className="flex items-center justify-between text-[#ccff00]">
            <span className="font-mono text-xs font-bold uppercase">REPO COMMIT VELOCITY</span>
            <GitCommit className="w-5 h-5" />
          </div>
          <div className="font-['Outfit'] text-4xl font-extrabold text-white">
            267+ <span className="text-xs text-[#ccff00] font-mono font-normal">COMMITS</span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            ThesisLibrary Repository with full CI/CD & Automated Git-Flow
          </p>
        </div>

        <div className="cyber-panel p-5 space-y-2 border-l-4 border-l-[#8b5cf6]">
          <div className="flex items-center justify-between text-[#8b5cf6]">
            <span className="font-mono text-xs font-bold uppercase">LIVE GOVT DEPLOYMENTS</span>
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="font-['Outfit'] text-4xl font-extrabold text-white">
            2 <span className="text-xs text-[#8b5cf6] font-mono font-normal">SYSTEMS</span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Real-Time QMS & Fiscal Procurement Ledger at TESDA Office
          </p>
        </div>
      </section>

      <section className="cyber-panel p-4 overflow-hidden bg-[#090616]/90 border-y-2 border-y-[#00f0ff]/40">
        <div className="flex items-center gap-3 mb-2 px-2">
          <span className="font-mono text-xs font-bold text-[#00f0ff] uppercase tracking-widest flex items-center gap-1.5">
            <Cpu className="w-4 h-4 animate-spin" /> ACTIVE_TECH_MATRIX
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#00f0ff]/40 to-transparent" />
        </div>

        <div className="marquee-container">
          <div className="marquee-content py-2">
            {[...techList, ...techList].map((item, idx) => (
              <span
                key={idx}
                className="cyber-badge font-mono text-xs py-1.5 px-4 bg-white/5 border border-white/10 text-white hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors"
              >
                <span className="text-[#ff007f] font-bold">#</span> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="cyber-panel p-6 space-y-4 hover:border-[#00f0ff]">
          <div className="flex items-start justify-between">
            <span className="cyber-badge-lime text-xs">GOVERNMENT IT OJT</span>
            <span className="font-mono text-xs text-slate-400">FEB - MAY 2026</span>
          </div>
          
          <h3 className="font-['Outfit'] text-xl font-extrabold text-white">
            TESDA Government Systems (QMS & Fiscal Ledger)
          </h3>
          
          <p className="text-sm text-slate-300 font-['Space_Grotesk'] leading-relaxed">
            Replaced manual paper operations at TESDA Service Office with a real-time asynchronous Queue Management System and created an automated procurement ledger for RIS, PR, PO, PPMP, and APP-CSE document processing.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="text-[11px] font-mono bg-white/5 px-2.5 py-1 rounded text-slate-300">Asynchronous QMS</span>
            <span className="text-[11px] font-mono bg-white/5 px-2.5 py-1 rounded text-slate-300">Government DocGen</span>
            <span className="text-[11px] font-mono bg-white/5 px-2.5 py-1 rounded text-slate-300">Network Printer Subnets</span>
          </div>

          <button
            onClick={() => setActiveTab('experience')}
            className="font-mono text-xs font-bold text-[#00f0ff] flex items-center gap-1.5 hover:underline pt-2 cursor-pointer"
          >
            <span>READ FULL DEFENSE LOG</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="cyber-panel cyber-panel-magenta p-6 space-y-4 hover:border-[#ff007f]">
          <div className="flex items-start justify-between">
            <span className="cyber-badge-magenta text-xs">RESEARCH FESTIVAL 2026</span>
            <span className="font-mono text-xs text-slate-400">GRAND CHAMPION</span>
          </div>
          
          <h3 className="font-['Outfit'] text-xl font-extrabold text-white">
            Operational Data Optimization Research
          </h3>
          
          <p className="text-sm text-slate-300 font-['Space_Grotesk'] leading-relaxed">
            Awarded 1st Place (Grand Champion) at the CICT 2026 University Research Festival as Principal Investigator for high-efficiency data scanning algorithms and scalable system design.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="text-[11px] font-mono bg-white/5 px-2.5 py-1 rounded text-slate-300">Principal Investigator</span>
            <span className="text-[11px] font-mono bg-white/5 px-2.5 py-1 rounded text-slate-300">Fuzzy Search Algo</span>
            <span className="text-[11px] font-mono bg-white/5 px-2.5 py-1 rounded text-slate-300">PDF Metadata Mining</span>
          </div>

          <button
            onClick={() => setActiveTab('projects')}
            className="font-mono text-xs font-bold text-[#ff007f] flex items-center gap-1.5 hover:underline pt-2 cursor-pointer"
          >
            <span>INSPECT HYBRID ENGINE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
