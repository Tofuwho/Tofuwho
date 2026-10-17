import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle2, FileText, RefreshCw, Terminal, ArrowRight } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  const [activeDocType, setActiveDocType] = useState<'RIS' | 'PR' | 'PO' | 'PPMP' | 'APP-CSE'>('RIS');
  const [docGenerating, setDocGenerating] = useState<boolean>(false);
  const [generatedLogs, setGeneratedLogs] = useState<string[]>([
    'Fiscal document compiler ready.',
    'Select any document type above to simulate automated government compilation.'
  ]);

  const docDescriptions = {
    'RIS': 'Requisition and Issue Slip — Dispatches inventory items to regional service units with automatic balance reconciliation.',
    'PR': 'Purchase Request — Verifies unit item pricing against government price thresholds and validates budgetary approval.',
    'PO': 'Purchase Order — Formally binds vendor supplier commitments against government procurement regulations.',
    'PPMP': 'Project Procurement Management Plan — Consolidates annual department item projections for budget alignment.',
    'APP-CSE': 'Annual Procurement Plan for Common-Use Supplies and Equipment — Standardized DBM format required for government compliance.'
  };

  const handleGenerateDoc = (doc: 'RIS' | 'PR' | 'PO' | 'PPMP' | 'APP-CSE') => {
    setActiveDocType(doc);
    setDocGenerating(true);
    const now = new Date().toLocaleTimeString();

    setGeneratedLogs([
      `[${now}] Initiating validation for government schema: ${doc}...`
    ]);

    setTimeout(() => {
      setGeneratedLogs(prev => [
        ...prev,
        `[${now}] Querying SQL database for fiscal budget allotment...`
      ]);
    }, 350);

    setTimeout(() => {
      setGeneratedLogs(prev => [
        ...prev,
        `[${now}] Compiling document fields against TESDA procurement regulations...`,
        `[${now}] STATUS: Successfully generated and verified ${doc} record (Execution: 18ms).`
      ]);
      setDocGenerating(false);
    }, 750);
  };

  return (
    <div className="w-full space-y-10 sm:space-y-12">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 glass-badge">
          <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
          <span>Professional Background</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Experience & Milestones
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          Government software engineering, research achievements, and academic honors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Timeline & Honors */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* TESDA Experience Card */}
          <div className="glass-card p-6 sm:p-8 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <span className="glass-badge bg-emerald-500/10 text-emerald-300 border-emerald-500/20">
                  Government Service · OJT
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-2">
                  TESDA Government Service Office
                </h3>
                <p className="text-xs text-neutral-400 font-medium mt-0.5 font-mono">
                  IT Engineer & Full-Stack Developer · Feb – May 2026
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              Operated with autonomy under minimal supervision to modernize paper-heavy administrative operations into production-grade digital software systems used daily by government officers and citizens.
            </p>

            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                <div className="text-xs font-semibold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  <span>Real-Time Queue Management System (QMS)</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed pl-3.5">
                  Architected an asynchronous queuing engine from scratch, replacing physical paper tickets with real-time digital ticket tracking and service window monitoring.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                <div className="text-xs font-semibold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Automated Fiscal Procurement Ledger</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed pl-3.5">
                  Engineered automated government document generation and validation for RIS, PR, PO, PPMP, and APP-CSE budget processing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                <div className="text-xs font-semibold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Infrastructure & Network Reliability</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed pl-3.5">
                  Diagnosed hardware and system faults under strict uptime demands; routed network printer subnets across administrative terminal stations.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.07]">
              {['Asynchronous QMS', 'Fiscal Ledger', 'Subnet Routing', 'High Uptime'].map(t => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.06]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Academic & Research Honors */}
          <div className="glass-card p-6 sm:p-8 space-y-5">
            <div>
              <span className="glass-badge bg-indigo-500/10 text-indigo-300 border-indigo-500/20">
                Education & Honors
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-2 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
                <span>Taguig City University</span>
              </h3>
              <p className="text-xs text-neutral-400 font-medium mt-0.5 font-mono">
                B.S. Computer Science · Graduated June 2026 · GWA: 1.65 (Final Term GPA: 1.53)
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4 text-amber-400" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-semibold text-white">Grand Champion (1st Place)</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    CICT 2026 University Research Festival as Principal Investigator for operational data optimization & fuzzy search algorithms.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-semibold text-white">1st Runner-Up</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    TCU Institutional Systems Fair for high-performance software system design.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-semibold text-white">Selected Presenter</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    2nd Annual University Research Symposium presenting rapid PDF indexing algorithms.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: macOS Style Government Utility Inspector */}
        <div className="lg:col-span-5 w-full">
          <div className="glass-card p-6 space-y-5 sticky top-24">
            
            {/* Window Title Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]/90 shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-[#27c93f]/90 shadow-sm"></span>
              </div>
              <span className="text-xs font-semibold text-neutral-300 font-mono">TESDA Fiscal Inspector</span>
              <span className="text-[10px] text-emerald-400 font-mono font-medium">LIVE COMPILER</span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Test automated compilation and validation of government fiscal records:
            </p>

            {/* Document Type Selector Buttons */}
            <div className="grid grid-cols-5 gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              {(['RIS', 'PR', 'PO', 'PPMP', 'APP-CSE'] as const).map((doc) => (
                <button
                  key={doc}
                  onClick={() => handleGenerateDoc(doc)}
                  className={`py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeDocType === doc
                      ? 'bg-white text-black shadow-md'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {doc}
                </button>
              ))}
            </div>

            {/* Document Definition */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <div className="text-xs font-semibold text-white">Document Type: {activeDocType}</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {docDescriptions[activeDocType]}
              </p>
            </div>

            {/* Terminal Log Console */}
            <div className="p-4 rounded-xl bg-black/75 border border-white/10 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-neutral-400 pb-2 border-b border-white/5 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Validation Stream</span>
                </div>
                {docGenerating && <RefreshCw className="w-3 h-3 text-indigo-400 animate-spin" />}
              </div>

              <div className="space-y-1.5 max-h-40 overflow-y-auto text-neutral-300 text-[11px]">
                {generatedLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-neutral-500 font-bold">›</span>
                    <span className={log.includes('Successfully') ? 'text-emerald-400 font-medium' : ''}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-neutral-500 text-center font-mono">
              Deployed in live operations at TESDA Service Office (Feb – May 2026)
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
