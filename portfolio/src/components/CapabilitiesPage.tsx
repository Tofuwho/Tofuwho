import React, { useState } from 'react';
import { Cpu, Play, CheckCircle2, Code2, ShieldCheck, RefreshCw, Layers, Terminal } from 'lucide-react';

export const CapabilitiesPage: React.FC = () => {
  const [runningWorkflow, setRunningWorkflow] = useState<boolean>(false);
  const [workflowLogs, setWorkflowLogs] = useState<string[]>([
    'Pipeline orchestrator initialized.',
    'Click "Run Agentic Pipeline" to simulate end-to-end execution.'
  ]);
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowSteps = [
    'Document Ingestion (PyMuPDF)',
    'Fuzzy Query Normalization (RapidFuzz)',
    'LLM Agent Reasoning Dispatch',
    'Schema Validation & Structured Delivery'
  ];

  const handleRunPipeline = () => {
    setRunningWorkflow(true);
    setActiveStep(1);
    const time = () => new Date().toLocaleTimeString();

    setWorkflowLogs([`[${time()}] STAGE 1: Extracting binary text streams from target document with PyMuPDF...`]);

    setTimeout(() => {
      setActiveStep(2);
      setWorkflowLogs(prev => [
        ...prev,
        `[${time()}] STAGE 2: Computing Levenshtein distance scores across indexed title tokens...`
      ]);
    }, 550);

    setTimeout(() => {
      setActiveStep(3);
      setWorkflowLogs(prev => [
        ...prev,
        `[${time()}] STAGE 3: Dispatching structured prompt context to LLM reasoning node...`
      ]);
    }, 1100);

    setTimeout(() => {
      setActiveStep(4);
      setWorkflowLogs(prev => [
        ...prev,
        `[${time()}] STAGE 4: Schema validated. JSON payload stored in 22ms.`,
        `[${time()}] PIPELINE COMPLETE: Execution status 200 OK.`
      ]);
      setRunningWorkflow(false);
    }, 1650);
  };

  const capabilities = [
    {
      category: 'Full-Stack & Systems',
      icon: Code2,
      accent: 'text-indigo-400',
      badgeBg: 'bg-indigo-500/10 border-indigo-500/20',
      skills: [
        { name: 'Python (Django / Backend Architecture)', desc: 'Robust ORM models, high-performance database indexing, REST endpoints' },
        { name: 'JavaScript & TypeScript (React / Node)', desc: 'Component lifecycles, state management, expressive user interfaces' },
        { name: 'Electron (Desktop Software)', desc: 'Native desktop packaging for offline institutional workflows' },
        { name: 'MySQL & SQLite Database Design', desc: 'Atomic ACID transactions, foreign key integrity, schema migrations' },
        { name: 'RESTful API Engineering', desc: 'Stateless endpoints, JWT token authentication, rate limiting' }
      ]
    },
    {
      category: 'AI & Document Intelligence',
      icon: Cpu,
      accent: 'text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/20',
      skills: [
        { name: 'PyMuPDF Binary Document Scanning', desc: 'High-speed institutional text extraction and metadata mining' },
        { name: 'RapidFuzz String Matching Algos', desc: 'Sub-millisecond fuzzy search correcting user typographical errors' },
        { name: 'LLM Reasoning & Agentic Pipelines', desc: 'Multi-stage structured prompt execution and schema enforcement' },
        { name: 'Automated ML Preprocessing', desc: 'Feature extraction, tokenization, and vector data preparation' }
      ]
    },
    {
      category: 'DevOps & Reliability',
      icon: ShieldCheck,
      accent: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/20',
      skills: [
        { name: 'GitHub Actions & CI/CD Pipelines', desc: 'Automated linting, test suites, and staging build verification' },
        { name: 'Git-Flow Branching Architecture', desc: 'Strict separation of feature branches, develop, and main releases' },
        { name: 'Production High-Uptime Engineering', desc: 'Zero-downtime deployments in live government service facilities' }
      ]
    }
  ];

  return (
    <div className="w-full space-y-10 sm:space-y-12">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 glass-badge">
          <Layers className="w-3.5 h-3.5 text-indigo-400" />
          <span>Core Competencies</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Capabilities & Architecture
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          Deep technical disciplines across system design, intelligent document scanning, and reliable full-stack software.
        </p>
      </div>

      {/* Interactive AI Agentic Pipeline Runner */}
      <section className="glass-card p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
                Interactive Pipeline Simulation
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              Agentic Search & Document Processing Pipeline
            </h3>
          </div>

          <button
            onClick={handleRunPipeline}
            disabled={runningWorkflow}
            className="btn-primary text-xs py-2 px-4.5"
          >
            {runningWorkflow ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Executing Pipeline...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-black" />
                <span>Run Agentic Pipeline</span>
              </>
            )}
          </button>
        </div>

        {/* Step Progress Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {workflowSteps.map((step, idx) => {
            const stepNum = idx + 1;
            const isDone = activeStep > stepNum;
            const isCurrent = activeStep === stepNum;

            return (
              <div
                key={step}
                className={`p-4 rounded-xl border transition-all ${
                  isCurrent
                    ? 'bg-indigo-500/10 border-indigo-500/30 text-white shadow-md'
                    : isDone
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-neutral-200'
                    : 'bg-white/[0.02] border-white/[0.05] text-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono font-medium text-neutral-400">Stage 0{stepNum}</span>
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : isCurrent ? (
                    <RefreshCw className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-white/20"></span>
                  )}
                </div>
                <div className="text-xs font-medium leading-snug">{step}</div>
              </div>
            );
          })}
        </div>

        {/* Pipeline Output Log */}
        <div className="p-4 rounded-xl bg-black/75 border border-white/10 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-neutral-400 pb-2 border-b border-white/5 text-[11px]">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>Execution Console</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">STATUS: ACTIVE</span>
          </div>

          <div className="space-y-1.5 max-h-36 overflow-y-auto text-neutral-300 text-[11px]">
            {workflowLogs.map((log, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-neutral-500 font-bold">›</span>
                <span className={log.includes('COMPLETE') ? 'text-emerald-400 font-medium' : ''}>
                  {log}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map((cap) => {
          const Icon = cap.icon;
          return (
            <div key={cap.category} className="glass-card p-6 space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/[0.08]">
                <div className={`w-8 h-8 rounded-lg ${cap.badgeBg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-4 h-4 ${cap.accent}`} />
                </div>
                <h3 className="text-sm font-bold tracking-tight text-white uppercase font-mono">
                  {cap.category}
                </h3>
              </div>

              <div className="space-y-4">
                {cap.skills.map((s) => (
                  <div key={s.name} className="space-y-1">
                    <div className="text-xs font-semibold text-white">{s.name}</div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-normal">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
};
