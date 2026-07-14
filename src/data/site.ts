import {
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Code2,
  FileSpreadsheet,
  Headphones,
  Home,
  LineChart,
  Megaphone,
  MessageSquareHeart,
  Palette,
  Search,
  ShoppingCart,
  Sparkles,
  Users,
  Video,
} from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Why MaeHive', href: '/why-maehive' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Hire a VA', href: '/hire-a-va' },
  { label: 'Become a VA', href: '/become-a-va' },
  { label: 'Contact', href: '/contact' },
];

export const services = [
  {
    title: 'Executive Assistance',
    icon: CalendarCheck,
    summary: 'Calendar ownership, inbox coordination, travel planning, meeting preparation, and executive follow-through.',
  },
  {
    title: 'Administrative Support',
    icon: ClipboardList,
    summary: 'Data entry, reporting, document preparation, SOP support, research, and day-to-day operational coordination.',
  },
  {
    title: 'Customer Service',
    icon: Headphones,
    summary: 'Inbox, chat, and helpdesk support delivered with empathy, accuracy, and clear escalation processes.',
  },
  {
    title: 'Social Media Management',
    icon: Megaphone,
    summary: 'Content calendars, community replies, scheduling, basic analytics, and brand-aligned coordination.',
  },
  {
    title: 'Lead Generation',
    icon: LineChart,
    summary: 'Prospect research, list building, CRM updates, outreach preparation, and pipeline hygiene.',
  },
  {
    title: 'E-commerce Support',
    icon: ShoppingCart,
    summary: 'Product listings, order support, customer messages, inventory updates, returns coordination, and marketplace admin.',
  },
  {
    title: 'Real Estate Assistance',
    icon: Home,
    summary: 'Listing coordination, CRM upkeep, appointment setting, document support, and transaction task tracking.',
  },
  {
    title: 'Bookkeeping Support',
    icon: FileSpreadsheet,
    summary: 'Invoice preparation, expense categorization, reconciliation support, receipt tracking, and reporting assistance.',
  },
  {
    title: 'WordPress and Website Support',
    icon: Code2,
    summary: 'Content updates, plugin coordination, landing page edits, QA checks, and routine website maintenance.',
  },
  {
    title: 'SEO Assistance',
    icon: Search,
    summary: 'Keyword research, on-page updates, metadata support, content briefs, and performance tracking assistance.',
  },
  {
    title: 'Graphic Design',
    icon: Palette,
    summary: 'Social graphics, presentation cleanups, simple brand assets, marketing collateral, and campaign visuals.',
  },
  {
    title: 'Video Editing',
    icon: Video,
    summary: 'Short-form edits, captions, trimming, repurposing, simple motion graphics, and publishing support.',
  },
];

export const industries = [
  'Coaches and consultants',
  'E-commerce brands',
  'Real estate teams',
  'SaaS and technology companies',
  'Healthcare and wellness practices',
  'Creative and marketing agencies',
  'Professional services firms',
  'Online education businesses',
];

export const processSteps = [
  {
    title: 'Tell us what support you need',
    summary: 'Share the role, schedule, must-have skills, tools, budget range, and working style you want.',
  },
  {
    title: 'We shape the role profile',
    summary: 'MaeHive clarifies expectations and prepares a focused brief so candidates are matched against the work that matters.',
  },
  {
    title: 'Meet aligned Filipino VA candidates',
    summary: 'Review curated profiles, interview your preferred candidates, and choose the assistant who fits your team.',
  },
  {
    title: 'Onboard with clarity',
    summary: 'Start with agreed responsibilities, communication rhythms, tools, and check-ins for a smooth working relationship.',
  },
];

export const whyFilipinoVAs = [
  'Strong English communication and a service-oriented working culture.',
  'Experience supporting global teams across different time zones.',
  'Adaptability across admin, operations, customer care, and digital work.',
  'A practical, collaborative approach that helps founders and teams regain focus.',
];

export const whyMaeHive = [
  {
    title: 'Role-first matching',
    icon: BriefcaseBusiness,
    text: 'We start with the outcomes you need, then identify candidates whose skills, schedule, and work style fit the role.',
  },
  {
    title: 'Professional candidate experience',
    icon: Users,
    text: 'MaeHive is designed to attract serious Filipino remote professionals who want long-term, respectful client relationships.',
  },
  {
    title: 'Operational clarity',
    icon: CheckCircle2,
    text: 'From responsibilities to tools and reporting rhythms, we help turn “I need help” into a practical role that can succeed.',
  },
  {
    title: 'Human, responsive support',
    icon: MessageSquareHeart,
    text: 'Clients and VAs should both feel informed. We keep the process approachable, transparent, and grounded.',
  },
];

export const vaProfiles = [
  {
    name: 'Executive Operations VA',
    location: 'Philippines',
    focus: 'Inbox, calendar, travel, meeting notes',
    tools: 'Google Workspace, Microsoft 365, Slack, Asana',
    note: 'Sample profile only. Candidate details will depend on active applicants.',
  },
  {
    name: 'E-commerce Support VA',
    location: 'Philippines',
    focus: 'Product listings, customer messages, order tracking',
    tools: 'Shopify, Amazon Seller Central, Zendesk, Canva',
    note: 'Sample profile only. Candidate details will depend on active applicants.',
  },
  {
    name: 'Marketing Support VA',
    location: 'Philippines',
    focus: 'Social scheduling, content repurposing, light design',
    tools: 'Canva, Meta Business Suite, Buffer, WordPress',
    note: 'Sample profile only. Candidate details will depend on active applicants.',
  },
];

export const faqs = [
  {
    question: 'What kinds of businesses does MaeHive support?',
    answer:
      'MaeHive is built for international founders, operators, and teams that need reliable remote support across administration, customer service, marketing, e-commerce, real estate, bookkeeping, and website operations.',
  },
  {
    question: 'Are the testimonials and statistics on this site real?',
    answer:
      'Any testimonials, client logos, contact details, and statistics marked as placeholders are intentionally labeled until MaeHive replaces them with verified information.',
  },
  {
    question: 'Can I hire part-time or full-time?',
    answer:
      'Yes. The Hire a VA form supports part-time, full-time, and project-based needs so MaeHive can understand the right working arrangement before matching candidates.',
  },
  {
    question: 'Do you handle payroll or employment compliance?',
    answer:
      'This website does not claim a specific payroll, employer-of-record, or compliance model. MaeHive should confirm the engagement structure directly with each client.',
  },
  {
    question: 'How quickly can a VA start?',
    answer:
      'Start dates depend on the role, availability, screening process, and onboarding requirements. The form asks for a desired start date so MaeHive can plan accordingly.',
  },
];

export const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'MaeHive | Smart Filipino Support for Growing Businesses',
    description:
      'Hire skilled Filipino virtual assistants for executive support, admin, customer service, marketing, e-commerce, real estate, bookkeeping, and more.',
  },
  '/services': {
    title: 'Services | MaeHive Filipino Virtual Assistant Agency',
    description:
      'Explore MaeHive virtual assistant services including executive assistance, admin support, customer service, social media, lead generation, bookkeeping, SEO, and design.',
  },
  '/why-maehive': {
    title: 'Why MaeHive | Premium Filipino VA Matching',
    description:
      'Learn why international businesses choose MaeHive for role-first matching, professional Filipino VA talent, and clear remote-work support.',
  },
  '/how-it-works': {
    title: 'How It Works | Hire a Filipino VA with MaeHive',
    description:
      'See MaeHive’s simple four-step process for defining your role, meeting aligned Filipino VA candidates, and onboarding with clarity.',
  },
  '/about': {
    title: 'About MaeHive | Filipino Virtual Assistant Agency',
    description:
      'MaeHive connects growing businesses with skilled Filipino virtual assistants through a professional, respectful, and practical matching process.',
  },
  '/hire-a-va': {
    title: 'Hire a VA | MaeHive',
    description:
      'Tell MaeHive about the virtual assistant role you need, including skills, schedule, budget range, responsibilities, and desired start date.',
  },
  '/become-a-va': {
    title: 'Become a VA | MaeHive',
    description:
      'Apply to join MaeHive as a Filipino virtual assistant and share your skills, experience, software knowledge, availability, and portfolio.',
  },
  '/contact': {
    title: 'Contact MaeHive | Filipino VA Support',
    description:
      'Contact MaeHive about hiring a Filipino virtual assistant, applying as a VA, or preparing a future agency partnership inquiry.',
  },
};

export const statsPlaceholders = [
  { value: 'Placeholder', label: 'Client satisfaction metric' },
  { value: 'Placeholder', label: 'Average matching timeline' },
  { value: 'Placeholder', label: 'Verified VA network size' },
];

export const trustPillars = [
  { icon: Sparkles, label: 'Premium candidate presentation' },
  { icon: Building2, label: 'Built for international teams' },
  { icon: BookOpenCheck, label: 'Clear role expectations' },
  { icon: BarChart3, label: 'Process-ready support' },
];
