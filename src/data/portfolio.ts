export const profile = {
  name: "Kyaw Zin Soe",
  initials: "KZS",
  role: "Laravel Full-Stack Developer",
  photo: "/profile.jpg",
  headline:
    "I build practical, production-oriented web applications — from well-structured Laravel APIs and relational databases to clean, maintainable React + TypeScript frontends.",
  location: "Your City, Country",
  email: "kyawzinsoe21102002@gmail.com",
  github: "https://github.com/kyawzinsoedev",
  linkedin: "https://www.linkedin.com/in/yourusername",
};

export const aboutParagraphs = [
  "I am a Laravel-focused Full-Stack Web Developer who enjoys building real products that ship to production. My core work lives in the backend: Laravel REST APIs, authentication and authorization, database design, Eloquent relationships, Form Requests, Services, Jobs and queues.",
  "I have hands-on experience with Laravel Sanctum for API authentication, Spatie Laravel Permission for roles and permissions, and activity logging in both automatic and manual flavors. On the data side I design relational schemas in MySQL and PostgreSQL with proper foreign keys, constraints, migrations and seeders.",
  "On the frontend I work with React, TypeScript, Inertia.js, Tailwind CSS and shadcn/ui, connecting modern interfaces to Laravel APIs. Currently I am building MenuTap, a QR-based restaurant menu and ordering system that lets customers order without accounts while admins and kitchen staff manage everything behind a Sanctum-secured dashboard.",
];

export type SkillGroup = {
  title: string;
  blurb: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    blurb: "APIs, architecture and business logic with Laravel & PHP.",
    skills: [
      "PHP",
      "Laravel",
      "REST API Design",
      "Laravel Sanctum",
      "Spatie Permission",
      "Form Requests",
      "Services & Controllers",
      "Jobs & Queues",
      "File Uploads",
      "Activity Logging",
      "Third-party Integrations",
    ],
  },
  {
    title: "Frontend",
    blurb: "Clean, maintainable interfaces connected to real APIs.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Inertia.js",
      "Tailwind CSS",
      "shadcn/ui",
      "AJAX",
    ],
  },
  {
    title: "Database",
    blurb: "Relational design done properly from the start.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Eloquent ORM",
      "Migrations & Seeders",
      "Foreign Keys & Constraints",
      "Relationship Design",
    ],
  },
  {
    title: "Tooling",
    blurb: "The everyday workflow around the code.",
    skills: ["Git & GitHub", "Composer", "npm & Vite", "Postman", "Debugging"],
  },
];

export type Project = {
  title: string;
  description: string;
  highlights?: string[];
  tags: string[];
  link?: string;
};

export const featuredProject: Project = {
  title: "MenuTap",
  description:
    "A QR-based restaurant menu and ordering system. Customers scan a table-specific QR token to browse the menu, manage a cart, submit orders and track their status live — no account required.",
  highlights: [
    "Customer QR access with per-table tokens — zero-friction ordering",
    "Menu browsing, cart management and order submission flow",
    "Live order tracking from submission to the kitchen pass",
    "Admin panel for tables, categories and menu management",
    "Kitchen view for incoming orders and fulfillment",
    "Sanctum-authenticated staff roles via Spatie Permission",
  ],
  tags: [
    "Laravel REST API",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "MySQL",
    "Sanctum",
    "Spatie Permission",
  ],
};

export const projects: Project[] = [
  {
    title: "Enterprise Loan Workflow Platform",
    description:
      "A validation-heavy multi-step loan application platform with document uploads, financial workflows, external service integrations and full activity logging.",
    tags: ["Laravel", "PostgreSQL", "REST Integrations", "AJAX", "Queues"],
    link: "https://github.com/yourusername",
  },
  {
    title: "More on GitHub",
    description:
      "Experiments, tooling and ongoing work — always something new in progress.",
    tags: ["PHP", "TypeScript", "Open Source"],
    link: profile.github,
  },
];
