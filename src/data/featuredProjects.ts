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
  liveUrl?: string;
  demoHint?: LocalizedString;
  acronym?: string;
  fullName?: LocalizedString;
  meaning?: LocalizedString;
  videoId?: string;
}

export const featuredProjects: Project[] = [
  {
    id: 47,
    category: 'featured',
    liveUrl: 'https://womenssalon.vercel.app/',
    title: loc('Lamset Ward — Luxury Women’s Salon', 'لمسة ورد — صالون نسائي فاخر'),
    subtitle: loc('Booking • Services • Gallery • Admin', 'حجز مواعيد • خدمات • معرض • إدارة'),
    description: loc(
      'A complete luxury website for Lamset Ward, a women’s salon in Amman. Guests land on a calm cinematic brand, browse hair, makeup, nails, skin, and bridal packages with prices and duration, then book a time online — with bilingual Arabic/English, a gallery, location, and a private admin panel.',
      'موقع كامل لصالون لمسة ورد في عمّان. الزائرة تدخل هوية سينمائية هادئة، تتصفح الشعر والمكياج والأظافر والبشرة وباقات العروس مع السعر والمدة، ثم تحجز موعدها أونلاين — بعربية وإنجليزية، ومعرض، وموقع، ولوحة إدارة خاصة.'
    ),
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Booking System'],
    image: '/projects/project-womenssalon.jpg',
    details: locList(
      [
        'Full salon site: home, services, booking, gallery, location, and admin',
        'Service catalog with prices, duration, and bridal packages — hair, makeup, nails, skin, henna, and more',
        'Online booking: pick services, day, time, party size, name, and international phone',
        'Arabic-first luxury identity with English toggle, ambient sound, and cinematic intro',
        'Private admin entry so the salon can manage the experience without WhatsApp chaos',
      ],
      [
        'موقع صالون كامل: رئيسية، خدمات، حجز، معرض، موقع، وإدارة',
        'كتالوج خدمات بأسعار ومدد وباقات عروس — شعر، مكياج، أظافر، بشرة، حناء والمزيد',
        'حجز أونلاين: اختيار الخدمات واليوم والساعة وعدد الأشخاص والاسم ورقم دولي',
        'هوية فاخرة عربية أولاً مع تبديل إنجليزي وصوت محيطي ودخول سينمائي',
        'دخول إدارة خاص حتى الصالون يدير التجربة بدون فوضى الواتساب',
      ]
    ),
    challenges: locList(
      [
        'Making a full salon product feel private and elegant — not a noisy booking form',
        'Solution: A calm brand path — intro, services with clear prices, then a short booking flow that only asks what the salon needs',
      ],
      [
        'جعل منتج الصالون الكامل يبدو خاصاً وأنيقاً — وليس نموذج حجز مزعج',
        'الحل: مسار هوية هادئ — دخول، خدمات بأسعار واضحة، ثم حجز قصير يسأل فقط ما يحتاجه الصالون',
      ]
    ),
    results: locList(
      [
        'Live salon at womenssalon.vercel.app',
        'Clients book hair, makeup, nails, and bridal packages without calling',
        'A distinctive luxury identity for a women’s salon in Amman',
      ],
      [
        'صالون لايف على womenssalon.vercel.app',
        'العميلات يحجزن الشعر والمكياج والأظافر وباقات العروس بدون اتصال',
        'هوية فاخرة مميزة لصالون نسائي في عمّان',
      ]
    ),
  },
  {
    id: 46,
    category: 'featured',
    liveUrl: 'https://austin-town.vercel.app/',
    title: loc('Austin Town CFW RP — Rules & Store', 'Austin Town CFW RP — قوانين ومتجر'),
    subtitle: loc('FiveM City Hub • Server Rules • In-Game Store', 'مركز المدينة • قوانين السيرفر • متجر اللعبة'),
    description: loc(
      'A cinematic hub for Austin Town CFW RP — a FiveM roleplay city. Players land on a high-energy Arabic site, read the server rules, open the store for cars and projects, and jump straight to Discord for support and applications.',
      'مركز سينمائي لمدينة Austin Town CFW RP على FiveM. اللاعب يدخل موقعاً عربياً بطاقة عالية، يقرأ القوانين، يفتح المتجر للسيارات والمشاريع، وينتقل مباشرة للديسكورد للدعم والتقديم.'
    ),
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'FiveM', 'Discord'],
    image: '/projects/project-austintown.jpg',
    details: locList(
      [
        'Cinematic city landing with Austin Town branding and CFW RP identity',
        'Dedicated Rules section so new players know everything before joining',
        'In-game store for cars and projects with a direct enter path',
        'Discord gateway for support, applications, and the city community',
        'Arabic-first experience built for FiveM roleplay energy — not a generic server page',
      ],
      [
        'صفحة مدينة سينمائية بهوية Austin Town و CFW RP',
        'قسم قوانين واضح حتى اللاعب الجديد يعرف كل شيء قبل الدخول',
        'متجر داخل اللعبة للسيارات والمشاريع مع مسار دخول مباشر',
        'بوابة ديسكورد للدعم والتقديم ومجتمع المدينة',
        'تجربة عربية بطاقة FiveM RP — وليست صفحة سيرفر عامة',
      ]
    ),
    challenges: locList(
      [
        'Packing rules, store, and Discord into one page without feeling like a messy menu',
        'Solution: Three cinematic entry cards — Rules, Store, Discord — with a city-first visual language',
      ],
      [
        'جمع القوانين والمتجر والديسكورد في صفحة واحدة بدون فوضى قوائم',
        'الحل: ثلاث كروت دخول سينمائية — قوانين، متجر، ديسكورد — بلغة بصرية للمدينة',
      ]
    ),
    results: locList(
      [
        'Live city hub at austin-town.vercel.app',
        'New players read the rules and reach the store in seconds',
        'A distinctive FiveM identity that feels like walking into the city',
      ],
      [
        'مركز مدينة لايف على austin-town.vercel.app',
        'اللاعب الجديد يقرأ القوانين ويصل للمتجر خلال ثوانٍ',
        'هوية FiveM مميزة كأنك داخل المدينة من أول ثانية',
      ]
    ),
  },
  {
    id: 45,
    category: 'featured',
    liveUrl: 'https://royal-care-eta.vercel.app/',
    title: loc('Royal Care — Premium Maid Booking', 'Royal Care — طلب خادمات بتجربة فاخرة'),
    subtitle: loc('Domestic Staff On Demand • Elegant Booking • Trusted Care', 'عمالة منزلية حسب الطلب • حجز أنيق • رعاية موثوقة'),
    description: loc(
      'A premium website for booking domestic workers and maids — Royal Care. Families request live-in or part-time help through a polished, high-end flow: browse services, choose the right profile, and book with a calm, professional experience instead of messy WhatsApp chats.',
      'موقع فاخر لطلب الخادمات والعمالة المنزلية — Royal Care. العائلات تطلب مساعدة مقيمة أو جزئية بمسار أنيق واحترافي: تصفح الخدمات، اختيار الملف المناسب، والحجز بتجربة هادئة بدل فوضى الواتساب.'
    ),
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Booking Flow'],
    image: '/projects/project-royalcare.jpg',
    details: locList(
      [
        'Premium brand site for domestic and household staffing',
        'Clear request flow to book a maid without phone-tag chaos',
        'Service presentation built for trust: care, professionalism, and privacy',
        'High-end visual identity — gold-tone luxury, not a classified ads page',
        'Contact and booking CTAs designed for conversions on mobile and desktop',
      ],
      [
        'موقع هوية فاخر لخدمات الخادمات والعمالة المنزلية',
        'مسار طلب واضح لحجز خادمة بدون شد وجذب على الهاتف',
        'عرض خدمات مبني على الثقة: رعاية، احتراف، وخصوصية',
        'هوية بصرية راقية — لمسة فخمة، وليست صفحة إعلانات',
        'أزرار تواصل وحجز مصممة للتحويل على الموبايل والديسكتوب',
      ]
    ),
    challenges: locList(
      [
        'Selling a sensitive service (home staff) with dignity and luxury, not cheap classifieds',
        'Solution: A premium care brand, restrained motion, and a booking path that feels private and official',
      ],
      [
        'بيع خدمة حساسة (عمالة منزلية) بكرامة وفخامة، وليس كإعلان رخيص',
        'الحل: علامة رعاية فاخرة، حركة محسوبة، ومسار حجز يبدو خاصاً ورسمياً',
      ]
    ),
    results: locList(
      [
        'Live booking site at royal-care-eta.vercel.app',
        'Families can request staff in a few calm steps',
        'A distinctive luxury identity for a domestic-services business',
      ],
      [
        'موقع حجز لايف على royal-care-eta.vercel.app',
        'العائلات تطلب العمالة المنزلية بخطوات هادئة وواضحة',
        'هوية فاخرة مميزة لأعمال الخدمات المنزلية',
      ]
    ),
  },
  {
    id: 44,
    category: 'featured',
    liveUrl: 'https://maoon-green.vercel.app/',
    title: loc("Ma'oun Al-Khair — National Donations Portal", 'معوان الخير — منصة التبرعات الرسمية'),
    subtitle: loc('Trusted Giving • 10 Aid Categories • Full Transparency', 'عطاء موثوق • 10 أقسام إنسانية • شفافية كاملة'),
    description: loc(
      "A professional national donations platform for Ma'oun Al-Khair. It connects donors with verified cases — debtors, struggling families, students, patients, and disaster victims — with transparent tracking, secure payments, and a calm, high-end Arabic experience.",
      'منصة تبرعات رسمية واحترافية لمعوان الخير. تربط المتبرعين بحالات موثّقة — غارمين، أسر متعففة، طلبة، مرضى، ومتضرري كوارث — مع تتبع شفاف، دفع آمن، وتجربة عربية أنيقة وعالية المستوى.'
    ),
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Payments', 'i18n'],
    image: '/projects/project-maoon.jpg',
    details: locList(
      [
        'Cinematic Arabic landing page with live donation and cases counters',
        'Ten humanitarian categories: debtors, rent, student fees, water, electricity, elderly, disability, medical care, and disaster relief',
        'Donate now or request help — two clear paths without friction',
        'Trust layer: full transparency, committee review, and beneficiary dignity/privacy',
        'Secure encrypted checkout so donors can give without complicated signup',
        'About, supported sections, contact, and login for a complete official portal',
      ],
      [
        'صفحة رئيسية عربية سينمائية مع عدادات للتبرعات والحالات',
        'عشرة أقسام إنسانية: غارمون، إيجار، رسوم طلبة، مياه، كهرباء، كبار سن، ذوو إعاقة، علاج، وإغاثة كوارث',
        'مساران واضحان: تبرع الآن أو اطلب مساعدة — بدون تعقيد',
        'طبقة ثقة: شفافية كاملة، تدقيق لجنة، وكرامة وخصوصية للمستفيد',
        'دفع آمن ومشفّر حتى المتبرع يعطي بدون تسجيل معقّد',
        'صفحات من نحن، الأقسام، التواصل، وتسجيل الدخول كبوابة رسمية كاملة',
      ]
    ),
    challenges: locList(
      [
        'Making a donations site feel official and warm — never like a generic charity template',
        'Solution: Government-grade visual language, clear aid categories, and a dignity-first content tone',
      ],
      [
        'جعل موقع التبرعات يبدو رسمياً ودافئاً — وليس قالباً خيرياً عاماً',
        'الحل: لغة بصرية بمستوى جهة رسمية، أقسام عطاء واضحة، ونبرة محتوى تحفظ كرامة المستفيد',
      ]
    ),
    results: locList(
      [
        'A live portal at maoon-green.vercel.app with a complete giving journey',
        'Donors understand where money goes in seconds',
        'A professional national-aid identity instead of a basic donation form',
      ],
      [
        'بوابة لايف على maoon-green.vercel.app بمسار عطاء كامل',
        'المتبرع يفهم أين يذهب ماله خلال ثوانٍ',
        'هوية معونة وطنية احترافية بدل نموذج تبرع بسيط',
      ]
    ),
  },
  {
    id: 36,
    category: 'featured',
    liveUrl: 'https://eradmall.com/',
    title: loc('ERAD Mall — Computer Trading Platform', 'ERAD Mall — منصة تجارة أجهزة الكمبيوتر'),
    subtitle: loc('Google Login • Customer Tracking • Internal Ops System', 'تسجيل Google • مراقبة العملاء • نظام تشغيلي داخلي'),
    description: loc(
      'A premium computer trading store for ERAD with a full public catalog (laptops, monitors, components, gaming, printers, and networking) plus an internal operations system. Customers sign in with Google, while the dashboard tracks customer activity, orders, and store performance from one place.',
      'متجر احترافي لتجارة أجهزة الكمبيوتر لشركة ERAD مع كتالوج عام كامل (لابتوبات، شاشات، قطع، ألعاب، طابعات، وشبكات) بالإضافة لنظام تشغيلي داخلي. العملاء يسجّلون عبر Google، والداشبورد يراقب نشاط العملاء والطلبات وأداء المتجر من مكان واحد.'
    ),
    technologies: ['React', 'C# .NET', 'SQL Server', 'Google OAuth', 'E-Commerce', 'Admin Dashboard'],
    image: '/projects/project-erad.jpg',
    details: locList(
      [
        'Public storefront for laptops, monitors, components, desktops, gaming, accessories, printers, and networking',
        'Google OAuth login for a fast, trusted customer sign-in',
        'Internal system to monitor customers, orders, and browsing activity',
        'Admin control for products, categories, special offers, and new arrivals',
        'Service pages for hardware maintenance and network installation',
        'Store location, contact, and operations management from one dashboard',
      ],
      [
        'واجهة متجر عامة للابتوبات والشاشات والقطع وأجهزة الألعاب والإكسسوارات والطابعات والشبكات',
        'تسجيل دخول عبر Google OAuth بسرعة وثقة',
        'نظام داخلي لمراقبة العملاء والطلبات ونشاط التصفح',
        'لوحة إدارة للمنتجات والتصنيفات والعروض والوصولات الجديدة',
        'صفحات خدمات لصيانة الأجهزة وتركيب الشبكات',
        'إدارة الموقع والتواصل والعمليات من داشبورد واحد',
      ]
    ),
    challenges: locList(
      [
        'Connecting a public storefront with a private operations layer without leaking customer data',
        'Solution: Role-based APIs, Google OAuth sessions, and an isolated admin dashboard for tracking',
      ],
      [
        'ربط واجهة المتجر العامة مع طبقة تشغيل داخلية بدون تسريب بيانات العملاء',
        'الحل: APIs حسب الصلاحيات، جلسات Google OAuth، وداشبورد إدارة معزول للمتابعة',
      ]
    ),
    results: locList(
      [
        'Live store at eradmall.com with a complete product catalog',
        'Customer login and activity tracking from a single internal system',
        'Clear operations view for sales, services, and store management',
      ],
      [
        'متجر لايف على eradmall.com مع كتالوج منتجات كامل',
        'تسجيل العملاء ومتابعة نشاطهم من نظام داخلي واحد',
        'رؤية تشغيلية واضحة للمبيعات والخدمات وإدارة المتجر',
      ]
    ),
  },
  {
    id: 37,
    category: 'featured',
    liveUrl: 'https://sweetdrip.cafe/',
    title: loc('Sweet Drip Cafe — Online Ordering', 'Sweet Drip — طلب أون لاين للكافيه'),
    subtitle: loc('Inventory • Customer Tracking • Online Payments', 'مخزون • مراقبة العملاء • دفع أون لاين'),
    description: loc(
      'A dessert cafe website with online ordering, shop inventory, customer monitoring, and online payments. Customers browse cakes, ice cream, drinks, and pastries, grab daily offers, and checkout without calling the store.',
      'موقع كافيه حلويات مع طلب أون لاين، مخزون للمحل، مراقبة العملاء، ودفع إلكتروني. الزبائن يتصفحون الكيك والآيس كريم والمشروبات والمعجنات، يأخذون عروض اليوم، ويدفعون بدون الاتصال بالمحل.'
    ),
    technologies: ['React', 'C# .NET', 'SQL Server', 'Online Payments', 'Inventory', 'Ordering'],
    image: '/projects/project-sweetdrip.jpg',
    details: locList(
      [
        'Online menu with categories: cakes, ice cream, drinks, and pastries',
        'Daily offers and bundles with one-tap order flow',
        'Shop inventory system synced with live orders',
        'Customer tracking for repeats, favorites, and order history',
        'Secure online payment at checkout',
        'Warm cafe branding with location, hours, and pickup-ready UX',
      ],
      [
        'قائمة أون لاين بتصنيفات: كيك، آيس كريم، مشروبات، ومعجنات',
        'عروض يومية وباقات مع مسار طلب بضغطة واحدة',
        'نظام مخزون للمحل متزامن مع الطلبات الحية',
        'مراقبة العملاء للتكرار والمفضلات وسجل الطلبات',
        'دفع إلكتروني آمن عند إتمام الطلب',
        'هوية كافيه دافئة مع الموقع وساعات العمل وتجربة استلام جاهزة',
      ]
    ),
    challenges: locList(
      [
        'Keeping inventory accurate while customers order in real time',
        'Solution: Stock reservation on checkout with payment confirmation before deducting items',
      ],
      [
        'الحفاظ على دقة المخزون بينما الزبائن يطلبون لحظياً',
        'الحل: حجز المخزون عند الدفع مع تأكيد العملية قبل خصم الأصناف',
      ]
    ),
    results: locList(
      [
        'Customers order online without phone calls or confusion',
        'Shop staff see stock, orders, and customer activity in one system',
        'Higher ticket size through bundles and featured desserts',
      ],
      [
        'الزبائن يطلبون أون لاين بدون اتصال أو لبس',
        'الموظفون يرون المخزون والطلبات ونشاط العملاء من نظام واحد',
        'رفع قيمة الطلب عبر الباقات والحلويات المميزة',
      ]
    ),
  },
  {
    id: 38,
    category: 'featured',
    liveUrl: 'https://mobadarah.net/',
    title: loc('Mobadarah — Cosmetic Pharmaceuticals', 'Mobadarah — أدوية تجميلية'),
    subtitle: loc('Google Login • Customer Insights • Cinematic Discount Engine', 'تسجيل Google • مراقبة العملاء • نظام خصومات خرافي'),
    description: loc(
      'A complete digital platform for a cosmetic pharmaceutical brand — Google login, customer monitoring, product catalog, and a beautifully designed discount engine that feels premium rather than like a coupon dump.',
      'منصة رقمية كاملة لشركة أدوية تجميلية — تسجيل عبر Google، مراقبة العملاء، كتالوج منتجات، ونظام خصومات مصمم بطريقة أنيقة وخرافية بدل كوبونات عشوائية.'
    ),
    technologies: ['React', 'C# .NET', 'SQL Server', 'Google OAuth', 'Promotions Engine', 'Analytics'],
    image: '/projects/project-mobadarah.jpg',
    details: locList(
      [
        'Full brand website for cosmetic pharmaceutical products',
        'Google OAuth login for customers and returning shoppers',
        'Customer monitoring: visits, cart behavior, and purchase patterns',
        'Discount system with elegant rules — timed offers, bundles, and VIP tiers',
        'Product catalog with polished presentation and campaign landing states',
        'Admin tools to launch, pause, and measure promotions in real time',
      ],
      [
        'موقع علامة تجارية كامل لمنتجات الأدوية التجميلية',
        'تسجيل دخول عبر Google للعملاء والعائدين',
        'مراقبة العملاء: الزيارات، سلوك السلة، وأنماط الشراء',
        'نظام خصومات بقواعد أنيقة — عروض مؤقتة، باقات، ومستويات VIP',
        'كتالوج منتجات بعرض فاخر وحالات حملات ترويجية',
        'أدوات إدارة لإطلاق وإيقاف وقياس العروض لحظياً',
      ]
    ),
    challenges: locList(
      [
        'Making discounts feel premium instead of cheap or chaotic',
        'Solution: Rule-based promotion engine with visual campaign states and customer-segment targeting',
      ],
      [
        'جعل الخصومات تبدو فاخرة بدل رخيصة أو عشوائية',
        'الحل: محرك عروض قائم على قواعد مع حالات حملات بصرية واستهداف شرائح العملاء',
      ]
    ),
    results: locList(
      [
        'Brand-first shopping experience with a complete backend',
        'Smarter promotions that customers actually want to use',
        'Clear visibility into customer behavior and campaign performance',
      ],
      [
        'تجربة تسوق بهوية العلامة مع باك إند كامل',
        'عروض أذكى يستخدمها العملاء فعلاً',
        'رؤية واضحة لسلوك العملاء وأداء الحملات',
      ]
    ),
  },
  {
    id: 39,
    category: 'featured',
    title: loc('Enterprise POS — Cashier Control Suite', 'نظام كاش احترافي من A إلى Z'),
    subtitle: loc('A–Z POS • Cashier Monitoring • Smart Returns', 'كاش كامل • مراقبة كاشيرات • مرتجعات احترافية'),
    description: loc(
      'A large-scale point-of-sale platform covering retail operations from A to Z: sales, inventory, invoices, shifts, permissions, and a professional returns workflow. Built specifically to monitor cashiers in real time and close every loophole around refunds.',
      'نظام كاش كبير يغطي عمليات التجزئة من الألف إلى الياء: مبيعات، مخزون، فواتير، ورديات، صلاحيات، وسير عمل مرتجعات احترافي. مصمم خصيصاً لمراقبة الكاشيرات لحظياً وإغلاق أي ثغرة في الاسترجاع.'
    ),
    technologies: ['React', 'C# .NET', 'SQL Server', 'POS', 'Barcode', 'Audit Trail', 'Role-Based Access'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&q=80',
    details: locList(
      [
        'Full POS flow: barcode checkout, multi-payment, invoices, and shift close',
        'Live cashier monitoring — who sold what, when, and under which permission',
        'Professional returns system with reason codes, manager approval, and original-invoice matching',
        'Inventory, discounts, and price overrides with a complete audit trail',
        'Role matrix for cashier, supervisor, and owner — every action is logged',
        'Daily, weekly, and cashier-level reports for sales, voids, and refunds',
      ],
      [
        'تدفق كاش كامل: باركود، دفع متعدد، فواتير، وإغلاق وردية',
        'مراقبة كاشيرات لحظية — من باع ماذا ومتى وبأي صلاحية',
        'نظام مرتجعات احترافي مع أسباب، موافقة مدير، وربط بالفاتورة الأصلية',
        'مخزون وخصومات وتعديل أسعار مع سجل تدقيق كامل',
        'مصفوفة صلاحيات للكاشير والمشرف والمالك — كل إجراء مسجّل',
        'تقارير يومية وأسبوعية وعلى مستوى الكاشير للمبيعات والإلغاء والمرتجعات',
      ]
    ),
    challenges: locList(
      [
        'Preventing cashier abuse on voids and returns without slowing checkout',
        'Solution: Dual-control returns, timed permissions, and a live activity feed for supervisors',
      ],
      [
        'منع التلاعب في الإلغاء والمرتجعات بدون إبطاء الكاش',
        'الحل: مرتجعات بموافقة مزدوجة، صلاحيات موقوتة، وتغذية نشاط حية للمشرفين',
      ]
    ),
    results: locList(
      [
        'Owners see every cashier action with full accountability',
        'Returns become a controlled process instead of a leak',
        'One system covers the entire shop floor from open to close',
      ],
      [
        'صاحب المحل يرى كل إجراء للكاشير بمساءلة كاملة',
        'المرتجعات تصبح عملية مضبوطة بدل ثغرة',
        'نظام واحد يغطي أرضية المحل من الافتتاح حتى الإغلاق',
      ]
    ),
  },
  {
    id: 40,
    category: 'featured',
    liveUrl: 'https://interactive-stream-arena-main.vercel.app/',
    title: loc('Al-Daboor — Kick Stream Game Arena', 'الدبور — ألعاب تفاعلية لبثوث Kick'),
    subtitle: loc('Live Chat Games • Streamer Tools • Cinematic UX', 'ألعاب على الشات • أدوات ستريمر • تجربة سينمائية'),
    description: loc(
      'An interactive platform for Kick streamers: connect the channel, pick a game, and let the audience play from chat. Multiple polished games — trivia, musical chairs, polls, ratings, secret phrase, flags, and riddles — with a cinematic Arabic-first experience.',
      'منصة تفاعلية لأصحاب بثوث Kick: اربط القناة، اختر لعبة، والجمهور يلعب من الشات. أكثر من لعبة مصقولة — أسئلة، كراسي، تصويت، تقييم، جملة سرية، أعلام، وألغاز — بتجربة عربية سينمائية واحترافية.'
    ),
    technologies: ['React', 'TypeScript', 'Kick Chat API', 'WebSockets', 'Framer Motion', 'Realtime'],
    image: '/projects/project-aldaboor.jpg',
    details: locList(
      [
        'Kick channel connection with live chat gameplay',
        'Game suite: trivia, musical chairs, live polls, 0–10 ratings, secret phrase, flags, and riddles',
        'Each card opens a dedicated game page with a professional flow',
        'Streamer-first dashboard for verified streamers, chat, about, and contact',
        'Realtime scoring — first correct chat answer wins the point',
        'Cinematic Arabic UI designed for stream overlays and audience energy',
      ],
      [
        'ربط قناة Kick مع لعب مباشر من الشات',
        'مجموعة ألعاب: أسئلة، كراسي، تصويت، تقييم من ٠ إلى ١٠، جملة سرية، أعلام، وألغاز',
        'كل كرت يفتح صفحة لعبة مستقلة بسير عمل احترافي',
        'لوحة ستريمر للستريمر الموثقين والشات ومن نحن والتواصل',
        'نقاط لحظية — أول جواب صحيح من الشات يفوز',
        'واجهة عربية سينمائية مصممة للأوفرلاي وطاقة الجمهور',
      ]
    ),
    challenges: locList(
      [
        'Mapping noisy live chat into fair, instant game events',
        'Solution: Normalized chat parser, first-correct-wins locks, and per-game scoring rooms',
      ],
      [
        'تحويل شات حيّ وصاخب إلى أحداث لعب عادلة وفورية',
        'الحل: محلل شات منظّم، قفل أول جواب صحيح، وغرف نقاط لكل لعبة',
      ]
    ),
    results: locList(
      [
        'Streamers run interactive nights without extra mods or messy tools',
        'Audience stays in chat because every message can win',
        'A distinctive Kick-native arena instead of a generic overlay',
      ],
      [
        'الستريمر يدير ليالي تفاعلية بدون أدوات مبعثرة',
        'الجمهور يبقى في الشات لأن كل رسالة ممكن تفوز',
        'منصة Kick مميزة بدل أوفرلاي عام',
      ]
    ),
  },
  {
    id: 41,
    category: 'featured',
    liveUrl: 'https://planetone-2.vercel.app/',
    title: loc('Planet One — Documentary Studio (Orbit)', 'Planet One — استوديو وثائقي (Orbit)'),
    subtitle: loc('Cinematic Reel • 3D Archive • Bilingual Film House', 'ريل سينمائي • أرشيف 3D • بيت أفلام ثنائي اللغة'),
    description: loc(
      'One of two distinct brand websites created for Planet One, a documentary film house. This version is a cinematic orbit: spinning film reels, immersive archive browsing, and a bilingual Arabic/English experience for a studio that films people, planets, and the space between them.',
      'واحد من موقعين تعريفيين مختلفين تماماً لشركة Planet One للأفلام الوثائقية. هذه النسخة سينمائية دوّارة: ريل أفلام، أرشيف غامر، وتجربة عربية/إنجليزية لبيت إنتاج يصوّر الناس والكواكب والمسافة بينهما.'
    ),
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Three.js', 'Tailwind CSS', 'i18n'],
    image: '/projects/project-planetone-2.jpg',
    details: locList(
      [
        'Hero built like a film reel with orbiting titles and drag-to-spin interaction',
        'Selected work archive with ratings, directors, and trailer-ready presentation',
        'Bilingual Arabic/English studio voice without breaking the cinematic rhythm',
        'Stats, about, and contact framed as a production house — not a generic agency',
        'A completely different visual language from Planet One Studio Catalogue',
      ],
      [
        'هيرو كريل أفلام مع عناوين تدور وتفاعل السحب للدوران',
        'أرشيف أعمال مختارة مع تقييمات ومخرجين وعرض جاهز للتريلر',
        'صوت الاستوديو بالعربي والإنجليزي بدون كسر الإيقاع السينمائي',
        'إحصائيات ونبذة وتواصل بإطار بيت إنتاج — مش شركة عامة',
        'لغة بصرية مختلفة تماماً عن نسخة Planet One Studio Catalogue',
      ]
    ),
    challenges: locList(
      [
        'Giving the same film house two identities without making either feel like a clone',
        'Solution: Separate art direction, motion system, and information architecture per site',
      ],
      [
        'إعطاء نفس بيت الإنتاج هويتين بدون أن يبدو أي موقع نسخة مكررة',
        'الحل: اتجاه فني ونظام حركة وهندسة معلومات مستقلة لكل موقع',
      ]
    ),
    results: locList(
      [
        'A memorable first impression for festivals, commissions, and collaborators',
        'Two brand directions the client can actually choose from',
        'Documentary storytelling translated into web motion',
      ],
      [
        'انطباع أول لا يُنسى للمهرجانات والعمولات والشركاء',
        'اتجاهان للهوية يقدر العميل يختار منهما',
        'السرد الوثائقي مترجم إلى حركة على الويب',
      ]
    ),
  },
  {
    id: 42,
    category: 'featured',
    liveUrl: 'https://planetone-1.vercel.app/',
    title: loc('Planet One — Documentary Studio (Catalogue)', 'Planet One — استوديو وثائقي (Catalogue)'),
    subtitle: loc('Editorial Grid • Film Catalogue • Production House', 'شبكة تحريرية • كتالوج أفلام • بيت إنتاج'),
    description: loc(
      'The second Planet One website — a cleaner editorial catalogue. Films are presented as a production house archive with duration, ratings, and a four-step process from research to release. Same client, completely different design system.',
      'الموقع الثاني لـ Planet One — كتالوج تحريري أنظف. الأفلام تُعرض كأرشيف بيت إنتاج مع المدة والتقييم وعملية من أربع خطوات من البحث حتى الإصدار. نفس العميل، نظام تصميم مختلف تماماً.'
    ),
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'i18n'],
    image: '/projects/project-planetone-1.jpg',
    details: locList(
      [
        'Editorial film catalogue with duration, year, and rating per title',
        'About and process sections: research, shooting, edit & sound, release',
        'Bilingual toggle and a quieter, print-like visual system',
        'Contact and commission flow for new documentary stories',
        'Designed as a true alternative to the Orbit version — not a restyle',
      ],
      [
        'كتالوج أفلام تحريري مع المدة والسنة والتقييم لكل عنوان',
        'أقسام النبذة والعملية: بحث، تصوير، مونتاج وصوت، إصدار',
        'تبديل لغات ونظام بصري أهدأ أقرب للمطبوعات',
        'مسار تواصل وعمولات لقصص وثائقية جديدة',
        'مصمم كبديل حقيقي لنسخة Orbit — مش إعادة تلوين',
      ]
    ),
    challenges: locList(
      [
        'Keeping the catalogue cinematic without the heavy 3D of the sister site',
        'Solution: Typography, stills, and restrained motion that still feel like cinema',
      ],
      [
        'إبقاء الكتالوج سينمائياً بدون 3D الثقيل للموقع الشقيق',
        'الحل: تايبوغرافيا ولقطات ثابتة وحركة محسوبة ما زالت تشبه السينما',
      ]
    ),
    results: locList(
      [
        'A calmer brand option for clients who want clarity over spectacle',
        'Films are easy to browse, compare, and share',
        'Proof that one brief can become two world-class websites',
      ],
      [
        'خيار هوية أهدأ لمن يريد وضوحاً أكثر من الفرجة',
        'الأفلام سهلة التصفح والمقارنة والمشاركة',
        'دليل أن الطلب الواحد يقدر يصير موقعين بمستوى عالمي',
      ]
    ),
  },
  {
    id: 43,
    category: 'featured',
    liveUrl: 'https://hr-navy-two.vercel.app/',
    demoHint: loc('Try it live — username: admin  /  password: 222', 'جرّبه مباشرة — اليوزر: admin  /  الباسورد: 222'),
    title: loc('Modern HR Operating System', 'نظام HR جديد عملي وأنيق'),
    subtitle: loc('Live Demo • People Ops • Clean Daily Workflow', 'تجربة مباشرة • موارد بشرية • سير عمل يومي واضح'),
    description: loc(
      'A new HR system designed to feel good to use every day — employees, attendance, roles, and internal operations in a clean navy interface. Practical, fast, and ready to try with a public demo login.',
      'نظام HR جديد مصمم ليكون ممتعاً وعملياً كل يوم — موظفون، دوام، صلاحيات، وعمليات داخلية بواجهة navy نظيفة. واضح، سريع، وجاهز للتجربة بتسجيل دخول تجريبي.'
    ),
    technologies: ['React', 'TypeScript', 'C# .NET', 'SQL Server', 'HR', 'Role-Based Access'],
    image: '/projects/project-hr.jpg',
    details: locList(
      [
        'Clean HR dashboard for employees, attendance, and people operations',
        'Practical daily workflow instead of a bloated enterprise maze',
        'Role-based access for admin and staff',
        'Modern navy UI with fast navigation and readable tables',
        'Public demo so clients can click through the real product',
      ],
      [
        'داشبورد HR نظيف للموظفين والدوام وعمليات الأفراد',
        'سير عمل يومي عملي بدل متاهة أنظمة مؤسسية',
        'صلاحيات حسب الدور للأدمن والموظفين',
        'واجهة navy عصرية مع تنقل سريع وجداول مقروءة',
        'تجربة عامة حتى العميل يضغط ويتجوّل في المنتج الحقيقي',
      ]
    ),
    challenges: locList(
      [
        'Making HR feel simple without hiding the operations companies actually need',
        'Solution: Opinionated screens, short paths, and an admin demo that shows the real flow',
      ],
      [
        'جعل الـ HR بسيطاً بدون إخفاء العمليات التي تحتاجها الشركات فعلاً',
        'الحل: شاشات محددة، مسارات قصيرة، وتجربة أدمن تعرض التدفق الحقيقي',
      ]
    ),
    results: locList(
      [
        'A live HR product clients can test in minutes',
        'Clearer people operations with less training',
        'A modern alternative to heavy, ugly HR tools',
      ],
      [
        'منتج HR لايف يقدر العميل يجربه خلال دقائق',
        'عمليات أفراد أوضح مع تدريب أقل',
        'بديل عصري لأدوات HR الثقيلة والسيئة',
      ]
    ),
  },
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
    image: '/projects/project-infinity.jpg',
    liveUrl: 'https://infinite-navy.vercel.app/',
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
    image: '/projects/project-manal.jpg',
    liveUrl: 'https://manal-ecru.vercel.app/',
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
    image: '/projects/project-supermarket.jpg',
    liveUrl: 'https://supermarkit-ltrb.vercel.app/',
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
    liveUrl: 'https://cuth-iota.vercel.app/',
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
    acronym: 'Accounting',
    fullName: loc('Financial Accounting', 'المحاسبة المالية'),
    meaning: loc(
      'Accounting is the system that records every dollar in and out of the business — sales, purchases, invoices, and financial reports — so you always know if the company is profitable.',
      'المحاسبة هي النظام الذي يسجّل كل مبلغ يدخل أو يخرج من الشركة — مبيعات، مشتريات، فواتير، وتقارير مالية — حتى تعرف دائماً إذا الشركة رابحة أم لا.'
    ),
    videoId: 'x4UJVfnCBms',
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
    acronym: 'CRM',
    fullName: loc('Customer Relationship Management', 'إدارة علاقات العملاء'),
    meaning: loc(
      'CRM means Customer Relationship Management. It keeps every lead, customer, deal, and follow-up in one place so the sales team never loses a conversation — and knows exactly what to do next.',
      'CRM تعني إدارة علاقات العملاء. يجمع كل عميل محتمل، عميل حالي، صفقة، ومتابعة في مكان واحد حتى فريق المبيعات ما يضيع أي تواصل — ويعرف الخطوة التالية بوضوح.'
    ),
    videoId: '7L7nDEc2P14',
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
    acronym: 'HR',
    fullName: loc('Human Resources', 'الموارد البشرية'),
    meaning: loc(
      'HR means Human Resources. It manages people inside the company: hiring, employee files, attendance, leave requests, and the organization structure — instead of scattered Excel sheets.',
      'HR تعني الموارد البشرية. تدير الناس داخل الشركة: التوظيف، ملفات الموظفين، الحضور، الإجازات، والهيكل التنظيمي — بدل جداول Excel المتفرقة.'
    ),
    videoId: 'rTOjFQg8Baw',
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
    acronym: 'Payroll',
    fullName: loc('Employee Payroll', 'الرواتب والمستحقات'),
    meaning: loc(
      'Payroll is the system that calculates salaries, allowances, and deductions, then pays employees correctly and on time. Attendance, overtime, and bonuses show up immediately in the pay run.',
      'Payroll هو النظام الذي يحسب الرواتب والبدلات والخصومات، ثم يدفع للموظفين بشكل صحيح وفي وقتهم. الحضور، الإضافي، والمكافآت تظهر فوراً في كشف الراتب.'
    ),
    videoId: 'NfaNNtwDHGE',
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
    acronym: 'Retail',
    fullName: loc('Retail & Inventory', 'التجزئة والمخزون'),
    meaning: loc(
      'Retail & Inventory tracks what you sell and what you still have in stock across shops and warehouses — live, not on paper. You see stockouts before they happen.',
      'Retail والمخزون يتتبع ماذا تبيع وماذا بقي لديك في المحل والمستودع — لحظياً، وليس على ورق. ترى نفاد المخزون قبل أن يحدث.'
    ),
    videoId: '0NOER-Lle-0',
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
        'Live inventory visibility that removes stock surprises',
        'تقليل نفاد المخزون والتكديس الزائد',
        'منصة Retail واحدة تربط المبيعات والمخزون والتقارير',
      ]
    ),
  },
];
