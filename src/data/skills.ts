import { loc, type LocalizedString } from '@/lib/localized';

export type SkillCategoryKey =
  | 'programming'
  | 'database'
  | 'enterprise'
  | 'testing'
  | 'marketing'
  | 'ecommerce'
  | 'devops';

export interface Skill {
  key: SkillCategoryKey;
  items: string[];
}

export const softSkills: LocalizedString[] = [
  loc('Problem Solving', 'حل المشكلات'),
  loc('Client Communication', 'التواصل مع العملاء'),
  loc('Project Leadership', 'قيادة المشاريع'),
  loc('Team Collaboration', 'العمل الجماعي'),
  loc('Time Management', 'إدارة الوقت'),
  loc('Adaptability', 'المرونة'),
  loc('Attention to Detail', 'الدقة في التفاصيل'),
];

export const hardSkills: Skill[] = [
  {
    key: 'programming',
    items: ['C# .NET', 'MVC', 'React.js', 'Android Studio', 'JavaScript', 'TypeScript'],
  },
  {
    key: 'database',
    items: ['SQL Plus', 'PostgreSQL', 'SQLite', 'Database Optimization', 'Query Performance'],
  },
  {
    key: 'enterprise',
    items: ['ERP', 'CRM', 'Payroll', 'Finance Systems', 'Retail Systems'],
  },
  {
    key: 'testing',
    items: ['Functional Testing', 'Integration Testing', 'Black-box Testing'],
  },
  {
    key: 'marketing',
    items: ['Social Media Campaigns', 'Content Creation', 'Marketing Automation (n8n)', 'AI Voice Integration'],
  },
  {
    key: 'ecommerce',
    items: ['Payment Gateway Integration', 'Amazon Product API', 'Full-stack E-commerce'],
  },
  {
    key: 'devops',
    items: ['VPS Management', 'Nginx', 'SSL Configuration', 'Domain Management'],
  },
];
