export const heroData = {
  name: "Shubham Chopde",
  sanskritName: "शुभम्",
  phonetic: "/ʃubʱəm/",
  root: "शुभ (śubha)",
  rootLink: "https://en.wiktionary.org/wiki/%E0%A4%B6%E0%A5%81%E0%A4%AD",
  meaning: "auspicious, fortunate, or good; one who brings positive outcomes.",
  tagline: "Software Engineer · Gurugram, India"
};

export const aboutData = {
  paragraphs: [
    "I'm Shubham Chopde, a Software Engineer with 2+ years of experience building scalable web applications and enterprise platforms. I specialize in full-stack development — from React and Next.js frontends to Node.js backends — with hands-on experience in financial reporting workflows, data transformation, and AI-powered features.",
    "Currently at Synthlane, I work on Accumatic (now Veramatic), a financial platform that transforms complex business documents into reliable financial outputs, and have migrated enterprise features across legacy and modern platforms. Previously at Fibonacci Innovative Solutions, I built B2B marketplace features for product comparison and bidding systems.",
    "I'm passionate about clean architecture, performance optimization, and building products that solve real business problems."
  ],
  interests: ["Full-Stack Development", "React & Next.js", "AI-Powered Workflows", "Data Transformation", "System Design", "DSA & Problem Solving"]
};

export const experienceData = [
  {
    company: "Synthlane",
    role: "Software Engineer",
    duration: "Aug 2025 – Present",
    location: "Gurugram",
    summary: "Building and maintaining enterprise financial and marketing platforms. On Accumatic (now Veramatic), owned end-to-end delivery of customer reporting workflows — designing data pipelines that transform uploaded business documents into financial reports with customer-specific business rules. Led platform migrations when clients changed accounting systems. On Wunderkind, migrated the On-Demand Text Campaign feature from legacy Connect UI to the new platform using React and Redux, maintaining functional parity across complex multi-step campaign workflows.",
    techStack: ["React", "Redux", "TypeScript", "Node.js", "REST APIs", "Data Transformation", "OpenAI APIs"]
  },
  {
    company: "Fibonacci Innovative Solutions",
    role: "Associate Software Engineer",
    duration: "Aug 2024 – Aug 2025",
    location: "Gurugram",
    summary: "Developed features for Simple123, a B2B marketplace platform. Built product comparison and bidding systems, implemented dynamic product search and filtering, and created reusable UI components with a focus on frontend performance optimization.",
    techStack: ["React.js", "JavaScript", "REST APIs", "MongoDB", "CSS3", "Performance Optimization"]
  }
];

export const skillsData = {
  featured: [
    "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Redux", "MongoDB", "REST APIs", "OpenAI APIs", "Tailwind CSS"
  ],
  categories: {
    languages: {
      label: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Java", "HTML5", "CSS3", "SQL"]
    },
    frontend: {
      label: "Frontend",
      items: ["React.js", "Next.js", "Redux", "Zustand", "TanStack Query", "Tailwind CSS"]
    },
    backend: {
      label: "Backend & APIs",
      items: ["Node.js", "Express.js", "REST APIs", "JWT", "Webhooks", "Authentication", "RBAC"]
    },
    databases: {
      label: "Databases",
      items: ["MongoDB", "Mongoose", "SQL"]
    },
    aiTools: {
      label: "AI & Dev Tools",
      items: ["OpenAI APIs", "Speech-to-Text", "LLM Data Extraction", "Claude AI", "Cursor AI", "GitHub Copilot"]
    },
    devops: {
      label: "DevOps & Tools",
      items: ["Docker", "Kubernetes", "CI/CD", "AWS", "Git", "GitHub", "Jira", "Postman", "Swagger"]
    }
  }
};

export const projectsData = [
  {
    id: "track-io",
    category: "Full-Stack SaaS",
    title: "Track-IO",
    client: "Personal Project",
    description: "Built a Linear-style, multi-tenant issue tracking platform for product and engineering teams. Features organizations, projects, issues, comments, attachments, Kanban boards, and list views. Includes an OpenAI-powered meeting-to-issues workflow that transcribes audio, extracts structured task candidates with priorities and confidence scores, and lets users review before creating issues.",
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "JWT", "OpenAI APIs", "RBAC"],
    impact: "Modular architecture with org-level data isolation · AI-powered task extraction",
    link: null
  },
  {
    id: "simple123",
    category: "B2B Marketplace",
    title: "Simple123",
    client: "Fibonacci Innovative Solutions",
    description: "Developed core marketplace features including product comparison, bidding systems, and dynamic search with advanced filtering. Built reusable component architecture and optimized rendering performance for responsive UI workflows.",
    technologies: ["React.js", "JavaScript", "REST APIs", "MongoDB", "CSS3"],
    impact: "Production B2B marketplace serving enterprise clients",
    link: null
  },
  {
    id: "acumatic",
    category: "FinTech Platform",
    title: "Accumatic (Veramatic)",
    client: "Synthlane",
    description: "Engineered end-to-end data pipelines transforming complex business documents into accurate financial reports. Implemented customer-specific business rules, data normalization for accounting workflows, and led platform migrations when clients switched accounting systems.",
    technologies: ["React", "Redux", "TypeScript", "Node.js", "REST APIs", "Data Pipelines"],
    impact: "Automated financial reporting · Reduced manual processing effort",
    link: null
  }
];

export const achievementsData = [
  {
    title: "500+ DSA Problems",
    detail: "Solved 500+ data structures and algorithms problems on HackerRank and LeetCode",
    year: "Ongoing"
  },
  {
    title: "HackerRank 5★ Rating",
    detail: "Achieved 5-star rating in Problem Solving on HackerRank",
    year: "2024"
  },
  {
    title: "Geekathon Top Performer",
    detail: "Recognized as top performer in Geekathon coding competitions",
    year: "2024"
  }
];

export const contactData = {
  email: "shubhamchopde090@gmail.com",
  phone: "+91-70899-71250",
  linkedin: "https://www.linkedin.com/in/shubhamchopde",
  github: "https://github.com/ShubhamChopde",
  resume: "./Shubham_Chopde_Resume.pdf"
};
