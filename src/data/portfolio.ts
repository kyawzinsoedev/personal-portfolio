import heroPhoto from "../assets/hero.png";

export const profile = {
  name: "Kyaw Zin Soe",
  initials: "KZS",
  role: "Full-Stack Developer",
  photo: heroPhoto,
  headline:
    "I build practical, production-oriented web applications — from well-structured Laravel APIs and relational databases to clean, maintainable React + TypeScript frontends. I continuously expand my skills in Node.js, Next.js, NestJS, MongoDB, and server infrastructure, while exploring modern development and deployment practices.",
  location: "Yangon , Myanmar",
  email: "kyawzinsoe21102002@gmail.com",
  github: "https://github.com/kyawzinsoedev",
  linkedin: "https://www.linkedin.com/in/kyaw-zin-soe-2047a8297",
};

export const aboutParagraphs = [
  "I am a Laravel-focused Full-Stack Developer experienced in building production-ready web applications using PHP, Laravel, REST APIs, MVC, Eloquent ORM, authentication, authorization, and database design.",

  "I work with MySQL, PostgreSQL, Laravel Sanctum, Spatie Permission, React, TypeScript, Inertia.js, Tailwind CSS, and shadcn/ui to build secure and modern applications.",

  "I also have hands-on experience with Linux, Ubuntu VPS, Windows, Apache, Nginx, Docker, Git, GitHub, SSL, DNS, server management, deployment, and CI/CD automation.",

  "Currently building real-world projects while continuously improving my skills in Vue.js, AI-assisted development, DevOps, and modern web technologies.",
];

export type SkillGroup = {
  title: string;
  blurb: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend Development",
    blurb:
      "Scalable APIs, secure authentication, database architecture and business logic.",
    skills: [
      "PHP",
      "Laravel",
      "Node.js",
      "NestJS",
      "RESTful API Development",
      "Laravel Sanctum",
      "Spatie Permission",
      "MVC Architecture",
      "Eloquent ORM",
      "Form Requests",
      "Service Classes",
      "Jobs & Queues",
      "Authentication & Authorization",
      "File Uploads",
      "Activity Logging",
      "Third-party API Integration",
    ],
  },

  {
    title: "Frontend Development",
    blurb:
      "Modern, responsive and maintainable interfaces integrated with backend APIs.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Vue.js",
      "Inertia.js",
      "Tailwind CSS",
      "shadcn/ui",
      "AJAX",
    ],
  },

  {
    title: "Database & Data Management",
    blurb:
      "Relational database design, data modeling and efficient data management.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Eloquent ORM",
      "Database Design",
      "Migrations & Seeders",
      "Foreign Keys & Constraints",
      "Relationships & Query Optimization",
    ],
  },

  {
    title: "Tools & DevOps",
    blurb: "Development workflows, server management and deployment.",
    skills: [
      "Git & GitHub",
      "Composer",
      "npm & Vite",
      "Postman",
      "Docker & Docker Compose",
      "Linux & Ubuntu",
      "Windows Server",
      "Apache & Nginx",
      "VPS Management",
      "DNS Configuration",
      "SSL/TLS",
      "CI/CD Automation",
      "Server Deployment",
      "Debugging",
    ],
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
    link: "https://github.com/kyawzinsoedev",
  },
  {
    title: "More on GitHub",
    description:
      "Experiments, tooling and ongoing work — always something new in progress.",
    tags: ["PHP", "TypeScript", "Open Source"],
    link: profile.github,
  },
];
