import project1 from '@/assets/project-1-algorithms.jpg';
import project2 from '@/assets/project-2-driver.jpg';
import project3 from '@/assets/project-3-perfume.jpg';
import project4 from '@/assets/project-4-retail.jpg';
import project5 from '@/assets/project-5-ai-agent.jpg';
import project6 from '@/assets/project-6-marketing.jpg';
import project7 from '@/assets/project-7-crm.jpg';
import project8 from '@/assets/project-8-realestate.jpg';
import project9 from '@/assets/project-9-almohra.jpg';
import project10 from '@/assets/project-10-transport.jpg';
import project11 from '@/assets/project-11-bus-rental.jpg';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  details: string[];
  challenges: string[];
  results: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Algorithms Visualization System",
    subtitle: "Graduation Project - Interactive Learning Platform",
    description: "An interactive educational system built on ASP.NET MVC that visualizes sorting and search algorithms step-by-step, with performance comparison capabilities and a custom sorting algorithm.",
    technologies: ["ASP.NET MVC", "C#", "JavaScript", "SQL Server"],
    image: project1,
    details: [
      "Views display animations for each algorithm step (swaps, comparisons, partitions)",
      "Controllers manage algorithm execution and return step states as JSON",
      "Implemented common algorithms (Bubble, Selection, Insertion, Merge, Quick, Binary Search) plus custom algorithm",
      "Performance measurement: comparisons, operations count, and execution time",
      "Extensible architecture for adding new algorithms easily"
    ],
    challenges: [
      "Converting sequential algorithm execution into pauseable/playable visual steps",
      "Solution: Separated algorithm logic into functions generating 'events' for each step"
    ],
    results: [
      "Valuable educational tool for students and developers",
      "Innovative custom algorithm adds research value to the graduation project"
    ]
  },
  {
    id: 2,
    title: "Driver Management & Loading System",
    subtitle: "Logistics Optimization Platform",
    description: "Web system for managing drivers, shipment schedules, and load distribution with React frontend and C# .NET backend, deployed on VPS with custom domain.",
    technologies: ["React", "C# .NET", "SQLite", "Nginx", "VPS Hosting"],
    image: project2,
    details: [
      "Login pages, admin dashboard, driver management, shipment scheduling",
      "REST APIs for drivers, shipments, tracking links, and notifications",
      "SQLite database for easy deployment (suitable for small to medium systems)",
      "VPS deployment with SSL and custom domain setup",
      "Email/SMS notifications for load assignments and status changes",
      "CSV report exports"
    ],
    challenges: [
      "Ensuring state synchronization between admin panel and driver app",
      "Handling network interruptions with offline mode and sync-on-reconnect"
    ],
    results: [
      "Reduced errors in load distribution",
      "Clear role definition for each driver",
      "User-friendly admin interface with reliable VPS deployment"
    ]
  },
  {
    id: 3,
    title: "E-Commerce Perfume Platform",
    subtitle: "Full-Stack Amazon-like Platform",
    description: "Complete e-commerce platform specializing in perfumes, built with React and Django with Tap payment gateway integration, optimized for high traffic.",
    technologies: ["React", "Django", "Python", "PostgreSQL", "Tap Payment Gateway"],
    image: project3,
    details: [
      "React with responsive design, product pages, filtering, search, cart, checkout flow",
      "Django REST Framework APIs for products, users, orders, payments",
      "PostgreSQL database (scalable)",
      "Tap payment gateway integration for secure transactions",
      "Performance optimizations: lazy loading, caching, CDN for media",
      "Security: protected endpoints, HTTPS, payment verification via webhooks",
      "Separate mobile and desktop UI experiences"
    ],
    challenges: [
      "Ensuring payment integrity and avoiding duplicate orders",
      "Handling high concurrent traffic with query optimization and pagination"
    ],
    results: [
      "Professional scalable store with secure payment flow",
      "Responsive design suitable for all devices"
    ]
  },
  {
    id: 4,
    title: "Retail Management System",
    subtitle: "Complete Retail Operations Platform",
    description: "Comprehensive system managing inventory, sales, and reports with multi-role user management (cashier, manager, admin).",
    technologies: ["C# .NET", "SQL Server", "Barcode Integration", "Crystal Reports"],
    image: project4,
    details: [
      "Modules: inventory management, items, invoices, daily sales, IFR reports, user management",
      "Database: inventory table with movements (in/out), sales records, inventory scheduling",
      "Features: barcode reader support, invoice printing, pricing and discounts",
      "Security: role-based permissions, audit logs",
      "POS integration and Excel/PDF report exports"
    ],
    challenges: [
      "Preventing inventory data loss with concurrent users",
      "Managing multi-branch operations with branch-scoped roles"
    ],
    results: [
      "System handles daily operations and improves inventory accuracy",
      "Barcode printing support and multi-branch management"
    ]
  },
  {
    id: 5,
    title: "AI Agent for Customer Interaction",
    subtitle: "Intelligent Customer Service Bot",
    description: "AI agent using NLP to respond to customer inquiries via text or voice, collecting customer information and providing context-aware responses.",
    technologies: ["Python", "NLP/LLM", "STT/TTS APIs", "PBX Integration"],
    image: project5,
    details: [
      "Components: message/call reception → STT → NLP/LLM engine → business rules → response (TTS or text)",
      "Knowledge base: FAQs, product database, company policies",
      "Integration: PBX for calls or chat widget on website",
      "Privacy: validates sensitive data before responding or escalates to human"
    ],
    challenges: [
      "Avoiding generic responses unrelated to company context",
      "Supporting multiple languages/dialects with localized training"
    ],
    results: [
      "Reduced support team load and instant customer response",
      "Automatic conversation logging and analysis for service improvement"
    ]
  },
  {
    id: 6,
    title: "Marketing Strategy Framework",
    subtitle: "80% Success Rate Marketing Plan",
    description: "Detailed marketing plan template applicable to different companies, with proven ~80% success rate based on tested conversion rates.",
    technologies: ["Google Analytics", "Meta Ads", "Email Marketing", "Content Management"],
    image: project6,
    details: [
      "Plan sections: market analysis, audience definition (personas), value propositions",
      "Marketing channels: social media, email, content, paid ads",
      "Content plan, budget, KPIs, A/B testing mechanisms",
      "Suggested tools: Google Analytics, Meta Ads, email marketing tools"
    ],
    challenges: [
      "Business nature variations affect campaign results",
      "Providing customization recommendations based on market analysis"
    ],
    results: [
      "Practical plan ready for execution for small/medium teams",
      "High success rate in tested scenarios"
    ]
  },
  {
    id: 7,
    title: "CRM Mobile App UI",
    subtitle: "Figma Design System",
    description: "Comprehensive Figma UI kit for CRM system with multiple style variations, ready for mobile development handoff.",
    technologies: ["Figma", "UI/UX Design", "Design Systems"],
    image: project7,
    details: [
      "Screens: login, dashboard, customer management, customer profile, task tracking, reports, team settings",
      "Reusable components, styles, and design system documentation",
      "Deliverables: Figma files with exportable assets (SVG/PNG) and developer specs",
      "Interactive clickable prototype"
    ],
    challenges: [
      "Designing information-dense screens without clutter",
      "Using cards, tabs, and progressive information display"
    ],
    results: [
      "Ready-to-develop files for React Native or Flutter",
      "Multiple design variations for UX testing before development"
    ]
  },
  {
    id: 8,
    title: "3D Real Estate & Villa Website",
    subtitle: "Virtual Property Tours",
    description: "3D website showcasing real estate properties with virtual tours, interactive points, and lighting effects using WebGL.",
    technologies: ["Three.js", "WebGL", "React", "3D Modeling"],
    image: project8,
    details: [
      "WebGL/Three.js for 3D rendering in browser",
      "Features: internal walkthrough, interactive info points, lighting effects, video clips",
      "Performance: reduced detail on weak devices, progressive scene loading (lazy load)",
      "Contact forms integrated with 3D experience"
    ],
    challenges: [
      "Balancing graphics quality with loading speed",
      "Using LOD (levels of detail), texture compression, and CDN"
    ],
    results: [
      "Distinctive property presentation attracting potential clients",
      "Increased site engagement duration"
    ]
  },
  {
    id: 9,
    title: "AL-MOHRA Finishing & Decoration Website",
    subtitle: "Corporate Services Website",
    description: "Company website for finishing and decoration services built with React and C# .NET, featuring portfolio gallery and bilingual support.",
    technologies: ["React", "C# .NET", "SQL Server", "SEO"],
    image: project9,
    details: [
      "Pages: about us, services, portfolio gallery, quote request form, contact",
      "Simple CMS dashboard for adding projects and images",
      "Responsive design with bilingual support (Arabic/English)",
      "SEO optimization: meta tags, sitemap, structured content"
    ],
    challenges: [
      "Displaying high-quality images without slowing website",
      "Image compression and lazy-loading with Lightbox"
    ],
    results: [
      "Professional website reflecting company image",
      "Increased contact inquiries and quote requests"
    ]
  },
  {
    id: 10,
    title: "Transportation Management System",
    subtitle: "Syrian Transport Company Solution",
    description: "Custom system for Syrian transport company organizing driver routes, role distribution, and preventing scheduling conflicts.",
    technologies: ["React", "C# .NET", "SQLite", "Real-time Notifications"],
    image: project10,
    details: [
      "Driver pages: daily route display, status messages, modification notifications",
      "Admin dashboard: assign drivers to routes, modify rotation, manage shifts",
      "Tracking: trip status (pending, in-progress, done) and start/arrival locations",
      "Reports: driver performance, delays, trip counts",
      "Technology: React frontend, C# .NET API, SQLite database"
    ],
    challenges: [
      "Fair automatic rotation distribution with exception handling",
      "Algorithm considering last rotation, expected time, and driver history"
    ],
    results: [
      "Reduced trip distribution confusion",
      "Improved admin-driver communication",
      "Increased driver schedule compliance"
    ]
  },
  {
    id: 11,
    title: "International Fleet Bus Rental",
    subtitle: "Modern Bilingual Bus Rental Platform",
    description: "A modern, responsive website for International Fleet Bus Rental company in Rusaifah, Jordan. Features bilingual interface (Arabic/English), contemporary design, dark mode support, and comprehensive bus rental services for corporate, domestic, and international trips.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI", "TanStack Query", "React Router"],
    image: project11,
    details: [
      "Fully responsive design with mobile-first approach and beautiful UI using Tailwind CSS",
      "Complete bilingual support (Arabic/English) with RTL/LTR switching",
      "Dark mode support with seamless theme switching",
      "Four main service categories: Corporate Transport, Domestic Trips, International Trips, and Private Rentals",
      "Interactive contact cards with hover effects and dynamic animations",
      "Performance optimized with Vite build system and lazy loading",
      "Services gallery with overlay effects and smooth animations",
      "Accessibility features following modern web standards",
      "Rain particle animations in about section for enhanced visual appeal"
    ],
    challenges: [
      "Implementing seamless bilingual experience with proper RTL support for Arabic",
      "Optimizing performance for mobile devices while maintaining rich animations",
      "Creating accessible dark mode that works across all components"
    ],
    results: [
      "Professional bilingual website attracting both local and international clients",
      "Enhanced user engagement with interactive UI elements and smooth animations",
      "Improved mobile experience with optimized performance",
      "Increased quote requests through intuitive contact forms"
    ]
  },
  {
    id: 12,
    title: "Alternative Energy Summit & Awards 2026",
    subtitle: "Conference & Awards Website - Dubai, UAE",
    description: "A professional, modern website for the Alternative Energy Summit & Awards 2026 in Dubai. Showcases full conference details, animated statistics, sponsors, awards categories, and a complete registration flow.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI", "Framer Motion", "React Router"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop&q=80",
    details: [
      "Home: Hero with event title/date, animated stats (e.g., 800+ attendees, 65+ speakers), sponsors marquee",
      "Expected Participation: large counters with icons, clean responsive layout",
      "Who Will Attend: interactive company logo circles with info on click",
      "Job Titles Expected: dual auto-scrolling marquees for targeted roles",
      "Who Should Sponsor: tilted sponsor-type cards with hover effects",
      "Ideal Sponsors: moving marquee of ideal sponsor logos",
      "Video Section: muted background video overlayed with auto-incrementing KPIs",
      "Happenings: 2-day agenda schedule and upcoming initiatives",
      "Speakers & Partners: structured sections (Coming Soon) ready for data",
      "Awards: categorized sections (Individual, Private, Public, Project Awards) with clear CTAs",
      "Register: full attendee form (personal/company info, interests) with validation"
    ],
    challenges: [
      "Designing rich animations and marquees without hurting performance across devices",
      "Maintaining accessibility and SEO while using heavy visual effects",
      "Structuring content for future data integrations (speakers, partners, agenda)"
    ],
    results: [
      "Polished conference presence with clear information architecture",
      "High engagement via interactive sections and smooth motion design",
      "Scalable foundation for content updates and sponsor onboarding"
    ]
  },
  {
    id: 13,
    title: "Applkanji Company System",
    subtitle: "Complete Integrated Company Platform",
    description: "A comprehensive full-stack system for Applkanji company with complete custom design from scratch, featuring all company operations and management modules.",
    technologies: ["React", "TypeScript", "C# .NET", "SQL Server", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
    details: [
      "Complete custom design and UI/UX from scratch",
      "Full-stack application with React frontend and C# .NET backend",
      "Comprehensive company management modules",
      "User-friendly interface with modern design principles",
      "Responsive design for all devices"
    ],
    challenges: [
      "Creating a cohesive design system from scratch",
      "Integrating multiple modules into a unified platform"
    ],
    results: [
      "Professional company system with custom design",
      "Improved operational efficiency and user experience"
    ]
  },
  {
    id: 14,
    title: "Domestic Workers Management System",
    subtitle: "Mobile App & Web Dashboard",
    description: "Complete mobile application for domestic workers (housekeeping services) management system with a beautiful web dashboard for administration and monitoring.",
    technologies: ["React Native", "React", "C# .NET", "SQL Server", "Mobile App"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&q=80",
    details: [
      "Mobile application for workers and clients",
      "Beautiful web dashboard for administration",
      "Worker scheduling and assignment management",
      "Real-time tracking and status updates",
      "Payment and billing integration",
      "Rating and review system"
    ],
    challenges: [
      "Synchronizing data between mobile app and web dashboard",
      "Creating intuitive mobile UX for workers"
    ],
    results: [
      "Streamlined domestic services management",
      "Improved client satisfaction and worker efficiency"
    ]
  },
  {
    id: 15,
    title: "Inventory Management System",
    subtitle: "Mobile App & Web Dashboard",
    description: "Complete inventory management system with mobile application and comprehensive web dashboard for tracking, managing, and reporting on product inventory.",
    technologies: ["React Native", "React", "C# .NET", "SQL Server", "Barcode Scanner"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&q=80",
    details: [
      "Mobile app for inventory scanning and updates",
      "Web dashboard for comprehensive inventory management",
      "Barcode scanning and QR code support",
      "Real-time inventory tracking",
      "Stock alerts and notifications",
      "Comprehensive reporting and analytics",
      "Multi-warehouse support"
    ],
    challenges: [
      "Real-time synchronization between mobile and web",
      "Handling large inventory datasets efficiently"
    ],
    results: [
      "Accurate inventory tracking and reduced stockouts",
      "Improved operational efficiency"
    ]
  },
  {
    id: 16,
    title: "Student & Teacher Management System",
    subtitle: "Educational Platform with Quizzes",
    description: "Complete educational system where teachers can assign quizzes and study materials to students, with admin panel for oversight and management.",
    technologies: ["React", "C# .NET", "SQL Server", "Educational Platform"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop&q=80",
    details: [
      "Teacher dashboard for creating quizzes and assignments",
      "Student portal for accessing materials and taking quizzes",
      "Admin panel for system oversight and user management",
      "Quiz creation and grading system",
      "Study materials distribution",
      "Progress tracking and analytics",
      "Notification system for assignments and deadlines"
    ],
    challenges: [
      "Creating intuitive quiz creation interface",
      "Managing student progress and performance data"
    ],
    results: [
      "Streamlined educational workflow",
      "Improved student engagement and teacher efficiency"
    ]
  },
  {
    id: 17,
    title: "Portfolio Websites Collection",
    subtitle: "Personal Portfolio Websites",
    description: "Multiple professional portfolio websites created for various individuals, showcasing their work, skills, and achievements with modern, responsive designs.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Portfolio Design"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop&q=80",
    details: [
      "Custom portfolio designs for multiple clients",
      "Responsive and modern UI/UX",
      "Project showcases and galleries",
      "Contact forms and social media integration",
      "SEO optimization",
      "Fast loading and performance optimized"
    ],
    challenges: [
      "Creating unique designs for each portfolio",
      "Balancing creativity with professional presentation"
    ],
    results: [
      "Professional online presence for clients",
      "Increased visibility and opportunities"
    ]
  },
  {
    id: 18,
    title: "Ansam Company Website",
    subtitle: "Professional Corporate Website",
    description: "Professional corporate website for Ansam company featuring company information, services, portfolio, and contact details with modern design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Corporate Design"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&q=80",
    details: [
      "Professional corporate design",
      "Company services and portfolio showcase",
      "About us and team sections",
      "Contact forms and location integration",
      "Responsive design for all devices",
      "SEO optimized"
    ],
    challenges: [
      "Creating professional corporate identity",
      "Showcasing company value proposition effectively"
    ],
    results: [
      "Enhanced company online presence",
      "Increased brand recognition and inquiries"
    ]
  },
  {
    id: 19,
    title: "Multi-Company Accounting System",
    subtitle: "Enterprise Accounting Platform",
    description: "Complete accounting system designed to handle multiple companies, featuring comprehensive financial management, reporting, and multi-tenant architecture.",
    technologies: ["C# .NET", "SQL Server", "React", "Accounting Software"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop&q=80",
    details: [
      "Multi-company/tenant architecture",
      "Complete accounting modules (General Ledger, Accounts Payable/Receivable)",
      "Financial reporting and analytics",
      "Invoice management and generation",
      "Expense tracking and categorization",
      "User role management per company",
      "Data isolation and security between companies"
    ],
    challenges: [
      "Implementing secure multi-tenant architecture",
      "Handling complex accounting calculations and validations"
    ],
    results: [
      "Efficient accounting management for multiple companies",
      "Accurate financial reporting and compliance"
    ]
  },
  {
    id: 20,
    title: "Car Garage Management System",
    subtitle: "Automotive Service & Repair Tracking",
    description: "Complete system for car garages to track vehicle repairs, missing parts, entry/exit times, and service history for each vehicle.",
    technologies: ["React", "C# .NET", "SQL Server", "Mobile App"],
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop&q=80",
    details: [
      "Vehicle entry and exit tracking",
      "Service history and repair records",
      "Parts inventory and missing parts tracking",
      "Customer management and vehicle profiles",
      "Service estimates and invoicing",
      "Technician assignment and workflow",
      "Status tracking (in-progress, completed, waiting for parts)"
    ],
    challenges: [
      "Tracking complex repair workflows",
      "Managing parts inventory and availability"
    ],
    results: [
      "Improved garage operations efficiency",
      "Better customer service and transparency"
    ]
  },
  {
    id: 21,
    title: "Dakakin Baladna Palestinian Event",
    subtitle: "Event Website - Palestinian Shops",
    description: "Professional event website for 'Dakakin Baladna' Palestinian event showcasing local shops, vendors, and event information.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Event Website"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop&q=80",
    details: [
      "Event information and schedule",
      "Vendor and shop showcase",
      "Interactive event map",
      "Registration and ticketing",
      "Social media integration",
      "Responsive design for mobile and desktop"
    ],
    challenges: [
      "Showcasing multiple vendors effectively",
      "Creating engaging event presentation"
    ],
    results: [
      "Successful event promotion and engagement",
      "Increased event attendance and vendor visibility"
    ]
  }
];
