import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  ExternalLink,
  GraduationCap,
  RefreshCw,
  Terminal,
} from 'lucide-react';

interface ExperiencePageProps {
  setActiveTab: (tab: string) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ setActiveTab }) => {
  const [activeDocType, setActiveDocType] = useState<'RIS' | 'PR' | 'PO' | 'PPMP' | 'APP-CSE'>('RIS');
  const [docGenerating, setDocGenerating] = useState<boolean>(false);
  const [generatedLogs, setGeneratedLogs] = useState<string[]>([
    'Procurement schema inspector ready.',
    'Select any document type above to test automated validation.',
  ]);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const docDescriptions = {
    RIS: 'Requisition and Issue Slip — Dispatches inventory items to service units with automatic balance updates.',
    PR: 'Purchase Request — Verifies unit item pricing against agency price ceilings and budgetary approval.',
    PO: 'Purchase Order — Formally binds supplier commitments against government procurement rules.',
    PPMP: 'Project Procurement Management Plan — Consolidates quarterly departmental projections for budget planning.',
    'APP-CSE':
      'Annual Procurement Plan for Common-Use Supplies and Equipment — Standardized agency-wide procurement format.',
  };

  const handleGenerateDoc = (doc: 'RIS' | 'PR' | 'PO' | 'PPMP' | 'APP-CSE') => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];

    setActiveDocType(doc);
    setDocGenerating(true);
    const now = new Date().toLocaleTimeString();

    setGeneratedLogs([`[${now}] Checking schema fields for ${doc}...`]);

    const t1 = window.setTimeout(() => {
      setGeneratedLogs((prev) => [
        ...prev,
        `[${now}] Verifying MOOE / Capital Outlay ceiling and line-item balance...`,
      ]);
    }, 320);

    const t2 = window.setTimeout(() => {
      setGeneratedLogs((prev) => [
        ...prev,
        `[${now}] Preparing printable layout for office review...`,
        `[${now}] STATUS: Validated ${doc} record cleanly (18ms).`,
      ]);
      setDocGenerating(false);
    }, 700);

    timersRef.current = [t1, t2];
  };

  return (
    <div className="w-full space-y-10 sm:space-y-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 glass-badge">
            <Briefcase className="w-3.5 h-3.5 text-emerald-700" />
            <span>Background &amp; Experience</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
            Experience
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Production government office systems, independent execution, and practical full-stack engineering.
          </p>
        </div>

        <button onClick={() => setActiveTab('contact')} className="btn-emerald text-xs py-2 px-4 shrink-0">
          <span>Get in Touch</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Experience & Education */}
        <div className="lg:col-span-7 space-y-6">
          {/* TESDA Experience Card */}
          <div className="glass-card p-6 sm:p-8 space-y-5">
            <div>
              <span className="glass-badge bg-emerald-50 text-emerald-800 border-emerald-200">
                Government Service · OJT
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mt-2">
                TESDA Muntiparlastapat District Office
              </h3>
              <p className="text-xs text-neutral-500 font-medium mt-0.5 font-mono">
                OJT IT Engineer &amp; Full-Stack Developer · Feb 2026 – May 2026
              </p>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              Worked independently under minimal supervision to replace paper-heavy administrative processes with dependable daily-use software systems.
            </p>

            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-xl bg-white/80 border border-black/[0.06] space-y-1">
                <div className="text-xs font-semibold text-neutral-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Real-Time Queue Management System (QMS)</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed pl-3.5">
                  Built an asynchronous queuing tool from scratch, replacing manual paper tickets with live queue dispatching and service window tracking.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-black/[0.06] space-y-1">
                <div className="text-xs font-semibold text-neutral-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                  <span>Procurement Ledger &amp; Document Generator</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed pl-3.5">
                  Managed fiscal year budget data with automated preparation of RIS, PR, PO, PPMP, and APP-CSE procurement documents.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-black/[0.06] space-y-1">
                <div className="text-xs font-semibold text-neutral-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                  <span>Hardware Diagnostics &amp; Network Support</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed pl-3.5">
                  Diagnosed hardware faults during live office operations and configured network printer subnet routing across workstations.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/[0.08]">
              {['Async QMS', 'Fiscal Ledger', 'Subnet Routing', 'Office Operations'].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 border border-black/[0.06]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Education (Clean, without GWA or awards spotlight) */}
          <div className="glass-card p-6 sm:p-8 space-y-4">
            <div>
              <span className="glass-badge">Education</span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mt-2 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-neutral-700" />
                <span>Taguig City University</span>
              </h3>
              <p className="text-xs text-neutral-500 font-medium mt-0.5 font-mono">
                B.S. Computer Science · June 2026
              </p>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Focused on full-stack web architectures, relational database design, document indexing and search pipelines, and practical software testing.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Procurement Schema Inspector */}
        <div className="lg:col-span-5 w-full">
          <div className="glass-card p-6 space-y-5 sticky top-24">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300"></span>
              </div>
              <span className="text-xs font-semibold text-neutral-700 font-mono">Procurement Schema Inspector</span>
              <span className="text-[10px] text-emerald-700 font-mono font-semibold">INTERACTIVE</span>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed">
              Test automated validation across standard procurement forms, or launch the full client-side{' '}
              <strong className="text-neutral-900">app-cse-public-demo</strong> sandbox:
            </p>

            <div className="grid grid-cols-5 gap-1 p-1 rounded-xl bg-neutral-100 border border-black/[0.06]">
              {(['RIS', 'PR', 'PO', 'PPMP', 'APP-CSE'] as const).map((doc) => (
                <button
                  key={doc}
                  onClick={() => handleGenerateDoc(doc)}
                  className={`py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeDocType === doc
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/60'
                  }`}
                >
                  {doc}
                </button>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-white/90 border border-black/[0.06] space-y-1">
              <div className="text-xs font-semibold text-neutral-900">Document Type: {activeDocType}</div>
              <p className="text-xs text-neutral-600 leading-relaxed">{docDescriptions[activeDocType]}</p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900 border border-black/10 font-mono text-xs space-y-2 text-neutral-200">
              <div className="flex items-center justify-between text-neutral-400 pb-2 border-b border-white/10 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Validation Output</span>
                </div>
                {docGenerating && <RefreshCw className="w-3 h-3 text-emerald-400 animate-spin" />}
              </div>

              <div className="space-y-1.5 max-h-40 overflow-y-auto text-[11px]">
                {generatedLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-neutral-500 font-bold">›</span>
                    <span className={log.includes('Validated') ? 'text-emerald-400 font-medium' : ''}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://tofuwho.github.io/app-cse-public-demo/"
              target="_blank"
              rel="noreferrer"
              className="w-full btn-emerald text-xs py-2.5"
            >
              <span>Launch app-cse-public-demo Sandbox</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
