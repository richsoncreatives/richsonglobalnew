/**
 * Richson Global — Eric Richson Darko
 * Comprehensive Data Store
 * Self-hosted local media assets; clear brand separation across all entities.
 */

import booksData from './books.json';

export interface Venture {
  id: string;
  number: string;
  name: string;
  category: string;
  status: string;
  path: string;
  ctaLabel: string;
  description: string;
  purpose?: string;
  focus?: string[];
  mark?: {
    kind: 'contain' | 'image' | 'label';
    src?: string;
    alt?: string;
    label?: string;
    caption?: string;
  };
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  coverUrl: string;
  description: string;
  synopsis?: string;
  focusPoints?: string[];
  priceGhs?: number;
  priceUsd?: number;
  format?: string;
  featured?: boolean;
  author?: string;
}

export interface ClientBook {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  coverUrl: string;
}

export interface PortfolioKPI {
  kpi: string;
  title: string;
  scope: string;
  description: string;
  website?: string;
  screenshotUrl?: string;
}

export interface WebProject {
  name: string;
  url: string;
  domain: string;
  scope: string;
  attribution: string;
  summary: string;
  screenshotUrl: string;
}

export interface Affiliation {
  name: string;
  role: string;
  period: string;
  nature: string;
  summary: string;
  url?: string | null;
  screenshotUrl?: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  book?: string;
  excerpt: string;
  content: string[];
}

export interface PageSeoMeta {
  title: string;
  description: string;
}

export const SITE_COORDINATES = {
  founderName: "Eric Richson Darko",
  brandName: "Richson Global",
  title: "Architect of Capacity",
  tagline: "An Ecosystem of Ideas, Enterprises & Impact",
  phone1: "+233 262 685 856",
  phone2: "+233 548 685 856",
  phoneRaw: "233262685856",
  email: "info@richsonglobal.com",
  emailDirect: "richson20@gmail.com",
  location: "Accra, Ghana",
  momo: "0548685856",
  bankAccount: "0010245909011",
  bankBranch: "OmniBSIC — Achimota Branch",
  selar: "https://selar.com/m/richsonericdarko",
  whatsapp: "https://wa.me/233262685856",
  selarUrl: "https://selar.com/m/richsonericdarko",
  logoUrl: "/assets/aistudio/KAY2221_35470e71.jpg",
  avatarUrl: "/assets/aistudio/KAY2221_35470e71.jpg",
  portraitUrl: "/assets/media/f3384e948_ChatGPTImageOct1202607_53_11AM.png",
  heroPortrait: "/assets/aistudio/neutral_099b1d88.png",
  formalPortrait: "/assets/media/f3384e948_ChatGPTImageOct1202607_53_11AM.png",
  ministryPortrait: "/assets/media/5c43c1838_D00001.jpg",
  wisefoldMark: "/assets/media/dc8be5d7e_wisefold-mark.png",
  creativesMark: "/assets/media/f4fc790d9_richson-creatives-mark.png",
  interactiveFaces: {
    neutral: "/assets/aistudio/neutral_099b1d88.png",
    left: "/assets/aistudio/look-left_a1d9f27b.png",
    right: "/assets/aistudio/look-right_d7c348ec.png",
    up: "/assets/aistudio/look-up_5b77304b.png",
    down: "/assets/aistudio/look-down_c420ccce.png"
  }
};

export const CREATIVES_COORDINATES = {
  name: "Richson Creatives",
  tagline: "Brand · Publishing · Digital · IT Solutions",
  email: "info@richsoncreatives.com",
  emailDirect: "richsoncreatives@gmail.com",
  phone: "+233 530 554 498",
  phoneDisplay: "0530554498",
  phoneRaw: "233530554498",
  whatsapp: "https://wa.me/233530554498",
  location: "Accra, Ghana",
  markUrl: "/assets/media/f4fc790d9_richson-creatives-mark.png",
  portfolioDriveUrl: "https://drive.google.com/drive/folders/19jzdZa2cSr3oO34Wpks0Io5Kvp-I4mnA?usp=sharing"
};

export const SOCIAL_LINKS = [
  { name: "Facebook", handle: "richson.eric", url: "https://web.facebook.com/richson.eric/" },
  { name: "Instagram", handle: "@richsonericdarko", url: "https://www.instagram.com/richsonericdarko" },
  { name: "LinkedIn", handle: "Eric Richson Darko", url: "https://www.linkedin.com/in/richson-eric-darko-1430a794/" },
  { name: "YouTube", handle: "@richsonericdarko", url: "https://www.youtube.com/@richsonericdarko" },
  { name: "X", handle: "@richsoneric", url: "https://x.com/richsoneric" }
];

export const CREATIVES_SOCIAL_LINKS = [
  { name: "Facebook", handle: "@richsoncreatives", url: "https://www.facebook.com/richsoncreatives" },
  { name: "Instagram", handle: "@richsoncreatives", url: "https://www.instagram.com/richsoncreatives" },
  { name: "LinkedIn", handle: "Richson Creatives", url: "https://www.linkedin.com/company/richsoncreatives/" },
  { name: "WhatsApp", handle: "0530554498", url: "https://wa.me/233530554498" }
];

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Our Ecosystem",
    path: "/ecosystem",
    children: [
      { label: "Ecosystem Overview", path: "/ecosystem" },
      { label: "Richson Creatives", path: "/creatives" },
      { label: "Personal Authorship", path: "/library-store" },
      { label: "Wisefold Network", path: "/wisefold" },
      { label: "Ministry", path: "/ministry" },
      { label: "Emerging Ventures", path: "/ecosystem#emerging" }
    ]
  },
  { label: "Our Approach", path: "/approach" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" }
];

export const CREATIVES_NAV = [
  { label: "Work", path: "/creatives#work" },
  { label: "Platforms", path: "/creatives#platforms" },
  { label: "Services", path: "/creatives#services" },
  { label: "Process", path: "/creatives#process" },
  { label: "Client Books", path: "/creatives#client-books" }
];

export const PAGE_SEO: Record<string, PageSeoMeta> = {
  "/": {
    title: "Richson Global — Eric Richson Darko | Ecosystem of Ideas & Enterprise",
    description: "Explore Richson Global: Eric Richson Darko's ecosystem spanning Richson Creatives, 18 authored books, Wisefold Network, pastoral ministry, and strategic partnerships."
  },
  "/about": {
    title: "About Eric Richson Darko — Founder & Architect of Capacity | Richson Global",
    description: "Meet Eric Richson Darko: author, creative director, IT infrastructure specialist, Vice President of CORM, and Associate Pastor at CEM East Legon."
  },
  "/ecosystem": {
    title: "Our Ecosystem — Ventures, Practices & Initiatives | Richson Global",
    description: "Discover the distinct pillars of Richson Global: Richson Creatives, Personal Authorship, Wisefold Network, Pastoral Ministry, and Emerging Ventures."
  },
  "/approach": {
    title: "Our Approach — From Ideas to Institutions | Richson Global",
    description: "The five-stage institutional framework guiding Richson Global: Identify, Develop, Establish, Grow, and Institutionalise ventures designed to outlive their founder."
  },
  "/partnerships": {
    title: "Partnerships & Strategic Co-Creation | Richson Global",
    description: "Collaborate with Richson Global across strategic partnerships, business ventures, creative technology retainers, publishing, and institutional development."
  },
  "/ministry": {
    title: "Pastoral Ministry & Youth Discipleship | Eric Richson Darko",
    description: "Pastoral oversight at Charismatic Evangelistic Ministry (CEM) East Legon, pre-marital counseling, relational discernment, and biblical leadership development."
  },
  "/wisefold": {
    title: "Wisefold Network — The House of Wisdom | Richson Global",
    description: "Founded July 10, 2024 in Greater Accra, Ghana with global digital operations. Explore Wisefold Network's study rhythm, gatherings, mentorship standards, governance, and 30-year vision."
  },
  "/library-store": {
    title: "Personal Authorship & Digital Bookstore — 18 Authored Titles | Eric Richson Darko",
    description: "Browse and order 18 authored titles (15 solo and 3 co-authored) by Eric Richson Darko on relational intelligence, leadership capacity, and faith."
  },
  "/creatives": {
    title: "Richson Creatives — Brand, Publishing & Digital Engineering Studio",
    description: "Creative and technology studio in Accra, Ghana delivering brand identity, client book design & publishing services, websites, and IT systems. Call 0530554498."
  },
  "/creatives/portfolio": {
    title: "Richson Creatives Portfolio — Websites, Client Books & Enterprise Systems",
    description: "Explore Richson Creatives' client websites, 19+ client-produced books, branding systems, and IT engineering services in Accra, Ghana. Call 0530554498."
  },
  "/insights": {
    title: "Insights & Blog Nuggets — 183 Essays & 50 Daily Capsules | Richson Global",
    description: "Explore 183 essays and 50 daily insight capsules by Eric Richson Darko across Tech, Systems & Professional Boundaries (Skills Boundaries), Emotional Stewardship, Spoken Declarations, Covenant Wisdom, and Singleness & Readiness."
  },
  "/contact": {
    title: "Contact & Direct Inquiries | Richson Global",
    description: "Connect with Eric Richson Darko and Richson Global in Accra, Ghana for consulting, studio briefs, speaking engagements, book orders, and partnerships."
  }
};

export const VENTURES: Venture[] = [
  {
    id: "creatives",
    number: "01",
    name: "Richson Creatives",
    category: "Creative & Technology Solutions",
    status: "Operating venture",
    path: "/creatives",
    ctaLabel: "Visit Richson Creatives",
    description: "Richson Creatives brings together creative thinking, design excellence and technological innovation to help individuals, businesses and organisations communicate effectively, establish strong brands and solve practical problems.",
    purpose: "To make good organisations visible, credible and easy to choose.",
    focus: [
      "Brand identity and strategy",
      "Graphic design and visual communication",
      "Digital design and web development",
      "Information technology solutions",
      "Book cover design, layout and print production for clients",
      "Publishing and printing coordination for authors"
    ],
    mark: {
      kind: "contain",
      src: "/assets/media/f4fc790d9_richson-creatives-mark.png",
      alt: "Richson Creatives emblem",
      caption: "Brand · Publishing · Digital"
    }
  },
  {
    id: "authorship",
    number: "02",
    name: "Personal Authorship",
    category: "Books, Writing & Intellectual Contributions",
    status: "Authorship practice",
    path: "/library-store",
    ctaLabel: "Visit The Author's Desk",
    description: "The personal authorship of Eric Richson Darko — 18 authored titles (15 solo and 3 co-authored) exploring relationships, leadership, discipline, faith and purposeful living.",
    purpose: "To provide practical frameworks, mental clarity, and spiritual depth for readers across Africa and the globe.",
    focus: [
      "Relational intelligence & pre-marital discernment",
      "Leadership capacity & organizational governance",
      "Spiritual formation & declarative prayer architecture",
      "Youth development & self-governance"
    ],
    mark: {
      kind: "contain",
      src: "/assets/aistudio/KAY2221_35470e71.jpg",
      alt: "Eric Richson Darko authorship mark",
      caption: "18 Authored Titles"
    }
  },
  {
    id: "wisefold",
    number: "03",
    name: "Wisefold Network",
    category: "Knowledge, Reading Culture & Mentorship",
    status: "Active network initiative",
    path: "/wisefold",
    ctaLabel: "Discover Wisefold Network",
    description: "A disciplined reading community, intellectual development hub, and knowledge-sharing network cultivating deep reading habits, critical thinking, mental capacity, and continuous personal growth among leaders, professionals, and youth.",
    purpose: "To counter superficial knowledge and mental stagnation through intentional, book-by-book study and rigorous peer accountability.",
    focus: [
      "Structured Reading Culture (Intentional book-by-book reading)",
      "Intellectual Capacity Building (Knowledge synthesis & execution)",
      "Leadership & Character Development (Moral integrity & peer review)"
    ],
    mark: {
      kind: "contain",
      src: "/assets/media/dc8be5d7e_wisefold-mark.png",
      alt: "Wisefold Network emblem",
      caption: "Disciplined Reading Community"
    }
  },
  {
    id: "ministry",
    number: "04",
    name: "Ministry",
    category: "Youth Leadership, Spiritual Formation & Discipleship",
    status: "Ongoing pastoral ministry",
    path: "/ministry",
    ctaLabel: "Explore Ministry Archive",
    description: "Serving as Associate Pastor with dedicated youth pastoral oversight at Charismatic Evangelistic Ministry (CEM), East Legon. Focused on youth leadership development, spiritual discipleship, pre-marital counseling, and character formation.",
    purpose: "Equipping young adults and emerging leaders to establish kingdom character, vocational excellence, and generational fruitfulness.",
    focus: [
      "Youth ministry and spiritual discipleship",
      "Pre-marital and relational guidance",
      "Leadership development and mentoring",
      "Biblical teaching and practical spiritual insights"
    ],
    mark: {
      kind: "image",
      src: "/assets/media/5c43c1838_D00001.jpg",
      alt: "Ministry and youth discipleship",
      caption: "Youth Pastoral Leadership"
    }
  }
];

export const EMERGING_VENTURE = {
  number: "05",
  name: "Emerging Ventures & Initiatives",
  category: "New Opportunities",
  status: "Open",
  path: "/partnerships",
  ctaLabel: "Discover Emerging Opportunities",
  description: "Richson Global is designed to evolve. As new opportunities emerge and partnerships take shape, additional ventures may be introduced into the ecosystem. We remain open to strategic opportunities, partnerships and new ideas that align with our vision and values."
};

export const APPROACH_STAGES = [
  { number: "01", name: "Identify", body: "Recognising opportunities, needs and ideas with the potential to create meaningful value." },
  { number: "02", name: "Develop", body: "Transforming promising ideas into structured concepts, practical solutions and viable ventures." },
  { number: "03", name: "Establish", body: "Building the identity, operational framework, systems and resources required to give each venture a solid foundation." },
  { number: "04", name: "Grow", body: "Developing markets, partnerships, people, capabilities and sustainable revenue models." },
  { number: "05", name: "Institutionalise", body: "Establishing governance, leadership, processes and structures that enable ventures to operate effectively beyond their founders." }
];

export const CORE_VALUES = [
  { name: "Excellence", body: "The standard of the work, not the size of the audience." },
  { name: "Integrity", body: "What is promised privately is delivered publicly." },
  { name: "Innovation", body: "Better methods, not merely newer ones." },
  { name: "Creativity", body: "Imagination applied with discipline and craft." },
  { name: "Growth", body: "Measured in capacity built, not activity recorded." },
  { name: "Stewardship", body: "Resources, people and opportunities handled with care." },
  { name: "Legacy", body: "Work designed to outlive the season that produced it." }
];

export const AFFILIATIONS: Affiliation[] = [
  {
    name: "College of Relationship & Marriage (CORM)",
    role: "Vice President",
    period: "2020–Present",
    nature: "Independent institution — Eric serves as Vice President.",
    summary: "Pre-marital education, marital preservation and relational counseling frameworks. Eric also led the design and build of the institution's website.",
    url: "https://cormgh.org",
    screenshotUrl: "/assets/aistudio/corm_front_page_8d7c1759.jpg"
  },
  {
    name: "Ruth Tiso Foundation (UK/Ghana)",
    role: "Country Representative & Manager",
    period: "2020–Present",
    nature: "Independent foundation — Eric serves as country representative.",
    summary: "Country-level representation and programme management for a UK-registered foundation operating in Ghana.",
    url: null
  },
  {
    name: "Single With A Life (SWAL)",
    role: "Country Representative & Head Coordinator",
    period: "2016–2018",
    nature: "Independent organisation — former country representative.",
    summary: "Coordinated national single-adult programmes focused on purpose, readiness and relational integrity.",
    url: null
  },
  {
    name: "Charismatic Evangelistic Ministry (CEM), East Legon",
    role: "Associate Pastor · Youth Ministry",
    period: "Present",
    nature: "Independent church — Eric serves on pastoral staff.",
    summary: "Youth leadership development, spiritual discipleship and pastoral care within the East Legon assembly.",
    url: null
  }
];

export const TRACK_RECORD_KPIS: PortfolioKPI[] = [
  {
    kpi: "99.5%",
    title: "Bedisoft Systems Ltd",
    scope: "System Administration & IT Infrastructure — 7 Years",
    description: "Served as System Administrator and Graphic Designer, managing 100+ user IT infrastructure across seven years with a 99.5% network uptime record, disaster recovery protocols and QuickBooks / enterprise rollouts."
  },
  {
    kpi: "15+ SKUs",
    title: "Chocolate Mall Ltd",
    scope: "Packaging System Architecture",
    description: "Multi-SKU packaging system architecture across 15+ product lines, engineering print-ready files that cut vendor revision cycles and unified the shelf presence."
  },
  {
    kpi: "100+",
    title: "SIB Bank Liberia",
    scope: "Visual Ecosystem Redesign",
    description: "Complete visual ecosystem redesign — ATM interface screens, branded apparel and scarves, and over 100 digital marketing assets for a national banking presence."
  },
  {
    kpi: "Rebrand",
    title: "Spalce Technologies Ltd",
    scope: "Brand & Style Guide — Marketing & Branding Manager",
    description: "Delivered the full rebrand and visual style guide as Marketing & Branding Manager, clarifying the product proposition across every touchpoint."
  },
  {
    kpi: "Cloud",
    title: "Food & Agriculture Legal Services",
    scope: "Cloud Document Retrieval",
    description: "Cloud-based digital document retrieval system streamlining legal file access and operational retrieval for a legal services practice."
  },
  {
    kpi: "Web",
    title: "College of Relationship & Marriage",
    scope: "Institutional Website",
    description: "Website design and build for an independent institution where Eric serves as Vice President — programme structure, resource pathways and a responsive enrollment journey.",
    website: "https://cormgh.org",
    screenshotUrl: "/assets/aistudio/corm_front_page_8d7c1759.jpg"
  },
  {
    kpi: "Web",
    title: "Kerd Farms",
    scope: "Client Business Website",
    description: "A mobile-first website for an independent produce business — product story, farm-to-buyer narrative and a simple enquiry path.",
    website: "https://kerdfarms.com",
    screenshotUrl: "/assets/aistudio/kerdfarms_front_3e40300e.jpg"
  }
];

export const WEB_PROJECTS: WebProject[] = [
  {
    name: "College of Relationship & Marriage (CORM)",
    url: "https://cormgh.org",
    domain: "cormgh.org",
    scope: "Institutional Website",
    attribution: "Independent institution. Eric serves as its Vice President and led the website design and build via Richson Creatives.",
    summary: "An institutional home for pre-marital education and marital counseling — structured programme pages, resource pathways and a responsive enrollment journey.",
    screenshotUrl: "/assets/aistudio/corm_front_page_8d7c1759.jpg"
  },
  {
    name: "Kerd Farms",
    url: "https://kerdfarms.com",
    domain: "kerdfarms.com",
    scope: "Business & E-Commerce Website",
    attribution: "Independent client business. Website designed and engineered by Richson Creatives.",
    summary: "A produce business brought online with a clear product story, farm-to-buyer narrative and a mobile-first WhatsApp ordering and enquiry path.",
    screenshotUrl: "/assets/aistudio/kerdfarms_front_3e40300e.jpg"
  },
  {
    name: "Isaiah Adegoke",
    url: "https://www.isaiahadegoke.com",
    domain: "isaiahadegoke.com",
    scope: "Executive & Author Platform",
    attribution: "Independent client. Website designed and delivered by Richson Creatives.",
    summary: "A personal platform for a quality assurance engineer, sustainability scholar, pastor and author — clear positioning, structured content and direct booking pathways.",
    screenshotUrl: "/assets/aistudio/isaiah_front_1d115f04.jpg"
  },
  {
    name: "Richson Global",
    url: "https://richsonglobal.com",
    domain: "richsonglobal.com",
    scope: "Ecosystem & Publishing Platform",
    attribution: "Parent digital estate. Designed, engineered and maintained by Richson Creatives.",
    summary: "The flagship headquarters carrying the executive record, personal authorship digital bookstore, pastoral ministry archive, Wisefold Network, and creative studio portal.",
    screenshotUrl: "/assets/aistudio/richsonglobal_front_fc84dd72.jpg"
  }
];

export const EDUCATION_LIST: Education[] = [
  { degree: "MSc Information Communication Technology Management", school: "Presbyterian University, Ghana", year: "2025–2027" },
  { degree: "MA — Theology / Theological Studies", school: "Lucent University, Texas, USA", year: "2023–2025" },
  { degree: "Graduate Diploma in Business Management", school: "ICM, UK", year: "2011–2015" },
  { degree: "Advanced Diploma — Business Studies", school: "ICM, UK", year: "2015" },
  { degree: "Business Management & Administration Diploma", school: "Cambridge International College, UK", year: "2013–2014" },
  { degree: "Database Technology Certification", school: "IPMC, Ghana", year: "2015–2016" },
  { degree: "Charismatic Biblical & Pastoral Studies", school: "Charismatic Biblical & Pastoral College", year: "2021" },
  { degree: "WASSCE — General Science", school: "Chemu Senior High School", year: "2011" }
];

export const SKILLS_LIST = [
  "Brand Design (CorelDRAW, Photoshop, Packaging)",
  "IT Infrastructure (Security, QuickBooks, Cloud / Disaster Recovery)",
  "Administration & Operations",
  "Digital PR & Marketing",
  "Project Management",
  "Relational & Pre-Marital Counseling"
];

export const LANGUAGES_LIST = [
  "English (Fluent)",
  "Ga-Adangme (Native)",
  "Twi (Native)"
];

export const CREATIVE_SERVICES = [
  {
    title: "Branding & Visual Communication",
    body: "Identity systems built to hold across print, screen and shelf.",
    items: [
      "Brand identity development",
      "Corporate branding",
      "Logo systems",
      "Graphic design",
      "Packaging design",
      "Brand guidelines",
      "Campaign design"
    ]
  },
  {
    title: "Publishing & Editorial",
    body: "Manuscript to print-ready, and into the hands of readers.",
    items: [
      "Book cover design",
      "Book interior layout",
      "Typesetting",
      "Manuscript preparation",
      "Print-ready production",
      "Digital publishing"
    ]
  },
  {
    title: "Website & Digital Development",
    body: "Sites and platforms that carry the brand and the business.",
    items: [
      "Business websites",
      "Corporate websites",
      "Institutional websites",
      "E-commerce platforms",
      "Digital platforms",
      "Website maintenance"
    ]
  },
  {
    title: "Technology & IT Solutions",
    body: "The infrastructure underneath the work.",
    items: [
      "IT infrastructure support",
      "Systems administration",
      "Technology consulting",
      "Systems implementation",
      "Technical support"
    ]
  }
];

export const CREATIVE_PROCESS = [
  { number: "01", title: "Discovery", description: "We understand your vision, objectives, audience, and the problem you need solved." },
  { number: "02", title: "Strategy", description: "We define the approach, structure the project, and plan the creative or technical direction." },
  { number: "03", title: "Design", description: "We develop concepts, explore options, and refine the work through deliberate feedback cycles." },
  { number: "04", title: "Production", description: "We produce the final files, build the system, and prepare everything for production or launch." },
  { number: "05", title: "Delivery", description: "We deliver completed assets, documentation, and handover materials to ensure smooth ongoing operation." }
];

export const MARQUEE_QUOTES = [
  "Ideas Worth Reading. Knowledge Worth Sharing.",
  "Building Institutions That Outlive the Season That Produced Them.",
  "99.5% Network Uptime in Life: Systems Thinking for Spiritual Consistency.",
  "Weave the Altar, the Home, and the Field into One Cord.",
  "Price is the Language Your Excellence Speaks Before You Say a Word.",
  "Zeal Without Strategy is Just Suffering with Extra Steps.",
  "A Covenant Burns the Exit; A Contract Keeps One Foot Out the Door."
];

export const SOLO_BOOKS: Book[] = booksData.solo as unknown as Book[];
export const COAUTHORED_BOOKS: Book[] = booksData.coauthored as unknown as Book[];
export const ALL_BOOKS: Book[] = [...SOLO_BOOKS, ...COAUTHORED_BOOKS];
export const FEATURED_BOOKS: Book[] = ALL_BOOKS.filter(b => b.featured);
export const CLIENT_PUBLISHED_BOOKS: ClientBook[] = booksData.client as unknown as ClientBook[];
