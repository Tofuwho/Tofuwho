import React, { useEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Layers,
  Play,
  RefreshCw,
  ShieldCheck,
  Terminal,
} from 'lucide-react';

type PipelineMode = 'data-assist' | 'thesis-library';

export const CapabilitiesPage: React.FC = () => {
  const [pipelineMode, setPipelineMode] = useState<PipelineMode>('data-assist');
  const [runningWorkflow, setRunningWorkflow] = useState<boolean>(false);
  const [workflowLogs, setWorkflowLogs] = useState<string[]>([
    'Pipeline simulator ready. Choose a project flow and click "Run Simulation".',
  ]);
  const [activeStep, setActiveStep] = useState<number>(0);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const pipelineConfigs: Record<
    PipelineMode,
    {
      title: string;
      steps: string[];
      logs: string[];
    }
  > = {
    'data-assist': {
      title: 'Data-Assist (ClearData) — Audited Spreadsheet & Reporting Flow',
      steps: [
        'Immutable CSV/XLSX Ingestion',
        'Polars Anomaly & Scale Profiling',
        'Verified Narrative Synthesis',
        'Source Row Lineage & XLSX Export',
      ],
      logs: [
        'STAGE 1: Storing immutable raw_json source rows via Polars + openpyxl workbook parser...',
        'STAGE 2: Flagged mixed currencies ($ / EUR), ambiguous MM/DD dates, and rating scale variants...',
        'STAGE 3: Checking every cited number and date against backend computed totals...',
        'STAGE 4: Report ready with click-through source row lineage (200 OK).',
      ],
    },
    'thesis-library': {
      title: 'ThesisLibrary — Hybrid PDF Search & Viewing Flow',
      steps: [
        'Query Tokenization & Lemmatizing',
        'RapidFuzz Corpus Typo Check',
        'PyMuPDF Deep PDF Scoring',
        'Watermarked Preview Streaming',
      ],
      logs: [
        'STAGE 1: Normalizing search tokens with NLTK WordNetLemmatizer and stopword filter...',
        'STAGE 2: Running RapidFuzz matching for "Did you mean...?" query correction...',
        'STAGE 3: Scoring weighted Dublin Core metadata + PyMuPDF full-text manuscript matches...',
        'STAGE 4: Streaming watermarked view-only preview pages cleanly (200 OK).',
      ],
    },
  };

  const handleModeSwitch = (mode: PipelineMode) => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
    setRunningWorkflow(false);
    setActiveStep(0);
    setPipelineMode(mode);
    setWorkflowLogs([
      `Loaded ${mode === 'data-assist' ? 'Data-Assist' : 'ThesisLibrary'} architecture.`,
      'Click "Run Simulation" to step through the workflow.',
    ]);
  };

  const handleRunPipeline = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];

    const cfg = pipelineConfigs[pipelineMode];
    setRunningWorkflow(true);
    setActiveStep(1);
    const time = () => new Date().toLocaleTimeString();

    setWorkflowLogs([`[${time()}] ${cfg.logs[0]}`]);

    const t1 = window.setTimeout(() => {
      setActiveStep(2);
      setWorkflowLogs((prev) => [...prev, `[${time()}] ${cfg.logs[1]}`]);
    }, 520);

    const t2 = window.setTimeout(() => {
      setActiveStep(3);
      setWorkflowLogs((prev) => [...prev, `[${time()}] ${cfg.logs[2]}`]);
    }, 1040);

    const t3 = window.setTimeout(() => {
      setActiveStep(4);
      setWorkflowLogs((prev) => [
        ...prev,
        `[${time()}] ${cfg.logs[3]}`,
        `[${time()}] COMPLETE: All stages verified.`,
      ]);
      setRunningWorkflow(false);
    }, 1560);

    timersRef.current = [t1, t2, t3];
  };

  const capabilities = [
    {
      category: '01 · Full-Stack Systems',
      icon: Code2,
      skills: [
        {
          name: 'Next.js 16, React 19 & TypeScript',
          desc: 'Clean, accessible web apps with virtualized tables, interactive charts, and responsive layouts.',
        },
        {
          name: 'Python (FastAPI & Django 4.2)',
          desc: 'Structured REST APIs, ORM query optimization, custom middleware, and role-based permissions.',
        },
        {
          name: 'Node.js, Express & Electron',
          desc: 'Lightweight backend services and cross-platform desktop workflows.',
        },
      ],
    },
    {
      category: '02 · Data & Search',
      icon: Cpu,
      skills: [
        {
          name: 'Polars, SheetJS & PDF.js',
          desc: 'Tabular profiling, anomaly detection, and multi-format Excel/CSV/PDF extraction.',
        },
        {
          name: 'PyMuPDF, RapidFuzz & NLTK',
          desc: 'Deep PDF text indexing, fuzzy query correction, and watermarked document rendering.',
        },
        {
          name: 'Audit Trails & Grounded Summaries',
          desc: 'Immutable raw storage and source-row lineage keeping computed figures verifiable.',
        },
      ],
    },
    {
      category: '03 · Storage & Workflows',
      icon: Database,
      skills: [
        {
          name: 'MariaDB, MySQL, SQLite & SQLAlchemy',
          desc: 'Relational schema design, Alembic migrations, and dependable local/production storage.',
        },
        {
          name: 'RBAC & Procurement Systems',
          desc: 'Multi-role permission matrices and fiscal planning/document generation workflows.',
        },
      ],
    },
    {
      category: '04 · Testing & Delivery',
      icon: ShieldCheck,
      skills: [
        {
          name: 'pytest, ruff & Django CI',
          desc: 'Automated backend test coverage, consistent code linting, and pull-request checks.',
        },
        {
          name: 'Docker, GitHub Actions & Live Ops',
          desc: 'Reproducible containerized environments, Git-Flow branching, and reliable office deployments.',
        },
      ],
    },
  ];

  const currentPipeline = pipelineConfigs[pipelineMode];

  return (
    <div className="w-full space-y-10 sm:space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 glass-badge">
          <Layers className="w-3.5 h-3.5 text-neutral-700" />
          <span>Core Capabilities</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
          What I Work With
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base max-w-2xl leading-relaxed">
          Practical engineering strengths across full-stack applications, data quality pipelines, and search systems.
        </p>
      </div>

      {/* Interactive System Flow Simulator */}
      <section className="glass-card p-6 sm:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-black/[0.08]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 font-mono">
                Interactive Flow Walkthrough
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900">
              {currentPipeline.title}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 p-1 rounded-full glass-panel">
              <button
                onClick={() => handleModeSwitch('data-assist')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  pipelineMode === 'data-assist'
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Data-Assist
              </button>
              <button
                onClick={() => handleModeSwitch('thesis-library')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  pipelineMode === 'thesis-library'
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                ThesisLibrary
              </button>
            </div>

            <button
              onClick={handleRunPipeline}
              disabled={runningWorkflow}
              className="btn-emerald text-xs py-2 px-4"
            >
              {runningWorkflow ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Running...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Simulation</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Step Progress Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {currentPipeline.steps.map((step, idx) => {
            const stepNum = idx + 1;
            const isDone = activeStep > stepNum || (activeStep === 4 && !runningWorkflow);
            const isCurrent = activeStep === stepNum && runningWorkflow;

            return (
              <div
                key={step}
                className={`p-4 rounded-xl border transition-all ${
                  isCurrent
                    ? 'bg-white border-neutral-900/30 text-neutral-900 shadow-sm'
                    : isDone
                    ? 'bg-emerald-50 border-emerald-200 text-neutral-900'
                    : 'bg-white/60 border-black/[0.06] text-neutral-500'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono font-medium text-neutral-500">Stage 0{stepNum}</span>
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : isCurrent ? (
                    <RefreshCw className="w-3.5 h-3.5 text-neutral-700 animate-spin" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-neutral-300"></span>
                  )}
                </div>
                <div className="text-xs font-semibold leading-snug">{step}</div>
              </div>
            );
          })}
        </div>

        {/* Pipeline Output Console */}
        <div className="p-4 rounded-xl bg-neutral-900 border border-black/10 font-mono text-xs space-y-2 text-neutral-200">
          <div className="flex items-center justify-between text-neutral-400 pb-2 border-b border-white/10 text-[11px]">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Execution Trace</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">DETERMINISTIC_FIRST</span>
          </div>

          <div className="space-y-1.5 max-h-40 overflow-y-auto text-[11px]">
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

      {/* 4 Disciplines Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((cap) => {
          const Icon = cap.icon;
          return (
            <div key={cap.category} className="glass-card p-6 space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-black/[0.08]">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 border border-black/[0.06] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-neutral-700" />
                </div>
                <h3 className="text-sm font-bold tracking-tight text-neutral-900 uppercase font-mono">
                  {cap.category}
                </h3>
              </div>

              <div className="space-y-4">
                {cap.skills.map((s) => (
                  <div key={s.name} className="space-y-1">
                    <div className="text-xs sm:text-sm font-semibold text-neutral-900">{s.name}</div>
                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">{s.desc}</p>
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
