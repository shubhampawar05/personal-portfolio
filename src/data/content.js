export const heroData = {
  name: "Shubham Chopde",
  firstName: "Shubham",
  lastName: "Chopde",
  title: "Full Stack Developer",
  location: "Gurugram, India",
  headline: "Building scalable SaaS products, modern web applications, and enterprise-grade solutions with React, Next.js, Node.js, and TypeScript.",
  subheadline: "Software Engineer building scalable web applications and AI-powered products.",
  available: true
};

export const heroTechStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#68A063" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Tailwind CSS", color: "#38BDF8" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" }
];

export const aboutData = {
  brand: "Build. Understand. Explore.",
  paragraphs: [
    "I'm a Software Engineer focused on building reliable, useful software. My background is in full-stack development — working across frontend applications, backend APIs, databases, data-processing workflows, and production systems.",
    "I'm particularly interested in understanding how software works beneath the framework layer — from databases and networking to system design and distributed systems. More recently, I've been exploring LLMs, RAG, AI agents, and ways to integrate AI into real products.",
    "I enjoy learning by building, breaking things, understanding why they work, and then building them better."
  ],
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "500+", label: "DSA Problems" },
    { value: "5★", label: "HackerRank Rating" }
  ]
};

export const experienceData = [
  {
    company: "Synthlane",
    role: "Software Engineer",
    duration: "Aug 2025 – Present",
    location: "Gurugram",
    projects: [
      {
        name: "Accumatic (Veramatic)",
        type: "Financial Data & Reporting Platform",
        summary: "Worked on financial-platform workflows that transformed document-based financial data into structured reporting outputs, with focus on data processing, business rules, and reliable production behavior.",
        highlights: [
          "Owned end-to-end customer reporting workflows from requirements to production",
          "Designed data pipelines transforming business documents into financial reports",
          "Led platform migrations when clients changed accounting systems"
        ],
        techStack: ["React", "Redux", "TypeScript", "Node.js", "REST APIs"]
      },
      {
        name: "Wunderkind",
        type: "Production Feature Migration",
        summary: "Migrated the On-Demand Text Campaign feature from legacy Connect UI to the new platform while maintaining functional parity across complex campaign workflows.",
        highlights: [
          "Migrated production feature from legacy to modern React architecture",
          "Integrated legacy APIs with data transformation for new platform",
          "Collaborated with backend teams on API contracts and integration"
        ],
        techStack: ["React", "Redux", "TypeScript", "REST APIs"]
      }
    ]
  },
  {
    company: "Fibonacci Innovative Solutions",
    role: "Associate Software Engineer",
    duration: "Aug 2024 – Aug 2025",
    location: "Gurugram",
    projects: [
      {
        name: "Simple123",
        type: "B2B Marketplace",
        summary: "Developed features for a B2B marketplace including product comparison, bidding systems, and dynamic search with advanced filtering.",
        highlights: [
          "Built product comparison and bidding system features",
          "Implemented dynamic search and filtering with reusable components",
          "Optimized frontend performance for responsive UI workflows"
        ],
        techStack: ["React.js", "JavaScript", "REST APIs", "MongoDB"]
      }
    ]
  }
];

export const projectsData = [
  {
    id: "track-io",
    featured: true,
    category: "SaaS",
    title: "Track-IO",
    tagline: "Issue tracker for engineering teams — org roles, Kanban, GitHub PR linking, and AI task extraction.",
    description: "A Linear-inspired multi-tenant project management platform with workspace management, role-based access, issue workflows, Kanban boards, and AI-powered meeting-to-issues extraction.",
    highlights: [
      "Organization & role-based access",
      "List pipeline & Kanban board",
      "GitHub OAuth & PR linking",
      "AI task extraction from notes"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    links: {
      live: "https://track-io-web.vercel.app/",
      demo: "https://track-io-web.vercel.app/",
      github: null
    }
  },
  {
    id: "acumatic",
    featured: false,
    category: "FinTech",
    title: "Financial Data Platform",
    tagline: "Production financial processing and reporting workflows at scale.",
    description: "Engineered end-to-end data pipelines transforming complex business documents into accurate financial reports with customer-specific business rules.",
    highlights: [
      "Document-to-report data pipelines",
      "Customer-specific business rules",
      "Accounting system migration support"
    ],
    technologies: ["React", "Redux", "TypeScript", "Node.js", "REST APIs"],
    links: { live: null, demo: null, github: null }
  },
  {
    id: "wunderkind",
    featured: false,
    category: "Migration",
    title: "Production Feature Migration",
    tagline: "Modernizing a legacy product workflow for enterprise marketers.",
    description: "Migrated On-Demand Text Campaign feature from legacy Connect UI to new platform, handling UI, API integration, and data transformation.",
    highlights: [
      "Legacy-to-modern React migration",
      "Complex Redux state management",
      "Zero-disruption production cutover"
    ],
    technologies: ["React", "Redux", "TypeScript", "REST APIs"],
    links: { live: null, demo: null, github: null }
  }
];

export const skillsData = {
  categories: [
    { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "TanStack Query"] },
    { label: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT", "RBAC", "Webhooks"] },
    { label: "Data", items: ["MongoDB", "PostgreSQL", "SQL", "Prisma", "Mongoose", "Redis"] },
    { label: "Infrastructure", items: ["Docker", "AWS", "Kubernetes", "CI/CD", "Vercel", "Git"] },
    { label: "AI", items: ["OpenAI APIs", "RAG", "LLM Apps", "Speech-to-Text", "Structured Extraction"] }
  ]
};

export const aiLabData = {
  title: "AI Lab",
  subtitle: "Experiments, prototypes, and engineering explorations around LLMs, retrieval, voice interfaces, and AI-powered software.",
  items: [
    { title: "RAG", description: "Retrieval-Augmented Generation experiments for document Q&A and search." },
    { title: "LLM Applications", description: "Building applications using modern language models and structured outputs." },
    { title: "Structured Extraction", description: "Converting unstructured information into structured, actionable data." },
    { title: "Speech-to-Text", description: "Exploring voice-driven software interfaces and meeting transcription." },
    { title: "AI Agents", description: "Exploring tool-using and workflow-oriented AI systems." }
  ]
};

export const exploringData = {
  title: "Currently Exploring",
  categories: [
    { label: "System Design", items: ["Distributed Systems", "Caching", "Queues", "API Design"] },
    { label: "Backend", items: ["PostgreSQL", "Prisma", "Redis", "BullMQ"] },
    { label: "Infrastructure", items: ["Docker", "Kubernetes", "AWS", "Networking"] },
    { label: "AI", items: ["RAG", "Vector DBs", "AI Agents", "Ollama"] }
  ]
};

export const achievementsData = [
  { title: "500+ DSA Problems", detail: "Solved on HackerRank and LeetCode", icon: "trophy" },
  { title: "HackerRank 5★", detail: "Problem Solving rating", icon: "medal" },
  { title: "Geekathon", detail: "Top performer in coding competitions", icon: "star" }
];

export const contactData = {
  email: "shubhamchopde090@gmail.com",
  phone: "+91-70899-71250",
  linkedin: "https://www.linkedin.com/in/shubham-chopde05/",
  github: "https://github.com/ShubhamChopde",
  resume: "./Shubham_Chopde_Resume.pdf"
};
