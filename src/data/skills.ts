export interface Skill {
  category: string;
  items: string[];
}

export const softSkills: string[] = [
  "Problem Solving",
  "Client Communication",
  "Project Leadership",
  "Team Collaboration",
  "Time Management",
  "Adaptability",
  "Attention to Detail"
];

export const hardSkills: Skill[] = [
  {
    category: "Programming & Web Development",
    items: ["C# .NET", "MVC", "React.js", "Android Studio", "JavaScript", "TypeScript"]
  },
  {
    category: "Database Management",
    items: ["SQL Plus", "PostgreSQL", "SQLite", "Database Optimization", "Query Performance"]
  },
  {
    category: "Enterprise Systems",
    items: ["ERP", "CRM", "Payroll", "Finance Systems", "Retail Systems"]
  },
  {
    category: "Testing & QA",
    items: ["Functional Testing", "Integration Testing", "Black-box Testing"]
  },
  {
    category: "Marketing & Digital Tools",
    items: ["Social Media Campaigns", "Content Creation", "Marketing Automation (n8n)", "AI Voice Integration"]
  },
  {
    category: "E-commerce Development",
    items: ["Payment Gateway Integration", "Amazon Product API", "Full-stack E-commerce"]
  },
  {
    category: "DevOps & Deployment",
    items: ["VPS Management", "Nginx", "SSL Configuration", "Domain Management"]
  }
];
