import {
  Box,
  Cpu,
  Gamepad2,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  Terminal,
  type LucideIcon,
} from 'lucide-react';

export type ThemeName = 'luxury' | 'classic' | 'light';

export interface NavItem {
  id: string;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Service {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organisation: string;
  points: string[];
}

export interface Project {
  id: string;
  kicker: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  gradient: string;
  featured?: boolean;
  highlights?: { label: string; value: string }[];
}

export interface Recognition {
  icon: LucideIcon;
  title: string;
  description: string;
  meta: string;
}

/* ------------------------------------------------------------------ *
 * Identity
 * ------------------------------------------------------------------ */
export const profile = {
  name: 'IB Afridi',
  legalName: 'Ishaq Afridi',
  monogram: 'IA',
  headline: 'Cybersecurity Specialist, Python Developer & 3D Web Developer',
  eyebrow: 'HI, I AM ISHAQ AFRIDI — CYBERSECURITY ENTHUSIAST',
  heroTitle: { first: 'IB', second: 'Afridi' },
  summary:
    'I build security tooling with Python, run offensive research in isolated labs, and ship modern web experiences. Creator of the 13-module IB Afridi Pentest Framework (IAPF) for Kali Linux.',
  availability: {
    status: 'Open to Work',
    role: 'Jr. Pentester / SOC Analyst',
    label: 'Available for new opportunities',
  },
  location: {
    city: 'Peshawar',
    region: 'Khyber Pakhtunkhwa',
    country: 'Pakistan',
    short: 'Peshawar, KPK',
  },
  motto: 'Ethical hacking is not a crime, it’s a skill.',
  brandUrl: 'IB-AFRIDI.NETLIFY.APP',
  /**
   * Drop your own photo at `public/profile.jpg` and set this to
   * `photoUrl: '/profile.jpg'` — the monogram card is the automatic fallback.
   */
  photoUrl: 'https://i.ibb.co/mVkj8JHk/IMG-20260423-WA0122.jpg',
  /** Optional: add `public/ib-afridi-resume.pdf` and point here. */
  resumeUrl: '',
  email: 'ishaqafridi898@gmail.com',
  phone: '+92 333 2149829',
  phoneHref: '+923332149829',
} as const;

/* ------------------------------------------------------------------ *
 * Navigation
 * ------------------------------------------------------------------ */
export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', shortLabel: 'Home', icon: Sparkles },
  { id: 'about', label: 'About', shortLabel: 'About', icon: Shield },
  { id: 'services', label: 'What I Do', shortLabel: 'Services', icon: Layers },
  { id: 'experience', label: 'Experience', shortLabel: 'Work', icon: Terminal },
  { id: 'projects', label: 'Projects', shortLabel: 'Projects', icon: Box },
  { id: 'recognition', label: 'Recognition', shortLabel: 'Awards', icon: Cpu },
  { id: 'contact', label: 'Contact', shortLabel: 'Contact', icon: Mail },
];

export const dockItems: NavItem[] = [
  { id: 'home', label: 'Home', shortLabel: 'Home', icon: Sparkles },
  { id: 'about', label: 'About', shortLabel: 'About', icon: Shield },
  { id: 'projects', label: 'Projects', shortLabel: 'Projects', icon: Box },
  { id: 'experience', label: 'Experience', shortLabel: 'Work', icon: Terminal },
  { id: 'contact', label: 'Contact', shortLabel: 'Contact', icon: Mail },
];

/* ------------------------------------------------------------------ *
 * Links
 * ------------------------------------------------------------------ */
export const socials: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/afridi017', icon: Github },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ishaqafridi017',
    icon: Linkedin,
  },
  { id: 'email', label: 'Email', href: 'mailto:ishaqafridi898@gmail.com', icon: Mail },
];

export const contactRows = [
  {
    id: 'email',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    id: 'phone',
    label: 'Phone / WhatsApp',
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    icon: Phone,
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Peshawar, Khyber Pakhtunkhwa',
    href: '',
    icon: MapPin,
  },
] as const;

/* ------------------------------------------------------------------ *
 * Content
 * ------------------------------------------------------------------ */
export const stats: Stat[] = [
  { value: 21, suffix: '+', label: 'Modules Built' },
  { value: 6, suffix: '+', label: 'Projects Shipped' },
  { value: 13, suffix: '-Mod', label: 'Flagship Framework' },
  { value: 2, suffix: '', label: 'Open Source Tools' },
];

export const marqueeItems = [
  'CYBERSECURITY',
  'PYTHON',
  'PENTESTING',
  'THREE.JS',
  'KALI LINUX',
  'ETHICAL HACKING',
  'RECON • OSINT',
  'NMAP • WIRESHARK • BURP',
  'REACT THREE FIBER',
  'CAPACITOR',
  'SECURE BY DESIGN',
];

export const services: Service[] = [
  {
    number: '01',
    icon: Shield,
    title: 'PenTest Tool Development',
    description:
      'Custom Python frameworks written from scratch: multi-threaded scanners, automated reporting and Nmap integration, delivered as both CLI and interactive tooling.',
    bullets: ['IAPF • 13 modules', 'Recon Suite • 8 modules', 'Legal lab focused'],
  },
  {
    number: '02',
    icon: Search,
    title: 'Recon & OSINT Engineering',
    description:
      'IP/geo intelligence, DNS enumeration, WHOIS, subdomain discovery, banner grabbing and subnet maths — automated with timestamped logging and clean reports.',
    bullets: ['Nmap • Wireshark • Burp', 'Hydra • SQLmap • Netcat', 'Kali Linux workflow'],
  },
  {
    number: '03',
    icon: Box,
    title: '3D Web Development',
    description:
      'Immersive Three.js / React Three Fiber experiences, GSAP motion, perspective interfaces and theme systems — deployed and performance budgeted.',
    bullets: ['Three.js • R3F', 'GSAP • Framer Motion', 'Netlify deployed'],
  },
  {
    number: '04',
    icon: Smartphone,
    title: 'Android Hybrid Apps',
    description:
      'Capacitor-powered hybrid applications with touch-first controls and native builds — including the Drift King 3D game and a Media Hub player.',
    bullets: ['Capacitor • PWA', 'Touch physics', 'Playable 3D game'],
  },
];

export const experience: ExperienceItem[] = [
  {
    period: '2025 — Present',
    role: 'Independent Security Tool Developer',
    organisation: 'Open Source • GitHub @afridi017',
    points: [
      'Built two open-source Python security tools with 21+ combined modules',
      'CLI + interactive interfaces with multi-threading, auto-reporting and Nmap integration',
      'Published on GitHub with professional documentation and clean commit history',
      'Designed for legal lab environments and ethical research only',
    ],
  },
  {
    period: '2025 — Present',
    role: 'Freelance Web Developer',
    organisation: 'ib-afridi.netlify.app • Peshawar',
    points: [
      'Responsive websites and web applications for real clients',
      'Portfolio experiences using Three.js background, GSAP animation and theme switching',
      'Services: landing pages, 3D websites and Android apps',
      'Client-focused delivery with an executive, production-grade finish',
    ],
  },
  {
    period: '2026 — 2030',
    role: 'BS Cyber Security — Admission Confirmed',
    organisation: 'CECOS University, Peshawar',
    points: [
      'Core focus: penetration testing, SOC operations and digital forensics',
      'Dual-boot Kali Linux environment for practical labs',
      'Flagship frameworks already built before formal university admission',
    ],
  },
  {
    period: '2025 — Present',
    role: 'Web & App Development — SMIT Saylani Batch 6',
    organisation: 'Saylani Mass IT Training',
    points: [
      'HTML5, CSS3, Bootstrap 5, JavaScript, React, Node and MongoDB',
      'English Diploma — professional written and verbal communication',
      'Self-taught ethical hacking pathway alongside formal coursework',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'iapf',
    kicker: 'Flagship • 13 Modules',
    title: 'IB Afridi Pentest Framework (IAPF)',
    description:
      'Professional toolkit for Kali Linux: port scanner, DNS recon, WHOIS, geo-IP, subdomain enumeration, HTTP audit, hash tools, password auditor, wordlist generator, subnet calculator and full auto-recon.',
    tags: ['Python', 'Nmap', 'Multi-threaded', 'Kali'],
    href: 'https://github.com/afridi017/IB-AFRIDI-PENTEST-FRAMEWORK',
    gradient: 'from-[#1A2744] via-[#162A45] to-[#0D192C]',
    featured: true,
    highlights: [
      { label: 'Modules', value: '13' },
      { label: 'Threads', value: 'Multi' },
      { label: 'Reports', value: 'Auto' },
    ],
  },
  {
    id: 'recon',
    kicker: '8 Modules • Recon',
    title: 'IB Afridi Recon Suite',
    description:
      'IP/geo lookup, port scanner, DNS enumeration, WHOIS, banner grabbing, subnet calculator, system info and automated logging in a single menu-driven tool.',
    tags: ['OSINT', 'Automation'],
    href: 'https://github.com/afridi017/ib-afridi-recon-suite',
    gradient: 'from-[#1E293B] to-[#0F172A]',
  },
  {
    id: 'drift',
    kicker: 'Three.js • Game',
    title: 'Drift King 3D',
    description:
      'Playable 3D car drifting with realistic physics and touch controls, packaged as a native Android app through Capacitor.',
    tags: ['Three.js', 'Capacitor'],
    href: 'https://afridi017.github.io',
    gradient: 'from-[#2A1F4A] to-[#0F1229]',
  },
  {
    id: 'portfolio',
    kicker: 'Portfolio • Live',
    title: 'Personal Portfolio',
    description:
      'This site: React + TypeScript + Tailwind with a three-theme design system, scroll-reveal motion and a fully responsive layout.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    href: 'https://ib-afridi.netlify.app',
    gradient: 'from-[#1E2A3A] to-[#101A28]',
  },
  {
    id: 'media',
    kicker: 'Android • Hybrid',
    title: 'Media Hub App',
    description:
      'Hybrid Android media player built with HTML5, CSS and JavaScript on top of Capacitor for a native-feeling experience.',
    tags: ['Android', 'Media'],
    href: 'https://github.com/afridi017',
    gradient: 'from-[#1A2A3A] to-[#0E1720]',
  },
  {
    id: 'solar',
    kicker: 'R3F • Simulation',
    title: '3D Solar System',
    description:
      'Orbital mechanics visualisation built with React Three Fiber — interactive camera, accurate relative periods and clean scene composition.',
    tags: ['R3F', 'Physics'],
    href: 'https://github.com/afridi017',
    gradient: 'from-[#231A3A] to-[#0E0F1E]',
  },
];

export const aiProject = {
  kicker: 'AI • Automation • WhatsApp',
  title: 'WhatsApp AI Bot — IB Afridi Persona',
  description:
    'Node.js service built on the Levanter framework and OpenRouter API with an IB Afridi persona. Answers security questions and automates replies within clear ethical boundaries.',
  stack: ['Node.js • Levanter • OpenRouter', 'IB persona • Ethical guardrails'],
  liveLabel: 'Live persona',
};

export const recognition: Recognition[] = [
  {
    icon: Terminal,
    title: '13-Module Framework Before University',
    description:
      'Built IAPF — a professional penetration-testing toolkit for Kali Linux with port scanning, recon, hashing, wordlists and auto-reporting — before formal BS admission.',
    meta: 'Flagship • 2025',
  },
  {
    icon: Gamepad2,
    title: '3D Game → Android App',
    description:
      'Created Drift King: a fully playable 3D drifting game with realistic physics in Three.js, deployed as a native Android app via Capacitor with touch controls.',
    meta: 'Three.js • Capacitor',
  },
  {
    icon: Github,
    title: 'Active Open Source Builder',
    description:
      'Consistent personal brand across GitHub, LinkedIn and Instagram — multiple live projects, a dual-boot Kali lab and documentation that other people can actually follow.',
    meta: 'Open Source • Pakistan',
  },
];
