export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Data & Reporting' | 'Search & OPAC' | 'Procurement & RBAC';
  status: string;
  timeframe: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  liveDemoLabel?: string;
  highlights: string[];
  metrics: string;
}

export const PROFILE_META = {
  name: 'John Mark Cayabyab',
  handle: '@Tofuwho',
  email: 'jcayabyab655@gmail.com',
  githubUrl: 'https://github.com/Tofuwho',
  location: 'NCR, Philippines',
  availability: 'Immediately Available · Remote, Hybrid & On-Site',
  degree: 'B.S. Computer Science — Taguig City University (June 2026)',
  targetRoles: [
    'Junior Software Engineer',
    'Full-Stack Developer (Python / TypeScript)',
    'Backend & Data Systems Engineer',
    'AI Workflow Builder',
  ],
};

export const WHAT_I_BRING = [
  {
    title: 'End-to-End Full-Stack Delivery',
    description:
      'I design data schemas, build clean Python/TypeScript backends, and ship calm, responsive interfaces without unnecessary complexity.',
  },
  {
    title: 'Live Government Office Experience',
    description:
      'Deployed real-time queue management and fiscal procurement automation used daily at TESDA District Office.',
  },
  {
    title: 'Audited Data & Search Engineering',
    description:
      'Focused on immutable raw data lineage, deterministic validation before AI synthesis, and fast hybrid PDF/text discovery.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'data-assist',
    title: 'Data-Assist (ClearData)',
    subtitle: 'Audited Spreadsheet Quality, Polars Analytics & Interactive Reporting',
    category: 'Data & Reporting',
    status: 'Latest Build',
    timeframe: 'Oct – Nov 2026',
    description:
      'Full-stack platform that turns messy CSV, TSV, and multi-sheet Excel exports into clean, audited, stakeholder-ready analyses and interactive reports with immutable raw data and click-through source row lineage.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'FastAPI', 'Python 3.11', 'Polars', 'SQLAlchemy 2.0'],
    githubUrl: 'https://github.com/Tofuwho/Data-Assist',
    highlights: [
      'Immutable raw ingestion (`rows.raw_json`) paired with versioned overlay diffs so original audit records are never overwritten',
      'Deterministic Polars profiling surfacing mixed currencies, ambiguous date formats, rating-scale variants, and duplicate rows',
      'Backend-verified executive briefings checking every cited metric and date against computed dataset totals',
      'Click-through Source Row Lineage drawer, sanitized multi-sheet XLSX export, and 42 automated backend pytest suites',
    ],
    metrics: '42 Pytest Suites · Source Lineage',
  },
  {
    id: 'thesis-library',
    title: 'ThesisLibrary',
    subtitle: 'Institutional Digital Theses & Dissertations OPAC',
    category: 'Search & OPAC',
    status: 'Live Demo',
    timeframe: '2025 – Nov 2026',
    description:
      'Institutional digital theses repository built with Django 4.2, hybrid NLP/PyMuPDF deep PDF search, RapidFuzz query typo correction, server-side watermarked view-only PDF streaming, Dublin Core & LCC cataloging, and a responsive live demo.',
    tags: ['Python 3.11', 'Django 4.2', 'PyMuPDF', 'RapidFuzz', 'NLTK', 'MariaDB', 'SQLite', 'Docker'],
    githubUrl: 'https://github.com/Tofuwho/ThesisLibrary',
    liveDemoUrl: 'https://tofuwho.github.io/ThesisLibrary/',
    liveDemoLabel: 'Try Live OPAC Demo',
    highlights: [
      'Automated ruff linting, MySQL-backed Django CI test suite, Docker Compose, and 1-click GitHub Codespaces environment',
      '3-layer hybrid search combining NLTK WordNet lemmatization, weighted ORM scoring, PyMuPDF full-text scans, and RapidFuzz correction',
      'Server-side anti-leak 2.0x PNG rasterized reader enforcing watermarked view-only access without raw file downloads',
      'Embedded Dublin Core metadata tags, 1-click APA/MLA/IEEE/Chicago/BibTeX citations, and responsive GitHub Pages live demo',
    ],
    metrics: 'Django 4.2 · Hybrid PDF Search',
  },
  {
    id: 'app-cse-public-demo',
    title: 'app-cse-public-demo (OpenProcure)',
    subtitle: 'Interactive Client-Side APP-CSE & Procurement RBAC Sandbox',
    category: 'Procurement & RBAC',
    status: 'Live Sandbox',
    timeframe: 'Nov 2026',
    description:
      'Interactive client-side APP-CSE & Public Procurement RBAC sandbox featuring 6 role personas, fiscal ceiling planning, inventory ledger, PPMP/SR/PR/PO workflows, Excel/CSV/PDF extraction, and A4 printable forms.',
    tags: ['React 18', 'TypeScript 5.7', 'Vite 6', 'Tailwind CSS', 'SheetJS', 'PDF.js', 'A4 Print CSS'],
    githubUrl: 'https://github.com/Tofuwho/app-cse-public-demo',
    liveDemoUrl: 'https://tofuwho.github.io/app-cse-public-demo/',
    liveDemoLabel: 'Launch Live Sandbox',
    highlights: [
      '6 interactive RBAC staff personas (Super Admin, Budget, Procurement, Supply Custodian, Dept User, HOPE) with live permission matrix',
      'Guided procurement flow: Inventory Check → Stock Requisition (SR) → Purchase Request (PR) → Purchase Order (PO) with VAT/EWT simulator',
      '3-step client-side file extraction supporting .xlsx, .xls, .csv, .tsv, .json, .txt, and .pdf via SheetJS and pdfjs-dist',
      'Dedicated A4 portrait @media print studio generating ready-to-file procurement forms right from the browser',
    ],
    metrics: '6 RBAC Roles · Client-Side Sandbox',
  },
];

export const RECRUITER_BRIEF_TEXT = `John Mark Cayabyab (@Tofuwho) — Open for Hiring
Target Roles: Junior Software Engineer | Full-Stack Developer (Python / TypeScript) | Backend & Data Systems Engineer
Location: NCR, Philippines (Open to Remote, Hybrid, or On-Site)
Education: B.S. Computer Science — Taguig City University (June 2026)
Experience: OJT IT Engineer & Full-Stack Developer — TESDA District Office (Feb–May 2026): Deployed live Queue Management System & Fiscal Procurement Ledger.

Selected Repositories:
- Data-Assist (ClearData): Audited CSV/Excel analytics + FastAPI + Polars + Next.js 16 — https://github.com/Tofuwho/Data-Assist
- ThesisLibrary: Django 4.2 + PyMuPDF + RapidFuzz Hybrid OPAC — Live Demo: https://tofuwho.github.io/ThesisLibrary/
- app-cse-public-demo (OpenProcure): React + TS + SheetJS + PDF.js 6-role RBAC procurement sandbox — Live Demo: https://tofuwho.github.io/app-cse-public-demo/

Email: jcayabyab655@gmail.com | GitHub: https://github.com/Tofuwho`;
