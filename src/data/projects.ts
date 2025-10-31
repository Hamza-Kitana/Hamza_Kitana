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
  }
];
