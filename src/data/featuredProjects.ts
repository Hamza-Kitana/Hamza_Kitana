import { loc, locList, type LocalizedString, type LocalizedList } from '@/lib/localized';

export type ProjectCategory = 'featured' | 'erp';

export interface Project {
  id: number;
  category?: ProjectCategory;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  technologies: string[];
  details: LocalizedList;
  challenges: LocalizedList;
  results: LocalizedList;
  image: string;
}

export const featuredProjects: Project[] = [
  {
    id: 22,
    category: 'featured',
    title: loc('Infinity FiveM Server Platform', 'منصة سيرفر Infinity FiveM'),
    subtitle: loc('Discord Login • Live Support • Smart Ticket System', 'تسجيل Discord • دعم مباشر • نظام تذاكر ذكي'),
    description: loc(
      'A professional FiveM server platform where users sign in via Discord. Features a complete admin panel, live chat with SweetAlert, support communication, and deep Discord integration — when a player applies for electronics and gets accepted, they automatically receive the role on the Infinity Discord server. Opening a ticket on the website triggers a polished, automated workflow.',
      'منصة احترافية لسيرفر FiveM حيث يسجّل اللاعبون عبر Discord. تشمل لوحة إدارة كاملة، شات مباشر بتصميم SweetAlert، تواصل مع الدعم، وربط عميق مع Discord — عند تقديم طلب إلكترونيات والقبول، يحصل اللاعب تلقائياً على الرول في سيرفر Infinity. فتح تذكرة من الموقع يفعّل سير عمل احترافي وآلي.'
    ),
    technologies: ['React', 'C# .NET', 'SQL Server', 'Discord OAuth', 'SweetAlert2', 'Live Chat', 'FiveM'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop&q=80',
    details: locList(
      [
        'Discord OAuth login for FiveM players with secure session management',
        'Full admin dashboard for users, applications, roles, and server settings',
        'Live chat system with SweetAlert for a polished, modern UX',
        'Support ticket system — tickets open automatically with professional workflow',
        'Discord bot integration: auto-assign roles when electronics applications are approved',
        'Real-time sync between website actions and Infinity Discord server',
        'C# .NET REST API with SQL Server for reliable data persistence',
      ],
      [
        'تسجيل دخول عبر Discord OAuth للاعبين FiveM مع إدارة جلسات آمنة',
        'لوحة إدارة كاملة للمستخدمين والطلبات والرولات وإعدادات السيرفر',
        'نظام شات مباشر مع SweetAlert لتجربة مستخدم عصرية وأنيقة',
        'نظام تذاكر دعم — تفتح تلقائياً بسير عمل احترافي',
        'ربط Discord Bot: منح الرول تلقائياً عند قبول طلبات الإلكترونيات',
        'مزامنة فورية بين إجراءات الموقع وسيرفر Infinity على Discord',
        'REST API بـ C# .NET مع SQL Server لتخزين موثوق للبيانات',
      ]
    ),
    challenges: locList(
      [
        'Syncing website events with Discord roles and channels in real time',
        'Solution: Webhook + bot architecture with idempotent role assignment and retry logic',
      ],
      [
        'مزامنة أحداث الموقع مع رولات وقنوات Discord لحظياً',
        'الحل: بنية Webhook + Bot مع منح رولات Idempotent ومنطق إعادة المحاولة',
      ]
    ),
    results: locList(
      [
        'Seamless player onboarding from website to Discord server',
        'Professional support experience with live chat and structured tickets',
        'Reduced manual admin work through automated role and ticket handling',
      ],
      [
        'انضمام سلس للاعبين من الموقع إلى سيرفر Discord',
        'تجربة دعم احترافية مع شات مباشر وتذاكر منظمة',
        'تقليل العمل اليدوي للإدارة عبر أتمتة الرولات والتذاكر',
      ]
    ),
  },
  {
    id: 23,
    category: 'featured',
    title: loc('Al-Manal Ice Cream Shop POS', 'كاش محل المنال للبوظة'),
    subtitle: loc('Live Production System • Ice Cream Retail', 'نظام لايف • تجزئة بوظة'),
    description: loc(
      'A complete, professional point-of-sale system built for Al-Manal ice cream shop. Currently live and in daily use — handling sales, inventory, and shop operations with a clean, organized interface.',
      'نظام كاش كامل واحترافي لمحل المنال للبوظة. يعمل حالياً بشكل يومي — يدير المبيعات والمخزون وعمليات المحل بواجهة مرتبة وواضحة.'
    ),
    technologies: ['React', 'C# .NET', 'SQLite', 'POS System'],
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1200&h=800&fit=crop&q=80',
    details: locList(
      [
        'Fast POS checkout flow optimized for ice cream retail',
        'Product and flavor management with real-time stock tracking',
        'Daily sales reports and shift summaries',
        'C# .NET backend with SQLite for lightweight, reliable deployment',
        'Clean UI designed for staff efficiency during peak hours',
      ],
      [
        'تدفق كاش سريع مُحسّن لتجزئة البوظة',
        'إدارة المنتجات والنكهات مع تتبع مخزون لحظي',
        'تقارير مبيعات يومية وملخصات الورديات',
        'Backend بـ C# .NET مع SQLite لنشر خفيف وموثوق',
        'واجهة واضحة مصممة لكفاءة الموظفين في أوقات الذروة',
      ]
    ),
    challenges: locList(
      [
        'Designing a simple interface for non-technical shop staff',
        'Solution: Large touch-friendly buttons, minimal steps per sale, offline-capable SQLite',
      ],
      [
        'تصميم واجهة بسيطة لموظفين غير تقنيين',
        'الحل: أزرار كبيرة سهلة اللمس، خطوات قليلة لكل عملية بيع، SQLite يعمل بدون اتصال',
      ]
    ),
    results: locList(
      [
        'System is live and actively used by Al-Manal shop daily',
        'Organized sales tracking and faster checkout process',
        'Reliable local deployment with minimal maintenance',
      ],
      [
        'النظام لايف ويُستخدم يومياً في محل المنال',
        'تتبع مبيعات منظم وعملية دفع أسرع',
        'نشر محلي موثوق مع صيانة minimal',
      ]
    ),
  },
  {
    id: 24,
    category: 'featured',
    title: loc('Supermarket POS & Management', 'كاش السوبرماركت وإدارة الموظفين'),
    subtitle: loc('Invoices • Returns • Employee Management', 'فواتير • مرتجعات • إدارة موظفين'),
    description: loc(
      'A professional supermarket cash register system with full employee management, invoice handling, and return processing. Complete backend and database architecture built for retail operations.',
      'نظام كاش سوبرماركت احترافي مع إدارة كاملة للموظفين والفواتير ومعالجة المرتجعات. Backend وقاعدة بيانات متكاملة لعمليات التجزئة.'
    ),
    technologies: ['React', 'C# .NET', 'SQL Server', 'POS', 'Barcode'],
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1200&h=800&fit=crop&q=80',
    details: locList(
      [
        'POS checkout with barcode scanning and multi-payment support',
        'Employee management: roles, shifts, permissions, and performance logs',
        'Invoice generation, printing, and full return/refund workflow',
        'Inventory sync with sales in real time',
        'Admin dashboard for reports, staff, and store configuration',
      ],
      [
        'كاش مع مسح باركود ودعم طرق دفع متعددة',
        'إدارة موظفين: رولات، ورديات، صلاحيات، وسجل أداء',
        'إنشاء وطباعة فواتير وسير عمل كامل للمرتجعات',
        'مزامنة المخزون مع المبيعات لحظياً',
        'لوحة إدارة للتقارير والموظفين وإعدادات المتجر',
      ]
    ),
    challenges: locList(
      [
        'Handling concurrent sales and returns without inventory conflicts',
        'Solution: Transaction-based stock updates with audit trail per employee',
      ],
      [
        'التعامل مع مبيعات ومرتجعات متزامنة بدون تعارض في المخزون',
        'الحل: تحديث مخزون Transaction-based مع سجل تدقيق لكل موظف',
      ]
    ),
    results: locList(
      [
        'Streamlined supermarket operations with clear staff accountability',
        'Professional invoice and return handling reducing disputes',
        'Real-time inventory visibility for managers',
      ],
      [
        'تبسيط عمليات السوبرماركت مع مساءلة واضحة للموظفين',
        'معالجة احترافية للفواتير والمرتجعات وتقليل النزاعات',
        'رؤية مخزون لحظية للمديرين',
      ]
    ),
  },
  {
    id: 26,
    category: 'featured',
    title: loc('Premium Car Dealership Website', 'موقع تعريفي لشركة سيارات'),
    subtitle: loc('3D Animation • Stunning Visual Experience', 'أنيميشن 3D • تجربة بصرية مميزة'),
    description: loc(
      'An elegant corporate website for a car company featuring stunning Three.js 3D animations, smooth transitions, and a premium brand presentation that captivates visitors.',
      'موقع تعريفي أنيق لشركة سيارات مع أنيميشن Three.js 3D مبهر، انتقالات سلسة، وعرض علامة تجارية premium يجذب الزوار.'
    ),
    technologies: ['React', 'Three.js', 'WebGL', 'Framer Motion', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop&q=80',
    details: locList(
      [
        'Three.js 3D car showcase with interactive camera controls',
        'Smooth page transitions and scroll-triggered animations',
        'Vehicle catalog with specs, gallery, and inquiry forms',
        'Performance-optimized 3D assets with progressive loading',
        'Responsive design maintaining visual impact on all devices',
      ],
      [
        'عرض سيارات 3D بـ Three.js مع تحكم تفاعلي بالكاميرا',
        'انتقالات صفحات سلسة وأنيميشن يُفعّل بالسكرول',
        'كتalog مركبات مع مواصفات ومعرض ونماذج استفسار',
        'أصول 3D محسّنة للأداء مع تحميل تدريجي',
        'تصميم متجاوب يحافظ على التأثير البصري على كل الأجهزة',
      ]
    ),
    challenges: locList(
      [
        'Balancing heavy 3D visuals with fast load times',
        'Solution: LOD models, compressed textures, and lazy scene initialization',
      ],
      [
        'موازنة visuals 3D الثقيلة مع سرعة التحميل',
        'الحل: نماذج LOD، textures مضغوطة، وتهيئة المشهد بـ lazy loading',
      ]
    ),
    results: locList(
      [
        'Premium brand image that stands out in the automotive market',
        'High visitor engagement through immersive 3D experience',
        'Increased inquiries through polished contact flows',
      ],
      [
        'صورة علامة تجارية premium تميز الشركة في سوق السيارات',
        'تفاعل عالٍ للزوار عبر تجربة 3D غامرة',
        'زيادة الاستفسارات عبر مسارات تواصل مصقولة',
      ]
    ),
  },
  {
    id: 27,
    category: 'featured',
    title: loc('Footwear Brand Website', 'موقع شركة أحذية'),
    subtitle: loc('Scroll Animations • Interactive 3D', 'أنيميشن مع السكرول • 3D تفاعلي'),
    description: loc(
      'A highly professional footwear company website with scroll-driven animations and Three.js 3D effects that move dynamically as users explore the page — elegant, modern, and brand-forward.',
      'موقع احترافي لشركة أحذية مع أنيميشن يتحرك مع السكرول وتأثيرات Three.js 3D ديناميكية أثناء تصفح الصفحة — أنيق، عصري، ويعكس الهوية.'
    ),
    technologies: ['React', 'Three.js', 'GSAP', 'Framer Motion', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&h=800&fit=crop&q=80',
    details: locList(
      [
        'Scroll-linked animations that reveal products and brand story',
        'Interactive 3D shoe models rotating and responding to scroll position',
        'Collection pages with smooth parallax and hover micro-interactions',
        'Mobile-optimized animation performance',
        'Clean e-commerce-ready product presentation',
      ],
      [
        'أنيميشن مرتبط بالسكرول يكشف المنتجات وقصة العلامة',
        'نماذج أحذية 3D تفاعلية تدور وتستجيب لموقع السكرول',
        'صفحات مجموعات مع parallax سلس وتفاعلات hover دقيقة',
        'أداء أنيميشن محسّن للموبايل',
        'عرض منتجات جاهز للتجارة الإلكترونية',
      ]
    ),
    challenges: locList(
      [
        'Synchronizing scroll position with 3D model transforms smoothly',
        'Solution: RequestAnimationFrame-based scroll listeners with eased interpolation',
      ],
      [
        'مزامنة موقع السكرول مع تحويلات نموذج 3D بسلاسة',
        'الحل: مستمعات scroll بـ RequestAnimationFrame مع interpolation ناعم',
      ]
    ),
    results: locList(
      [
        'Memorable brand website that feels alive on scroll',
        'Strong visual differentiation in the footwear market',
        'Increased time-on-site and product interest',
      ],
      [
        'موقع علامة تجارية لا يُنسى يبدو حياً مع السكرول',
        'تمييز بصري قوي في سوق الأحذية',
        'زيادة وقت البقاء والاهتمام بالمنتجات',
      ]
    ),
  },
  {
    id: 28,
    category: 'featured',
    title: loc('Government Clinic Appointment App', 'تطبيق حجز العيادات الحكومية'),
    subtitle: loc('High-Volume Booking • Smooth UX', 'حجز بكميات كبيرة • تجربة سلسة'),
    description: loc(
      'A government healthcare appointment booking application for public clinics — designed to handle large user volumes smoothly, with an intuitive flow for patients booking clinic visits.',
      'تطبيق حكومي لحجز المواعيد في العيادات العامة — مصمم لاستيعاب أعداد كبيرة من المستخدمين بسلاسة، مع مسار بديهي للمرضى لحجز الزيارات.'
    ),
    technologies: ['React', 'C# .NET', 'SQL Server', 'Mobile-First', 'Government'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&q=80',
    details: locList(
      [
        'Patient registration and clinic selection by region/specialty',
        'Real-time slot availability with conflict prevention',
        'Appointment confirmation, reminders, and cancellation flow',
        'Admin panel for clinics to manage schedules and capacity',
        'Architecture optimized for concurrent bookings at scale',
      ],
      [
        'تسجيل المرضى واختيار العيادة حسب المنطقة/التخصص',
        'توفر المواعيد لحظياً مع منع التعارض',
        'تأكيد المواعيد وتذكيرات وإلغاء',
        'لوحة إدارة للعيادات لإدارة الجداول والسعة',
        'بنية محسّنة للحجز المتزامن على نطاق واسع',
      ]
    ),
    challenges: locList(
      [
        'Preventing double-bookings under high concurrent load',
        'Solution: Database-level slot locking with optimistic concurrency and queue fallback',
      ],
      [
        'منع الحجز المزدوج تحت حمل متزامن عالٍ',
        'الحل: قفل slots على مستوى قاعدة البيانات مع Optimistic Concurrency وqueue احتياطي',
      ]
    ),
    results: locList(
      [
        'Smooth booking experience even during peak demand',
        'Reduced clinic front-desk congestion',
        'Reliable system trusted for public healthcare access',
      ],
      [
        'تجربة حجز سلسة حتى في أوقات الذروة',
        'تقليل ازدحام استقبال العيادات',
        'نظام موثوق للوصول للرعاية الصحية العامة',
      ]
    ),
  },
  {
    id: 29,
    category: 'featured',
    title: loc('Barber Shop Booking Platform', 'موقع حجز للحلاقين'),
    subtitle: loc('Smart Scheduling • Elegant & Useful', 'جدولة ذكية • أنيق ومفيد'),
    description: loc(
      'A clean, elegant booking website for barbershops — helping customers find available barbers, see open time slots, and book appointments easily when they don\'t know who is free or when to visit.',
      'موقع حجز أنيق ومرتب للحلاقين — يساعد الزبائن على إيجاد حلاق متاح، رؤية الأوقات الفارغة، وحجز موعد بسهولة عندما لا يعرفون من متاح أو متى يزورون.'
    ),
    technologies: ['React', 'C# .NET', 'SQL Server', 'Booking System'],
    image: '/projects/project-barber.jpg',
    details: locList(
      [
        'Barber profiles with availability calendar per stylist',
        'Customer booking flow: pick barber or "any available" + time slot',
        'Shop owner dashboard to manage staff schedules and bookings',
        'SMS/email reminders for upcoming appointments',
        'Clean, mobile-first UI designed for quick booking',
      ],
      [
        'ملفات حلاقين مع تقويم توفر لكل stylist',
        'مسار حجز: اختيار حلاق أو "أي متاح" + وقت',
        'لوحة صاحب المحل لإدارة جداول الموظفين والحجوزات',
        'تذكيرات SMS/Email للمواعيد القادمة',
        'واجهة mobile-first نظيفة للحجز السريع',
      ]
    ),
    challenges: locList(
      [
        'Showing real availability across multiple barbers without confusion',
        'Solution: Unified slot engine with per-barber calendars and smart "next available" suggestions',
      ],
      [
        'عرض التوفر الحقيقي عبر عدة حلاقين بدون لبس',
        'الحل: محرك slots موحد مع تقاويم لكل حلاق واقتراحات "أقرب موعد متاح"',
      ]
    ),
    results: locList(
      [
        'Customers book confidently without calling the shop',
        'Reduced no-shows with automated reminders',
        'Barbers manage their schedule efficiently from one dashboard',
      ],
      [
        'الزبائن يحجزون بثقة بدون الاتصال بالمحل',
        'تقليل الغياب مع تذكيرات آلية',
        'الحلاقون يديرون جداولهم بكفاءة من لوحة واحدة',
      ]
    ),
  },
  {
    id: 35,
    category: 'featured',
    title: loc('Website Admin Control Panel', 'لوحة تحكم شاملة للموقع'),
    subtitle: loc('CMS Dashboard • Control Everything From One Place', 'داشبورد CMS • تحكم بكل شيء من مكان واحد'),
    description: loc(
      'A complete website control system — one admin dashboard to manage your entire site: pages, content, images, menus, banners, SEO, users, and settings. Update what visitors see without touching code.',
      'نظام تحكم كامل بالموقع — داشبورد إدارة واحد يدير كل شيء: الصفحات، المحتوى، الصور، القوائم، البanners، SEO، المستخدمين، والإعدادات. عدّل ما يراه الزوار بدون لمس الكود.'
    ),
    technologies: ['React', 'C# .NET', 'SQL Server', 'CMS', 'Role-Based Access', 'REST API'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
    details: locList(
      [
        'Central dashboard with overview of site traffic, content status, and recent changes',
        'Page & section builder — edit hero, about, services, gallery, and footer content live',
        'Media library for uploading, organizing, and reusing images and files',
        'Menu, banner, and CTA management with drag-and-drop ordering',
        'SEO settings per page: titles, meta descriptions, Open Graph, and slugs',
        'Role-based access: super admin, editor, and viewer permissions',
        'Multi-language content management for Arabic and English pages',
        'Site-wide settings: branding, colors, contact info, social links, and maintenance mode',
      ],
      [
        'داشبورد مركزي يعرض زيارات الموقع، حالة المحتوى، وآخر التعديلات',
        'محرر صفحات وأقسام — تعديل Hero، About، الخدمات، المعرض، والتذييل مباشرة',
        'مكتبة وسائط لرفع وتنظيم وإعادة استخدام الصور والملفات',
        'إدارة القوائم والـ banners وأزرار CTA مع ترتيب بالسحب والإفلات',
        'إعدادات SEO لكل صفحة: العناوين، الوصف، Open Graph، والـ slugs',
        'صلاحيات حسب الدور: super admin، محرر، ومشاهد',
        'إدارة محتوى متعدد اللغات للصفحات العربية والإنجليزية',
        'إعدادات عامة: الهوية، الألوان، التواصل، روابط السوشال، ووضع الصيانة',
      ]
    ),
    challenges: locList(
      [
        'Keeping the public site in sync with admin changes without redeploying',
        'Solution: Headless CMS API with cache invalidation and real-time preview before publish',
      ],
      [
        'إبقاء الموقع العام متزامناً مع تعديلات الإدارة بدون إعادة نشر',
        'الحل: Headless CMS API مع إبطال cache ومعاينة مباشرة قبل النشر',
      ]
    ),
    results: locList(
      [
        'Site owners update content independently — no developer needed for daily changes',
        'Consistent branding and structure across all pages from one control panel',
        'Faster content updates with preview, publish, and rollback workflow',
      ],
      [
        'أصحاب المواقع يحدّثون المحتوى بأنفسهم — بدون مطوّر للتعديلات اليومية',
        'هوية وهيكل متسقان عبر كل الصفحات من لوحة تحكم واحدة',
        'تحديثات محتوى أسرع مع معاينة، نشر، وإمكانية الرجوع للنسخة السابقة',
      ]
    ),
  },
  {
    id: 30,
    category: 'erp',
    title: loc('Complete Accounting System', 'نظام Accounting كامل'),
    subtitle: loc('ERP Module • Professional & Seamless', 'وحدة ERP • احترافي وسلس'),
    description: loc(
      'A full accounting module as part of the ERP suite — general ledger, journal entries, financial reports, and multi-account management with a professional, smooth user experience.',
      'وحدة محاسبة كاملة ضمن مجموعة ERP — دفتر أستاذ، قيود يومية، تقارير مالية، وإدارة حسابات متعددة بتجربة احترافية وسلسة.'
    ),
    technologies: ['C# .NET', 'SQL Server', 'React', 'ERP', 'Accounting'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop&q=80',
    details: locList(
      [
        'General ledger, chart of accounts, and journal entry management',
        'Automated financial reports: balance sheet, P&L, cash flow',
        'Multi-currency and multi-branch accounting support',
        'Audit trail for every financial transaction',
        'Clean dashboards with real-time financial KPIs',
      ],
      [
        'دفتر أستاذ، شجرة حسابات، وإدارة قيود يومية',
        'تقارير مالية آلية: ميزانية، أرباح وخسائر، تدفق نقدي',
        'دعم عملات متعددة وفروع متعددة',
        'سجل تدقيق لكل معاملة مالية',
        'لوحات KPIs مالية لحظية',
      ]
    ),
    challenges: locList(
      [
        'Ensuring accounting accuracy with complex business rules',
        'Solution: Double-entry validation, period locking, and reconciliation workflows',
      ],
      [
        'ضمان دقة المحاسبة مع قواعد أعمال معقدة',
        'الحل: التحقق من القيد المزدوج، قفل الفترات، وسير عمل المطابقة',
      ]
    ),
    results: locList(
      [
        'Accurate, audit-ready financial records',
        'Faster month-end closing with automated reports',
        'Professional accounting workflow for any business size',
      ],
      [
        'سجلات مالية دقيقة جاهزة للتدقيق',
        'إغلاق شهري أسرع مع تقارير آلية',
        'سير عمل محاسبي احترافي لأي حجم أعمال',
      ]
    ),
  },
  {
    id: 31,
    category: 'erp',
    title: loc('Customizable CRM System', 'نظام CRM كامل'),
    subtitle: loc('ERP Module • Fully Customizable', 'وحدة ERP • قابل للتخصيص بالكامل'),
    description: loc(
      'A complete, smooth CRM system that clients can customize to fit their workflow — contacts, pipelines, deals, tasks, and reporting tailored exactly how they need it.',
      'نظام CRM كامل وسلس يمكن للعملاء تخصيصه حسب سير عملهم — جهات اتصال، pipelines، صفقات، مهام، وتقارير بالشكل الذي يريدونه.'
    ),
    technologies: ['C# .NET', 'SQL Server', 'React', 'ERP', 'CRM'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
    details: locList(
      [
        'Contact and lead management with custom fields',
        'Configurable sales pipelines and deal stages',
        'Task assignment, follow-ups, and activity timeline',
        'Custom reports and dashboard widgets',
        'Role-based access with team collaboration tools',
      ],
      [
        'إدارة جهات اتصال وLeads مع حقول مخصصة',
        'Sales pipelines ومراحل صفقات قابلة للضبط',
        'تعيين مهام، متابعات، وخط زمني للنشاط',
        'تقارير مخصصة وwidgets للوحة',
        'صلاحيات حسب الرول مع أدوات تعاون الفريق',
      ]
    ),
    challenges: locList(
      [
        'Building flexibility without overwhelming non-technical users',
        'Solution: Template-based customization with sensible defaults and guided setup',
      ],
      [
        'بناء مرونة بدون إرباك المستخدمين غير التقنيين',
        'الحل: تخصيص قائم على قوالب مع defaults منطقية وإعداد موجّه',
      ]
    ),
    results: locList(
      [
        'CRM adapted to each client\'s unique sales process',
        'Improved lead conversion with structured follow-ups',
        'Single source of truth for all customer interactions',
      ],
      [
        'CRM مُكيّف لعملية مبيعات كل عميل',
        'تحسين تحويل Leads مع متابعات منظمة',
        'مصدر واحد للحقيقة لكل تفاعلات العملاء',
      ]
    ),
  },
  {
    id: 32,
    category: 'erp',
    title: loc('HR Management System', 'نظام HR'),
    subtitle: loc('ERP Module • Simple & Clear', 'وحدة ERP • بسيط وواضح'),
    description: loc(
      'An HR module designed to be intuitive and easy to understand — employee records, leave management, attendance, and org structure without unnecessary complexity.',
      'وحدة HR مصممة لتكون بديهية وسهلة الفهم — سجلات موظفين، إجازات، حضور، وهيكل تنظيمي بدون تعقيد غير ضروري.'
    ),
    technologies: ['C# .NET', 'SQL Server', 'React', 'ERP', 'HR'],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop&q=80',
    details: locList(
      [
        'Employee profiles, documents, and contract management',
        'Leave requests and approval workflow',
        'Attendance tracking and shift scheduling',
        'Department and reporting structure visualization',
        'Simple UI focused on clarity over complexity',
      ],
      [
        'ملفات موظفين، مستندات، وإدارة عقود',
        'طلبات إجازة وسير موافقة',
        'تتبع حضور وجدولة ورديات',
        'عرض الهيكل التنظيمي والإدارات',
        'واجهة بسيطة تركّز على الوضوح',
      ]
    ),
    challenges: locList(
      [
        'Making HR processes accessible to HR staff without technical training',
        'Solution: Step-by-step wizards, plain-language labels, and contextual help',
      ],
      [
        'جعل عمليات HR متاحة لموظفي HR بدون تدريب تقني',
        'الحل: معالجات خطوة بخطوة، تسميات واضحة، ومساعدة سياقية',
      ]
    ),
    results: locList(
      [
        'HR team adopts the system quickly with minimal training',
        'Centralized employee data replacing scattered spreadsheets',
        'Clear leave and attendance visibility for managers',
      ],
      [
        'فريق HR يتبنى النظام بسرعة بتدريب minimal',
        'بيانات موظفين مركزية بدل جداول متفرقة',
        'رؤية واضحة للإجازات والحضور للمديرين',
      ]
    ),
  },
  {
    id: 33,
    category: 'erp',
    title: loc('Live Payroll System', 'نظام Payroll'),
    subtitle: loc('ERP Module • Real-Time Performance', 'وحدة ERP • أداء لحظي'),
    description: loc(
      'A complete, integrated payroll system with live-time updates — whatever happens with employee performance, attendance, or deductions reflects immediately on the system.',
      'نظام Payroll كامل ومتكامل مع تحديثات لحظية — أي تغيير في أداء الموظف أو حضوره أو خصوماته ينعكس فوراً على النظام.'
    ),
    technologies: ['C# .NET', 'SQL Server', 'React', 'ERP', 'Payroll'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=80',
    details: locList(
      [
        'Salary structures, allowances, and deduction rules',
        'Live sync with attendance and HR modules',
        'Instant payroll preview before processing',
        'Payslip generation and employee self-service portal',
        'Tax and compliance calculations built-in',
      ],
      [
        'هياكل رواتب، بدلات، وقواعد خصومات',
        'مزامنة لحظية مع وحدات الحضور و HR',
        'معاينة Payroll فورية قبل المعالجة',
        'إنشاء كشوف رواتب وبوابة self-service للموظف',
        'حسابات ضريبة وامتثال مدمجة',
      ]
    ),
    challenges: locList(
      [
        'Keeping payroll calculations accurate with live data changes',
        'Solution: Event-driven recalculation with snapshot locking at pay-run time',
      ],
      [
        'الحفاظ على دقة حسابات Payroll مع تغييرات البيانات اللحظية',
        'الحل: إعادة حساب Event-driven مع قفل snapshot وقت تشغيل الراتب',
      ]
    ),
    results: locList(
      [
        'Payroll always reflects current employee status',
        'Reduced payroll errors and manual corrections',
        'Employees see their earnings and deductions in real time',
      ],
      [
        'Payroll يعكس دائماً حالة الموظف الحالية',
        'تقليل أخطاء الرواتب والتصحيحات اليدوية',
        'الموظفون يرون أرباحهم وخصوماتهم لحظياً',
      ]
    ),
  },
  {
    id: 34,
    category: 'erp',
    title: loc('Retail & Inventory System', 'نظام Retail'),
    subtitle: loc('ERP Module • Live Stock Tracking', 'وحدة ERP • مخزون لحظي'),
    description: loc(
      'A comprehensive retail ERP module with unified inventory management — know your stock in real time across warehouses, branches, and sales channels.',
      'وحدة Retail ERP شاملة مع إدارة مخزون موحدة — اعرف مخزونك لحظياً عبر المستودعات والفروع وقنوات البيع.'
    ),
    technologies: ['C# .NET', 'SQL Server', 'React', 'ERP', 'Retail', 'Inventory'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&q=80',
    details: locList(
      [
        'Multi-warehouse inventory with live stock levels',
        'Purchase orders, receiving, and stock transfers',
        'POS integration with automatic inventory deduction',
        'Low-stock alerts and reorder suggestions',
        'Unified dashboard for retail operations and analytics',
      ],
      [
        'مخزون multi-warehouse مع مستويات لحظية',
        'أوامر شراء، استلام، ونقل مخزون',
        'ربط POS مع خصم مخزون آلي',
        'تنبيهات مخزون منخفض واقتراحات إعادة طلب',
        'لوحة موحدة لعمليات Retail والتحليلات',
      ]
    ),
    challenges: locList(
      [
        'Maintaining accurate stock across multiple locations in real time',
        'Solution: Centralized inventory ledger with location-scoped transactions',
      ],
      [
        'الحفاظ على مخزون دقيق عبر مواقع متعددة لحظياً',
        'الحل: دفتر مخزون مركزي مع معاملات scoped حسب الموقع',
      ]
    ),
    results: locList(
      [
        'Live inventory visibility eliminates stock surprises',
        'Reduced stockouts and overstocking',
        'Single retail platform connecting sales, inventory, and reporting',
      ],
      [
        'رؤية مخزون لحظية تeliminates مفاجآت المخزون',
        'تقليل نفاد المخزون والتكديس الزائد',
        'منصة Retail واحدة تربط المبيعات والمخزون والتقارير',
      ]
    ),
  },
];
