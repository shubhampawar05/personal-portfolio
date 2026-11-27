export const siteMeta = {
  url: "https://www.shubhamchopde.in/",
  title: "Shubham Chopde — Software Engineer",
  description:
    "Software Engineer building scalable web applications, enterprise platforms, and AI-powered products.",
  ogImage: "https://www.shubhamchopde.in/og-cover.png",
  jobTitle: "Software Engineer"
};

export const heroData = {
  name: "Shubham Chopde",
  firstName: "Shubham",
  lastName: "Chopde",
  title: "Software Engineer",
  location: "Gurugram, India",
  headline: "Full-stack engineer building SaaS products, developer APIs, and AI-powered apps — from React frontends and Node.js backends to RAG pipelines and LLM tool calling.",
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
  { name: "AWS", color: "#FF9900" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "LangChain", color: "#7FC8A9" }
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
          "Owned end-to-end customer reporting workflows from requirements through production support",
          "Built document-to-report pipelines with customer-specific business rules and validation",
          "Led accounting-system migrations with minimal disruption to live reporting schedules"
        ],
        techStack: ["React", "Redux", "TypeScript", "Node.js", "REST APIs"]
      },
      {
        name: "Wunderkind",
        type: "Production Feature Migration",
        summary: "Migrated the On-Demand Text Campaign feature from legacy Connect UI to the new platform while maintaining functional parity across complex campaign workflows.",
        highlights: [
          "Shipped legacy-to-React migration for a production campaign workflow with functional parity",
          "Bridged legacy APIs via transformation layers so the new UI could ship incrementally",
          "Aligned with backend on API contracts and integration edge cases before cutover"
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
          "Delivered comparison and bidding flows used across core marketplace purchase paths",
          "Shipped reusable search and filter components shared across listing views",
          "Improved UI responsiveness on data-heavy listing and detail screens"
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
      "Multi-tenant workspaces with organization roles and permission-aware UI",
      "Issue list, pipeline, and Kanban views with shared workflow state",
      "GitHub OAuth and PR linking for engineering issue traceability",
      "AI-assisted task extraction from meeting notes into structured issues"
    ],
    learnings: [
      "Multi-tenancy is a middleware concern: every org-scoped request resolves its membership before it reaches a controller",
      "Roles belong in the service layer, not just the UI — hiding a button isn't access control",
      "Webhooks are public endpoints, so verify the HMAC signature on the raw body before trusting anything",
      "Store board columns as data, not hardcoded UI, so workflows can change without a deploy"
    ],
    previewImage: "./projects/track-io/dashboard.webp",
    architecture: [
      "Next.js App Router frontend with workspace-scoped routes and role-based access",
      "Node.js REST APIs with MongoDB for orgs, issues, and workflow metadata",
      "GitHub OAuth integration for linking pull requests to issues",
      "AI extraction pipeline turning unstructured notes into actionable tasks"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    links: {
      live: "https://track-io-web.vercel.app/",
      demo: "https://track-io-web.vercel.app/",
      github: null
    }
  },
  {
    id: "nutrikit",
    featured: true,
    category: "API Platform",
    title: "NutriKit",
    tagline: "Self-hostable nutrition API — describe a meal in text, voice or a photo and get matched foods, real portions and 33 nutrients.",
    description: "A full developer platform around a nutrition API: website, docs, developer portal, a JavaScript SDK on npm, and an MCP server so AI clients can use it.",
    highlights: [
      "Search 14,000+ foods from USDA, UK CoFID, the Indian Nutrient Databank and Open Food Facts",
      "Meal logging from text, voice and photos, plus barcode and nutrition-label scanning",
      "Meal plans for 6 diets and portion-aware nutrients (\"2 medium\", \"1.5 cups\")",
      "API keys, usage metering and Razorpay payments — published SDK as @nutrikit/sdk"
    ],
    learnings: [
      "Metering needs reserve-then-settle: reserving a call's cost atomically up front stops parallel requests from overspending",
      "Be honest about data: a \"bowl\" or \"katori\" has no standard weight, so the API labels its assumptions or asks for grams",
      "Separate test keys with fixed AI answers let developers integrate without paying for model calls",
      "Measure AI estimates with versioned benchmark sets instead of eyeballing a few outputs"
    ],
    previewImage: "./projects/nutrikit/home.webp",
    architecture: [
      "Single Fastify + TypeScript process serving the REST API, website and developer portal",
      "PostgreSQL for accounts, keys, usage and payments; read-only SQLite catalog with full-text search",
      "Claude / OpenAI only for photo and label features, so the core API runs without AI",
      "React + Vite web app, JS SDK, MCP server, and Playwright end-to-end tests"
    ],
    technologies: ["TypeScript", "Fastify", "PostgreSQL", "SQLite", "React", "MCP"],
    links: {
      live: "https://nutrikit.onrender.com",
      demo: null,
      github: "https://github.com/shubhampawar05/nutrikit"
    }
  },
  {
    id: "docchat-rag",
    featured: false,
    category: "AI · RAG",
    title: "DocChat — Simple RAG",
    tagline: "Upload a PDF or text file and chat with it. Answers come only from your documents, with page-level citations.",
    learnings: [
      "Chunking is a tradeoff: ~1,000-char chunks with 200-char overlap keep sentences intact without blurring topics together",
      "Questions must be embedded with the same model used at indexing, or the vectors don't line up",
      "Check similarity scores first — when answers are bad, it's usually retrieval, not the LLM",
      "A strict \"use only the context, cite the page\" prompt with temperature 0 is what stops hallucinated answers"
    ],
    technologies: ["Node.js", "LangChain", "OpenAI", "Qdrant", "Express"],
    links: { live: "https://genaisimple-rag.onrender.com", demo: null, github: "https://github.com/shubhampawar05/GenAiSimple-RAG" }
  },
  {
    id: "chaicode-mentors",
    featured: false,
    category: "AI · Persona",
    title: "ChaiCode Mentors — AI Personas",
    tagline: "Chat with AI personas modelled on the public teaching style of two coding educators, with streamed Hinglish replies and real YouTube video suggestions.",
    learnings: [
      "A persona lives in the system prompt — researching real public content made the voices feel distinct",
      "Tool calling: the model searches YouTube via a tool, and the server runs the loop until it answers",
      "Never let the model write URLs: {{VIDEO_n}} placeholders get swapped for verified links server-side",
      "Streaming means handling tokens that split mid-placeholder, and rate limits protect API credits in public"
    ],
    technologies: ["Node.js", "OpenAI", "Tool Calling", "YouTube API", "Streaming"],
    links: { live: "https://chaicode-mentors.onrender.com", demo: null, github: "https://github.com/shubhampawar05/ChaiCode-Mentors" }
  }
];

export const skillsData = {
  categories: [
    { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "TanStack Query"] },
    { label: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT", "RBAC", "Webhooks"] },
    { label: "Data", items: ["MongoDB", "PostgreSQL", "SQL", "Prisma", "Mongoose", "Redis"] },
    { label: "Infrastructure", items: ["Docker", "AWS", "Kubernetes", "CI/CD", "Vercel", "Git"] },
    { label: "AI", items: ["OpenAI APIs", "RAG", "LangChain", "Vector DBs (Qdrant)", "Embeddings", "Tool Calling", "Streaming", "Structured Extraction"] }
  ]
};

export const aiLabData = {
  title: "AI Lab",
  subtitle: "Smaller experiments and prototypes where I learn one idea at a time — each one is real code you can read.",
  items: [
    {
      title: "Advanced RAG Pipeline",
      description: "Query rewriting (step-back questions and sub-queries) to improve retrieval, with document indexing moved to background workers.",
      tags: ["Qdrant", "BullMQ", "Redis", "OpenAI"],
      link: "https://github.com/shubhampawar05/advance-rag-pipeline"
    },
    {
      title: "RAG Lab",
      description: "Document Q&A with citations, storing embeddings in Postgres with pgvector on Supabase instead of a separate vector DB.",
      tags: ["pgvector", "Supabase", "TypeScript"],
      link: "https://github.com/shubhampawar05/ragAi"
    },
    {
      title: "Agent from Scratch",
      description: "A small tool-using agent in TypeScript — a builder for instructions and tools, and the loop that runs them — without an agent framework.",
      tags: ["TypeScript", "OpenAI", "Tool Calling"],
      link: "https://github.com/shubhampawar05/agent-sdk-poc"
    },
    {
      title: "Prompting Fundamentals",
      description: "Zero-shot, few-shot, chain-of-thought, and chain-of-thought with tools — side by side on the same task.",
      tags: ["Prompt Engineering", "OpenAI"],
      link: "https://github.com/shubhampawar05/ChaiCode-Mentors/tree/main/prompting"
    },
    {
      title: "Company AI",
      status: "In progress",
      description: "An internal HR assistant built layer by layer — RAG, streaming, memory, MCP tools, RBAC, guardrails and evals — with an architecture decision record for every choice.",
      tags: ["Python", "FastAPI", "pgvector", "MCP", "Keycloak"],
      link: null
    }
  ]
};

export const notesData = {
  title: "Notes",
  subtitle: "Short notes on things I learned while building my projects, including the mistakes.",
  items: [
    {
      slug: "first-rag-app-lessons",
      title: "What I learned building my first RAG app",
      date: "2026-11-20",
      readingTime: "4 min read",
      summary: "Notes from building DocChat: chunk sizes, using the same embedding model, and why bad answers were usually a retrieval problem."
    },
    {
      slug: "chatbot-fake-youtube-links",
      title: "My chatbot kept making up YouTube links",
      date: "2026-11-23",
      readingTime: "4 min read",
      summary: "How I stopped my persona chatbot from sharing fake video links, and the streaming bug I ran into after fixing it."
    },
    {
      slug: "counting-api-usage",
      title: "Counting API usage is harder than it looks",
      date: "2026-11-26",
      readingTime: "3 min read",
      summary: "My first way of tracking API usage in NutriKit broke when requests came in at the same time. This is what I did instead."
    }
  ]
};

export const exploringData = {
  title: "Currently Exploring",
  categories: [
    { label: "AI Engineering", items: ["AI Agents", "MCP", "Conversation Memory", "Guardrails", "Evals & Observability"] },
    { label: "Backend", items: ["Python & FastAPI", "pgvector", "Job Queues (BullMQ)", "SSE Streaming"] },
    { label: "System Design", items: ["Distributed Systems", "Caching", "Model Routing & Fallbacks", "API Design"] },
    { label: "Infrastructure", items: ["Kubernetes", "AWS", "Networking", "Keycloak & RBAC"] }
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
  github: "https://github.com/shubhampawar05",
  resume: "./Shubham_Chopde_Resume.pdf"
};
