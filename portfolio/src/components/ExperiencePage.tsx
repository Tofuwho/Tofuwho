import React, { useState } from 'react';
import { Building2, GraduationCap, Award, FileText, CheckCircle2, Printer, RefreshCw, ShieldCheck } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  const [activeDocType, setActiveDocType] = useState<'RIS' | 'PR' | 'PO' | 'PPMP' | 'APP-CSE'>('RIS');
  const [docGenerating, setDocGenerating] = useState<boolean>(false);
  const [generatedLogs, setGeneratedLogs] = useState<string[]>([
    'Fiscal Ledger Engine initialized.',
    'Ready for document query.'
  ]);

  const docDescriptions = {
    'RIS': 'Requisition and Issue Slip — Used for requesting office supplies from stock inventory.',
    'PR': 'Purchase Request — Official government request for procuring non-stock equipment and items.',
    'PO': 'Purchase Order — Legal contract with supplier specifying quantities, prices, and delivery terms.',
    'PPMP': 'Project Procurement Management Plan — Annual budgetary allocation breakdown per unit.',
    'APP-CSE': 'Annual Procurement Plan for Common-Use Supplies — Standardized DBM procurement submission.'
  };

  const handleGenerateDoc = (type: 'RIS' | 'PR' | 'PO' | 'PPMP' | 'APP-CSE') => {
    setActiveDocType(type);
    setDocGenerating(true);
    const now = new Date().toLocaleTimeString();
    
    setGeneratedLogs([
      `[${now}] Fetching FY2026 Budget allocations for ${type}...`,
      `[${now}] Validating line-item tax codes and category limits...`,
      `[${now}] Generating PDF payload via automated template engine...`,
      `[${now}] SUCCESS: Document ${type}-2026-0842 compiled and ready for signature!`
    ]);

    setTimeout(() => {
      setDocGenerating(false);
    }, 600);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="cyber-panel p-6 border-2 border-[#ff007f] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="cyber-badge-magenta text-xs">DEFENSE & PRODUCTION LOGS</span>
            <span className="font-mono text-xs text-[#ff007f]">&gt; CHRONICLES_2026</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl font-extrabold text-white mt-1">
            EXPERIENCE & <span className="gradient-text-magenta">ACADEMIC HONORS</span>
          </h2>
          <p className="text-slate-300 font-['Space_Grotesk'] text-sm mt-1">
            Battle-tested in live government service offices and university research competitions.
          </p>
        </div>

        <div className="cyber-badge-lime text-xs py-2 px-4">
          <ShieldCheck className="w-4 h-4 text-[#ccff00]" />
          <span>GOVT OJT: TESDA MUNTIPARLASTATAPAT</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="cyber-panel p-6 space-y-4 border-l-4 border-l-[#00f0ff] relative">
            <div className="flex items-start justify-between">
              <div>
                <span className="cyber-badge text-xs">FEB 2026 – MAY 2026</span>
                <h3 className="font-['Outfit'] text-2xl font-black text-white mt-1 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#00f0ff]" />
                  TESDA Muntiparlastapat District Office
                </h3>
                <p className="font-mono text-xs text-[#00f0ff] font-bold">
                  IT Engineer & Full-Stack Developer (OJT)
                </p>
              </div>
            </div>

            <p className="text-slate-300 font-['Space_Grotesk'] text-sm leading-relaxed">
              Operated independently under minimal supervision to modernize paper-heavy operations into production-grade digital software systems used daily by government employees and public visitors.
            </p>

            <ul className="space-y-2 font-['Space_Grotesk'] text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00f0ff] font-bold font-mono">&gt;</span>
                <span><strong>Real-Time Queue Management System (QMS)</strong>: Architected an asynchronous queuing engine from scratch, replacing manual paper tickets with live queue monitors.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00f0ff] font-bold font-mono">&gt;</span>
                <span><strong>Procurement Ledger System</strong>: Built an automated government document generator for fiscal budget processing (RIS, PR, PO, PPMP, APP-CSE).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00f0ff] font-bold font-mono">&gt;</span>
                <span><strong>Infrastructure Reliability</strong>: Diagnosed hardware faults under strict uptime constraints and configured network printer subnet routing.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
              <span className="text-[11px] font-mono bg-[#00f0ff]/10 text-[#00f0ff] px-2.5 py-1 rounded border border-[#00f0ff]/30">Queue Engine</span>
              <span className="text-[11px] font-mono bg-[#00f0ff]/10 text-[#00f0ff] px-2.5 py-1 rounded border border-[#00f0ff]/30">DocGen Automation</span>
              <span className="text-[11px] font-mono bg-[#00f0ff]/10 text-[#00f0ff] px-2.5 py-1 rounded border border-[#00f0ff]/30">Network Subnets</span>
            </div>
          </div>

          <div className="cyber-panel cyber-panel-magenta p-6 space-y-4 border-l-4 border-l-[#ff007f] relative">
            <div className="flex items-start justify-between">
              <div>
                <span className="cyber-badge-magenta text-xs">GRADUATED JUNE 2026</span>
                <h3 className="font-['Outfit'] text-2xl font-black text-white mt-1 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#ff007f]" />
                  Taguig City University
                </h3>
                <p className="font-mono text-xs text-[#ff007f] font-bold">
                  B.S. Computer Science • GWA: 1.65 (Final Term GPA: 1.53)
                </p>
              </div>
            </div>

            <div className="space-y-3 font-['Space_Grotesk'] text-sm text-slate-300">
              <div className="p-3 bg-white/5 rounded border border-[#ff007f]/30 flex items-start gap-3">
                <Award className="w-6 h-6 text-[#ccff00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-base">Grand Champion (1st Place)</h4>
                  <p className="text-xs text-slate-300">CICT 2026 University Research Festival as Principal Investigator for operational data optimization.</p>
                </div>
              </div>

              <div className="p-3 bg-white/5 rounded border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ff007f] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">1st Runner-Up</h4>
                  <p className="text-xs text-slate-300">TCU Institutional Systems Fair for high-performance software system design.</p>
                </div>
              </div>

              <div className="p-3 bg-white/5 rounded border border-white/10 flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#00f0ff] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Selected Presenter</h4>
                  <p className="text-xs text-slate-300">2nd Annual University Research Symposium presenting fuzzy search algorithms.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
              <span className="text-[11px] font-mono bg-[#ff007f]/10 text-[#ff007f] px-2.5 py-1 rounded border border-[#ff007f]/30">GWA 1.65</span>
              <span className="text-[11px] font-mono bg-[#ff007f]/10 text-[#ff007f] px-2.5 py-1 rounded border border-[#ff007f]/30">Principal Investigator</span>
              <span className="text-[11px] font-mono bg-[#ff007f]/10 text-[#ff007f] px-2.5 py-1 rounded border border-[#ff007f]/30">Applied AI & ML</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="cyber-panel cyber-panel-lime p-6 space-y-5 sticky top-24 bg-[#0a0c1e]/95 border-2 border-[#ccff00]">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs font-bold text-[#ccff00] flex items-center gap-2">
                <Printer className="w-4 h-4" /> TESDA_DOCGEN_SIMULATOR
              </span>
              <span className="font-mono text-[10px] text-slate-400">FY2026 LEDGER</span>
            </div>

            <p className="text-xs text-slate-300 font-['Space_Grotesk']">
              Select a government fiscal document to simulate automated compilation & validation:
            </p>

            <div className="grid grid-cols-3 gap-2">
              {(['RIS', 'PR', 'PO', 'PPMP', 'APP-CSE'] as const).map((doc) => (
                <button
                  key={doc}
                  onClick={() => handleGenerateDoc(doc)}
                  className={`px-3 py-2 rounded font-mono text-xs font-bold transition-all cursor-pointer ${
                    activeDocType === doc
                      ? 'bg-[#ccff00] text-black shadow-[0_0_15px_rgba(204,255,0,0.5)] scale-105'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:border-[#ccff00]'
                  }`}
                >
                  {doc}
                </button>
              ))}
            </div>

            <div className="p-3 bg-[#070512] rounded border border-[#ccff00]/30 space-y-1">
              <span className="font-mono text-[11px] text-[#ccff00] font-bold">TYPE: {activeDocType}</span>
              <p className="font-['Space_Grotesk'] text-xs text-slate-300">
                {docDescriptions[activeDocType]}
              </p>
            </div>

            <div className="terminal-window p-3 space-y-2 text-[11px]">
              <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-white/10">
                <span>COMPILE_OUTPUT</span>
                {docGenerating && <RefreshCw className="w-3 h-3 text-[#ccff00] animate-spin" />}
              </div>

              <div className="space-y-1 max-h-36 overflow-y-auto font-mono text-slate-300">
                {generatedLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#00f0ff]">&gt;</span>
                    <span className={log.includes('SUCCESS') ? 'text-[#ccff00] font-bold' : ''}>{log}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-400 text-center">
              ✓ Deployed at TESDA Service Office (Feb - May 2026)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
