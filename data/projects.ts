import { Project } from '@/types/portfolio'

export const projects: Project[] = [
  {
    id: 'placementpro-ai',
    title: 'PlacementPro AI',
    description: 'An enterprise-grade SaaS platform automating resume parsing, candidate sorting, and real-time dashboard analytics with AI.',
    image: '/projects/placementpro.png',
    github: 'https://github.com/SyedUzaiir/PlacementPro-AI',
    live: 'https://placementpro-ai.vercel.app',
    status: 'in-progress',
    techStack: ['Java', 'Spring Boot', 'Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Generative AI'],
    featured: true,
    year: '2026',
    category: 'AI SaaS',
    problemSolved: 'Recruiters manually screen thousands of resumes, leading to screening fatigue and missing qualified candidates due to human error.',
    keyFeatures: [
      'Automated resume parser utilizing LLM layouts extraction',
      'Intelligent keyword matching and candidate scoring grids',
      'Real-time recruitment analytics and placement dashboards',
      'Transactional email updates for candidate progress tracking'
    ],
    architecture: 'Spring Boot handles REST API routing and user permission control, PostgreSQL manages data models, and Next.js renders the candidate dashboard.',
    challenges: 'Ensuring zero data loss during bulk resume uploads. Solved using asynchronous queue processing with Spring ThreadPoolTaskExecutor and Redis metadata caches.',
    futureImprovements: ['Add automated email screening follow-up agents', 'Integrate video interview speech analysis systems']
  },
  {
    id: 'luminadb',
    title: 'LuminaDB',
    description: 'An end-to-end full-stack software application built for translating Natural Language (Plain English) inputs directly into executable MongoDB Query Language (MQL) and visualizing datasets in real-time, executing queries locally and safely without external API dependencies.',
    image: '/projects/luminadb_new.png',
    github: 'https://github.com/SyedUzaiir/luminai',
    live: 'https://lumindbai.vercel.app',
    status: 'completed',
    techStack: ['React', 'Tailwind CSS', 'Recharts', 'Express', 'Node.js', 'FastAPI', 'Python', 'spaCy', 'MongoDB Atlas'],
    featured: true,
    year: '2025',
    category: 'NLP / Full Stack',
    problemSolved: 'Non-technical stakeholders frequently rely on developers to fetch basic metrics or build database queries. LuminaDB allows users to query databases using plain English without needing technical MQL knowledge or paid API keys.',
    keyFeatures: [
      'Natural Language to MQL translation using spaCy syntactic analysis and token lemmatization',
      'Local, offline natural language parsing service without paid LLM dependencies',
      'AI Loading Simulator and real-time MQL typewriter code execution sandbox',
      'Adaptive data visualizer charts and service wake-status polling engine for Render server instances'
    ],
    architecture: 'A decoupled microservice system where FastAPI handles local NLP translation using spaCy, Node.js/Express acts as the secure query orchestrator validating MQL schema bounds, and React/Tailwind CSS renders real-time visual dashboards.',
    challenges: 'Render free tier containers sleep after periods of inactivity, causing initial query timeouts. Solved by integrating a frontend system wake-status polling engine that pings and wakes backend services on-demand.',
    futureImprovements: ['Add support for multi-collection aggregation pipeline generations', 'Integrate automated schema discovery and indexing recommendations']
  },
  {
    id: 'biosense-ai',
    title: 'BioSense AI Clinical Platform',
    description: 'A multi-modal health risk assessment platform combining metabolic biomarkers, explainable machine learning, and real-time emotion analysis for clinical intelligence.',
    image: '/projects/biosense.png',
    github: 'https://github.com/SyedUzaiir/biosense-ai',
    live: 'https://biosenseai.vercel.app/',
    status: 'completed',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Recharts',
      'FastAPI',
      'Python',
      'Scikit-Learn',
      'SHAP',
      'OpenCV',
      'FER',
      'MongoDB',
      'Vercel',
      'Railway'
    ],
    featured: true,
    year: '2024',
    category: 'ML / Healthcare',
    problemSolved: 'Clinicians face cognitive overload sorting through numerous patient variables and real-time expressions, risking delayed or incomplete interventions for critical patients.',
    keyFeatures: [
      'Multimodal Inference Integration: Clinical fusion algorithm syncing physiological data vectors with real-time facial expressions to output joint diagnostic recommendations.',
      '95% Predictive Accuracy: Bagged classifier ensembles (RandomForest + SVC Calibrated Pipeline) trained for early-stage diabetes risk stratification.',
      'Explainable AI (XAI) Implementation: Local feature impact calculation via SHAP and KNNImputer, dynamically rendering waterfall plots for clinicians.',
      '24h Trajectory Interpolation: Monotonic cubic spline algorithms (PchipInterpolator) configured to model projected glucose curves.',
      'Secure API Core: Asynchronous FastAPI endpoints built for sub-500ms model inference with environment CORS configurations.'
    ],
    architecture: 'FastAPI backend processes ML/CV pipelines and manages MongoDB data models, while a Next.js (App Router) frontend handles real-time charts, facial expression overlays, and patient risk dashboards.',
    challenges: 'Integrating high-frequency physiological data streams with real-time visual emotion recognition feeds while maintaining low-latency responses. Resolved by designing an asynchronous clinical fusion algorithm and sub-500ms execution threads.',
    futureImprovements: [
      'Integrate real-time wearable device telemetry API feeds',
      'Implement federated learning schemas for localized hospital node model training'
    ]
  },
  // {
  //   id: 'smart-street',
  //   title: 'Smart Street IoT Hub',
  //   description: 'A hardware-software hub managing smart street light networks, energy profiles, and environmental telemetry.',
  //   image: '/projects/placementpro.png',
  //   github: 'https://github.com/SyedUzaiir/Smart-Street',
  //   status: 'completed',
  //   techStack: ['Python', 'Docker', 'PostgreSQL', 'React', 'Tailwind CSS'],
  //   featured: false,
  //   year: '2024',
  //   category: 'IoT / Embedded',
  //   problemSolved: 'Municipal street lighting networks draw massive amounts of energy and lack centralized fault reporting mechanisms.',
  //   keyFeatures: [
  //     'Centralized hardware coordinate map management',
  //     'Automatic light adjusting matching sun coordinates',
  //     'Automated error logs for broken lamp nodes',
  //     'Environmental sensors dashboards'
  //   ],
  //   architecture: 'Dockerized microservices containing an MQTT broker, a Python worker collecting coordinates, and a PostgreSQL database storing environmental logs.',
  //   challenges: 'Optimizing high-frequency write operations on database systems. Resolved by batching insert statements in the Python consumer thread.',
  //   futureImprovements: ['Add predictive maintenance analytics models', 'Integrate solar grid feedback sensors']
  // },
  {
    id: 'magnus-ai',
    title: 'Magnus AI Agent Platform',
    description: 'An AI-agent framework that orchestrates multi-agent tasks, task scheduling, and background data scraping.',
    image: '/projects/ecommerce.png',
    status: 'in-progress',
    techStack: ['Python', 'Generative AI', 'TypeScript', 'FastAPI', 'Docker'],
    featured: false,
    year: '2025',
    category: 'AI / Machine Learning',
    problemSolved: 'Single LLM prompts fail when tasks require sequence steps, code executions, or internet search validations.',
    keyFeatures: [
      'Multi-agent conversation orchestration panels',
      'Dynamic file read-write sandbox environment',
      'Real-time execution log visualization feeds',
      'Integration with internet search engines APIs'
    ],
    architecture: 'Python LangGraph manages agent transition paths, FastAPI delivers HTTP endpoints, and TypeScript components visualize agent state charts.',
    challenges: 'Preventing infinite loops during agent self-correction steps. Solved by implementing recursive depth limit metrics inside execution routing graphs.',
    futureImprovements: ['Add local model support (Ollama)', 'Integrate Slack and Discord alerts hooks']
  },
  // {
  //   id: 'careerflow',
  //   title: 'CareerFlow Portal',
  //   description: 'A full-stack placement portal managing job postings, candidate applications, and user messaging.',
  //   image: '/projects/ai-doc.png',
  //   github: 'https://github.com/SyedUzaiir/CareerFlow',
  //   status: 'completed',
  //   techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
  //   featured: false,
  //   year: '2024',
  //   category: 'Full Stack Web',
  //   problemSolved: 'Students lack centralized portals to track applications, communicate with coordinators, and practice mock questions.',
  //   keyFeatures: [
  //     'Secure applicant session management (JWT)',
  //     'Job filter board matching core technology fields',
  //     'Application progress tracking statuses',
  //     'Built-in message forums between candidates'
  //   ],
  //   architecture: 'Express REST routes manage request sessions, MongoDB stores candidate profiles, and React renders clean filter cards.',
  //   challenges: 'Securing file uploads (resume PDFs) from malicious exploits. Solved by validating MIME types and uploading files to secure S3 storage nodes.',
  //   futureImprovements: ['Add automated calendar synchronization', 'Integrate resume score feedback widgets']
  // }
]
