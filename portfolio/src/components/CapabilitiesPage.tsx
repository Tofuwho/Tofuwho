import React, { useState } from 'react';
import { Cpu, Terminal, Play, CheckCircle2, Code, Shield, RefreshCw } from 'lucide-react';

export const CapabilitiesPage: React.FC = () => {
  const [runningWorkflow, setRunningWorkflow] = useState<boolean>(false);
  const [workflowLogs, setWorkflowLogs] = useState<string[]>([
    'AGENT_CORE v2.6 Initialized.',
    'Click "RUN AGENTIC PIPELINE" to test workflow execution.'
  ]);
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowSteps = [
    '01 // PDF Extraction (PyMuPDF)',
    '02 // Fuzzy Query Correction (RapidFuzz)',
    '03 // LLM Reasoning Agent Dispatch',
    '04 // Structured JSON Output & DB Sync'
  ];

  const handleRunPipeline = () => {
    setRunningWorkflow(true);
    setActiveStep(1);
    const time = () => new Date().toLocaleTimeString();

    setWorkflowLogs([`[${time()}] STAGE 1: Extracting raw binary streams from target document...`]);

    setTimeout(() => {
      setActiveStep(2);
      setWorkflowLogs(prev => [
        ...prev,
        `[${time()}] STAGE 2: Computing Levenshtein distance scores across 10,000+ title tokens...`
      ]);
    }, 700);

    setTimeout(() => {
      setActiveStep(3);
      setWorkflowLogs(prev => [
        ...prev,
        `[${time()}] STAGE 3: Dispatching structured prompt context to LLM Agent reasoning node...`
      ]);
    }, 1400);

    setTimeout(() => {
      setActiveStep(4);
      setWorkflowLogs(prev => [
        ...prev,
        `[${time()}] STAGE 4: Validated JSON payload received! DB updated in 24ms.`,
        `[${time()}] PIPELINE COMPLETE: Execution Status 200 OK.`
      ]);
      setRunningWorkflow(false);
    }, 2100);
  };

  const capabilities = [
    {
      category: 'FULL-STACK SYSTEMS',
      icon: Code,
      color: 'cyan',
      skills: [
        { name: 'Python (Django / Backend)', level: 95 },
        { name: 'JavaScript / Node (Express)', level: 90 },
        { name: 'Electron (Desktop Apps)', level: 85 },
        { name: 'MySQL & SQLite Schemas', level: 90 },
        { name: 'RESTful API Architecture', level: 95 },
      ]
    },
    {
      category: 'AI & AGENTIC WORKFLOWS',
      icon: Cpu,
      color: 'magenta',
      skills: [
        { name: 'LLM Integration & Prompting', level: 92 },
        { name: 'Agentic Workflow Pipelines', level: 90 },
        { name: 'PyMuPDF Document Mining', level: 95 },
        { name: 'RapidFuzz Fuzzy Search Algos', level: 92 },
        { name: 'Automated ML Pre-Processing', level: 88 },
      ]
    },
    {
      category: 'DEVOPS & DEPLOYMENT',
      icon: Shield,
      color: 'lime',
      skills: [
        { name: 'GitHub Actions & CI/CD', level: 90 },
        { name: 'Git-Flow & Branching Strategy', level: 95 },
        { name: 'Government Hardware Troubleshooting', level: 88 },
        { name: 'Network Printer Subnet Routing', level: 85 },
        { name: 'Production High-Uptime Ops', level: 92 },
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="cyber-panel p-6 border-2 border-[#ccff00] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="cyber-badge-lime text-xs">SYSTEM CAPABILITIES & AI MATRIX</span>
            <span className="font-mono text-xs text-[#ccff00]">&gt; SKILL_ARCHITECTURE</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl font-extrabold text-white mt-1">
            CORE CAPABILITIES & <span className="gradient-text-lime">AGENTIC PIPELINES</span>
          </h2>
          <p className="text-slate-300 font-['Space_Grotesk'] text-sm mt-1">
            Full-stack engineering, automated agentic pipelines, and high-performance algorithms.
          </p>
        </div>

        <button
          onClick={handleRunPipeline}
          disabled={runningWorkflow}
          className="brutalist-card px-5 py-2.5 rounded font-mono font-bold text-xs text-[#ccff00] flex items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {runningWorkflow ? <RefreshCw className="w-4 h-4 animate-spin text-[#ccff00]" /> : <Play className="w-4 h-4 text-[#ccff00]" />}
          <span>RUN AGENTIC PIPELINE</span>
        </button>
      </div>

      <section className="cyber-panel cyber-panel-lime p-6 space-y-4 bg-[#09071a]/95">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#ccff00]">
            <Terminal className="w-4 h-4" /> AGENTIC_WORKFLOW_SIMULATOR
          </div>
          <span className="font-mono text-xs text-slate-400">STATUS: {runningWorkflow ? 'PROCESSING...' : 'IDLE'}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {workflowSteps.map((step, idx) => {
            const stepNum = idx + 1;
            const isCurrent = activeStep === stepNum;
            const isPassed = activeStep > stepNum;

            return (
              <div
                key={idx}
                className={`p-3 rounded border font-mono text-xs transition-all ${
                  isCurrent
                    ? 'bg-[#ccff00]/20 border-[#ccff00] text-[#ccff00] shadow-[0_0_15px_rgba(204,255,0,0.3)] scale-105'
                    : isPassed
                    ? 'bg-[#00f0ff]/10 border-[#00f0ff]/40 text-[#00f0ff]'
                    : 'bg-white/5 border-white/10 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{step}</span>
                  {isPassed && <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />}
                  {isCurrent && <RefreshCw className="w-4 h-4 text-[#ccff00] animate-spin" />}
                </div>
              </div>
            );
          })}
        </div>

        <div className="terminal-window p-4 space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-400 border-b border-white/10 pb-2">
            <span className="text-[#00f0ff] font-bold">&gt; EXECUTION_LOGS</span>
            <span className="text-[10px]">TIME: REALTIME</span>
          </div>

          <div className="space-y-1 font-mono text-slate-300 min-h-24 max-h-48 overflow-y-auto">
            {workflowLogs.map((log, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#ff007f]">&gt;</span>
                <span className={log.includes('COMPLETE') ? 'text-[#ccff00] font-bold' : ''}>{log}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map((cap, idx) => {
          const Icon = cap.icon;
          const panelClass = cap.color === 'magenta' ? 'cyber-panel-magenta' : cap.color === 'lime' ? 'cyber-panel-lime' : 'cyber-panel';
          const textClass = cap.color === 'magenta' ? 'text-[#ff007f]' : cap.color === 'lime' ? 'text-[#ccff00]' : 'text-[#00f0ff]';
          const barClass = cap.color === 'magenta' ? 'bg-[#ff007f]' : cap.color === 'lime' ? 'bg-[#ccff00]' : 'bg-[#00f0ff]';

          return (
            <div key={idx} className={`cyber-panel ${panelClass} p-6 space-y-5`}>
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${textClass}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-['Outfit'] text-lg font-bold text-white tracking-wide">
                  {cap.category}
                </h3>
              </div>

              <div className="space-y-4">
                {cap.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>{skill.name}</span>
                      <span className={`font-bold ${textClass}`}>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                      <div
                        className={`h-full ${barClass} transition-all duration-1000 rounded-full shadow-[0_0_8px_currentColor]`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
