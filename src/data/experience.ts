import { loc, locList, type LocalizedString, type LocalizedList } from '@/lib/localized';

export interface Experience {
  id: number;
  company: LocalizedString;
  location: LocalizedString;
  position: LocalizedString;
  period: LocalizedString;
  startDate: string;
  endDate: string;
  achievements: LocalizedList;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 3,
    company: loc('Aiems', 'Aiems'),
    location: loc('Dubai, UAE', 'دبي، الإمارات'),
    position: loc('Software Engineering & Marketing Manager', 'Software Engineering & Marketing Manager'),
    period: loc('March 2025 - January 2026', 'مارس 2025 - يناير 2026'),
    startDate: '2025-03',
    endDate: '2026-01',
    current: false,
    achievements: locList(
      [
        'Lead full-cycle web development projects from requirement gathering, workflow diagrams, documentation, coding, testing to final delivery',
        'Designed and implemented e-commerce websites and corporate portals, improving client online presence and increasing engagement by 35%',
        'Automated marketing workflows using n8n, reducing manual tasks by 50% and improving campaign efficiency',
        'Integrated AI voice agent (VoicHub) for customer interaction, increasing response rate by 40%',
        'Developed social media campaigns and created marketing materials, boosting brand awareness by 30%',
        'Managed cross-functional teams and ensured all projects met quality standards and deadlines',
      ],
      [
        'قيادة مشاريع تطوير ويب كاملة من جمع المتطلبات ومخططات سير العمل والتوثيق إلى البرمجة والاختبار والتسليم',
        'تصميم وتنفيذ مواقع تجارة إلكترونية وبوابات شركات، تحسين الحضور الرقمي وزيادة التفاعل 35%',
        'أتمتة سير عمل التسويق بـ n8n، تقليل المهام اليدوية 50% وتحسين كفاءة الحملات',
        'دمج وكيل صوت AI (VoicHub) للتفاعل مع العملاء، زيادة معدل الاستجابة 40%',
        'تطوير حملات سوشال ميديا ومواد تسويقية، رفع الوعي بالعلامة 30%',
        'إدارة فرق متعددة التخصصات وضمان جودة المشاريع والالتزام بالمواعيد',
      ]
    ),
  },
  {
    id: 2,
    company: loc('The Hope International', 'The Hope International'),
    location: loc('Amman, Jordan', 'عمان، الأردن'),
    position: loc('Software Engineering', 'Software Engineering'),
    period: loc('February 2022 - September 2024', 'فبراير 2022 - سبتمبر 2024'),
    startDate: '2022-02',
    endDate: '2024-09',
    achievements: locList(
      [
        'Led development of hospital management system using C# .NET, improving data accessibility and reducing manual processes by 40%',
        'Designed and deployed multiple professional web applications using React.js, enhancing user engagement and performance by 35%',
        'Developed and maintained fully functional e-commerce systems, integrating secure payment gateways and product APIs with Amazon',
        'Built and optimized SQL Plus database structures, improving query efficiency by 30% and ensuring data integrity',
        'Created comprehensive technical documentation for all developed systems, ensuring smooth handover and maintenance',
        'Collaborated with cross-functional teams to deliver projects on time and within scope, maintaining 98% delivery success rate',
      ],
      [
        'قيادة تطوير نظام إدارة مستشفى بـ C# .NET، تحسين الوصول للبيانات وتقليل العمليات اليدوية 40%',
        'تصميم ونشر تطبيقات ويب احترافية بـ React.js، تحسين التفاعل والأداء 35%',
        'تطوير وصيانة أنظمة تجارة إلكترونية كاملة مع بوابات دفع آمنة وAPIs منتجات Amazon',
        'بناء وتحسين هياكل SQL Plus، تحسين كفاءة الاستعلامات 30% وضمان سلامة البيانات',
        'إنشاء توثيق تقني شامل لكل الأنظمة، تسليم وصيانة سلسة',
        'التعاون مع فرق متعددة لتسليم المشاريع في الوقت والنطاق، نسبة نجاح 98%',
      ]
    ),
  },
  {
    id: 1,
    company: loc('Future Applied Computer Technology', 'Future Applied Computer Technology'),
    location: loc('Amman, Jordan', 'عمان، الأردن'),
    position: loc('Software Engineering', 'Software Engineering'),
    period: loc('June 2020 - January 2022', 'يونيو 2020 - يناير 2022'),
    startDate: '2020-06',
    endDate: '2022-01',
    achievements: locList(
      [
        'Developed and maintained C# MVC web modules, improving overall system performance by 25% through optimized code and bug fixes',
        'Enhanced company\'s Information Management System, resulting in 30% faster data processing and better task organization',
        'Built and debugged Android applications using Android Studio, reducing crash rates by 20% through efficient troubleshooting',
        'Collaborated in Jordan Islamic Bank project, successfully delivering 100% of assigned modules within project deadlines',
        'Improved code quality and efficiency by implementing reusable components and following clean code principles, boosting team productivity by 15%',
      ],
      [
        'تطوير وصيانة وحدات C# MVC، تحسين أداء النظام 25% عبر كود محسّن وإصلاح أخطاء',
        'تحسين نظام إدارة المعلومات، معالجة بيانات أسرع 30% وتنظيم مهام أفضل',
        'بناء وتصحيح تطبيقات Android بـ Android Studio، تقليل الأعطال 20%',
        'المشاركة في مشروع بنك Jordan Islamic Bank، تسليم 100% من الوحدات في الموعد',
        'تحسين جودة الكود عبر مكونات قابلة لإعادة الاستخدام ومبادئ Clean Code، رفع إنتاجية الفريق 15%',
      ]
    ),
  },
];
