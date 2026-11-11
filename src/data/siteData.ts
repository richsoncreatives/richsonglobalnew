/**
 * Eric Richson Darko: Executive & Creative Archive
 * Comprehensive Data Store
 * All media mapped to local self-hosted assets; all Base44 signatures removed.
 */

import booksData from './books.json';
import insightsData from './insights.json';

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
}

export interface WebProject {
  name: string;
  url: string;
  scope: string;
  attribution: string;
  summary: string;
}

export interface Affiliation {
  name: string;
  role: string;
  period: string;
  nature: string;
  summary: string;
  url?: string | null;
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

export const SITE_COORDINATES = {
  founderName: "Eric Richson Darko",
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
  avatarUrl: "/assets/media/f04760bf2_kaypic1111.png",
  portraitUrl: "/assets/media/d45d6e161_KAY2221.jpg",
  heroPortrait: "/assets/media/ad0e24de6_KAYDD1.jpg",
  formalPortrait: "/assets/media/5c43c1838_D00001.jpg"
};

export const CREATIVES_COORDINATES = {
  email: "info@richsoncreatives.com",
  emailDirect: "richsoncreatives@gmail.com",
  phone: "+233 530 554 498",
  phoneRaw: "233530554498",
  whatsapp: "https://wa.me/233530554498",
  location: "Accra, Ghana"
};

export const SOCIAL_LINKS = [
  { name: "Facebook", handle: "richson.eric", url: "https://web.facebook.com/richson.eric/" },
  { name: "Instagram", handle: "@richsonericdarko", url: "https://www.instagram.com/richsonericdarko" },
  { name: "LinkedIn", handle: "Eric Richson Darko", url: "https://www.linkedin.com/in/richson-eric-darko-1430a794/" },
  { name: "YouTube", handle: "@richsonericdarko", url: "https://www.youtube.com/@richsonericdarko" },
  { name: "X", handle: "@richsoneric", url: "https://x.com/richsoneric" }
];

export const CREATIVES_SOCIAL_LINKS = [
  { name: "Instagram", url: "https://www.instagram.com/richsoncreatives" },
  { name: "Facebook", url: "https://www.facebook.com/richsoncreatives" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/richsoncreatives/" },
  { name: "WhatsApp", url: "https://wa.me/233530554498" },
  { name: "Email", url: "mailto:info@richsoncreatives.com" }
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
      { label: "Wisefold Network", path: "/ecosystem#wisefold" },
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
  { label: "Services", path: "/creatives#services" },
  { label: "Process", path: "/creatives#process" },
  { label: "Start a Project", path: "/creatives#start" }
];

export const VENTURES: Venture[] = [
  {
    id: "creatives",
    number: "01",
    name: "Richson Creatives",
    category: "Creative & Technology Solutions",
    status: "Operating venture",
    path: "/creatives",
    ctaLabel: "Explore Richson Creatives",
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
      kind: "label",
      label: "RC",
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
    description: "The personal authorship of Eric Richson Darko — original titles, co-authored works and written reflections on relationships, leadership, discipline, faith and purposeful living. Eighteen published titles exploring relational intelligence, executive capacity, and kingdom values.",
    purpose: "To provide practical frameworks, mental clarity, and spiritual depth for readers across Africa and the globe.",
    focus: [
      "Relational intelligence & pre-marital discernment",
      "Leadership capacity & organizational governance",
      "Spiritual formation & declarative prayer architecture",
      "Youth development & self-governance"
    ],
    mark: {
      kind: "label",
      label: "ED",
      caption: "Authorship & Publishing"
    }
  },
  {
    id: "wisefold",
    number: "03",
    name: "Wisefold Network",
    category: "Knowledge, Reading Culture & Mentorship",
    status: "Active network initiative",
    path: "/ecosystem#wisefold",
    ctaLabel: "Discover Wisefold Network",
    description: "A disciplined reading community, intellectual development hub, and knowledge-sharing network cultivating deep reading habits, critical thinking, mental capacity, and continuous personal growth among leaders, professionals, and youth.",
    purpose: "To counter superficial knowledge and mental stagnation through intentional, book-by-book study and rigorous peer accountability.",
    focus: [
      "Structured Reading Culture (Intentional book-by-book reading)",
      "Intellectual Capacity Building (Knowledge synthesis & execution)",
      "Leadership & Character Development (Moral integrity & peer review)"
    ],
    mark: {
      kind: "label",
      label: "WN",
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
      kind: "label",
      label: "CEM",
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
    url: "https://cormgh.org"
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
    website: "https://cormgh.org"
  },
  {
    kpi: "Web",
    title: "Kerd Farms",
    scope: "Client Business Website",
    description: "A mobile-first website for an independent produce business — product story, farm-to-buyer narrative and a simple enquiry path.",
    website: "https://kerdfarms.com"
  }
];

export const WEB_PROJECTS: WebProject[] = [
  {
    name: "College of Relationship & Marriage (CORM)",
    url: "https://cormgh.org",
    scope: "Institutional Website",
    attribution: "Independent institution. Eric serves as its Vice President and led the website design and build.",
    summary: "An institutional home for pre-marital education and marital counseling — structured programme pages, resource pathways and a responsive enrollment journey."
  },
  {
    name: "Kerd Farms",
    url: "https://kerdfarms.com",
    scope: "Business Website",
    attribution: "Independent client business. Website designed and built by Richson Creatives.",
    summary: "A produce business brought online with a clear product story, farm-to-buyer narrative and a mobile-first enquiry path."
  },
  {
    name: "Richson Global",
    url: "https://richsonglobal.com",
    scope: "Personal Brand & Publishing Platform",
    attribution: "Owned platform. Designed, built and maintained in-house.",
    summary: "The parent estate: a personal headquarters carrying the professional record, the digital bookstore, the ministry archive and this studio portal."
  },
  {
    name: "Isaiah Adegoke",
    url: "https://www.isaiahadegoke.com",
    scope: "Client Website",
    attribution: "Independent client. Website delivered by Richson Creatives.",
    summary: "A personal platform delivered as a client project — clear positioning, structured content and a direct enquiry path, built to be maintained without a developer."
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

export const TECH_INSIGHTS: InsightArticle[] = insightsData.tech as unknown as InsightArticle[];
export const RELATIONSHIP_INSIGHTS: InsightArticle[] = insightsData.relationships as unknown as InsightArticle[];
export const LEADERSHIP_INSIGHTS: InsightArticle[] = insightsData.leadership as unknown as InsightArticle[];
export const FAITH_INSIGHTS: InsightArticle[] = insightsData.faith as unknown as InsightArticle[];
export const CREATIVE_INSIGHTS: InsightArticle[] = insightsData.creative as unknown as InsightArticle[];
export const ALL_INSIGHTS: InsightArticle[] = [...TECH_INSIGHTS, ...RELATIONSHIP_INSIGHTS, ...LEADERSHIP_INSIGHTS, ...FAITH_INSIGHTS, ...CREATIVE_INSIGHTS];
export const CAPACITY_QUOTES: string[] = insightsData.quotes as string[];
