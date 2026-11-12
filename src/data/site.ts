import type { IconType } from 'react-icons'
import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { TbApi } from 'react-icons/tb'

/* ---------------------------------------------------------------------------
 * EDIT THIS FILE to make the portfolio yours.
 * Anything marked "PLACEHOLDER" is sample content — replace it with real info.
 * ------------------------------------------------------------------------- */

export const site = {
  name: 'Zain',
  initials: 'Z',
  title: 'Web Developer',
  tagline: 'Building Digital Experiences That Make an Impact.',
  eyebrow: 'WEB DEVELOPER',
  intro:
    "I'm a passionate Web Developer specializing in building modern, responsive, and user-friendly web applications.",
  about:
    "I'm a dedicated web developer who enjoys transforming ideas into beautiful, functional digital experiences. I love exploring new technologies, solving problems, and building applications that deliver meaningful user experiences.",
  available: true,
  profileImage: '/zain.jpeg', // PLACEHOLDER — drop your photo at public/profile.jpg and change this to '/profile.jpg'
  resume: '/resume.pdf', // PLACEHOLDER — replace public/resume.pdf with your real resume
  resumeFileName: 'Zain-Resume.pdf',

  // PLACEHOLDER contact details — replace with your own.
  email: 'zaynmcapsg@gmail.com',
  location: 'Chennai',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/in/zainul-abideen-03b965383',
    instagram: 'https://www.instagram.com/',
  },

  // Contact form delivery — see .env.example
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT as string | undefined,
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY as string | undefined,
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const

/** Every section id observed for the active nav indicator. */
export const sectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'services',
  'pricing',
  'contact',
] as const

export interface Skill {
  name: string
  icon: IconType
  color: string
}
export interface SkillGroup {
  title: string
  blurb: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    blurb: 'Interfaces that feel fast, clear and alive.',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#B08A00' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'React.js', icon: SiReact, color: '#1689A3' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#24243A' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#0891B2' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    title: 'Backend',
    blurb: 'Secure, well-structured APIs and services.',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express.js', icon: SiExpress, color: '#24243A' },
      { name: 'REST APIs', icon: TbApi, color: '#7465D8' },
    ],
  },
  {
    title: 'Database',
    blurb: 'Reliable data layers, relational and document.',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Firebase', icon: SiFirebase, color: '#D07F00' },
      { name: 'Supabase', icon: SiSupabase, color: '#249E68' },
    ],
  },
  {
    title: 'Tools',
    blurb: 'The everyday kit for shipping quality work.',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#24243A' },
      { name: 'VS Code', icon: VscVscode, color: '#0078D4' },
      { name: 'Figma', icon: SiFigma, color: '#A259FF' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
]

export const technologyCount = skillGroups.reduce((n, g) => n + g.skills.length, 0)

export const categories = ['All', 'Web Applications', 'UI/UX', 'Frontend', 'Full Stack'] as const
export type Category = (typeof categories)[number]

export type PreviewKind = 'dashboard' | 'budget' | 'table' | 'shop' | 'kanban' | 'portfolio'

export interface Project {
  title: string
  description: string
  stack: string[]
  categories: Exclude<Category, 'All'>[]
  preview: PreviewKind
  liveUrl?: string // leave empty until you have a live demo
  repoUrl?: string // falls back to your GitHub profile when empty
}

// PLACEHOLDER projects — example entries. Replace titles, descriptions, stacks and links with your real work.
export const projects: Project[] = [
  {
    title: 'Personal Finance Management Dashboard',
    description:
      'A clean dashboard to track income, expenses and savings goals with clear charts and category breakdowns.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    categories: ['Web Applications', 'Full Stack'],
    preview: 'dashboard',
  },
  {
    title: 'Family Budget Management Application',
    description:
      'Shared household budgeting with monthly limits, recurring bills and a simple view of where the money goes.',
    stack: ['React', 'Express', 'MongoDB'],
    categories: ['Web Applications', 'Full Stack'],
    preview: 'budget',
  },
  {
    title: 'Employee Management System',
    description:
      'Manage employee records, roles and departments with searchable tables and role-based access.',
    stack: ['Next.js', 'Node.js', 'MySQL'],
    categories: ['Web Applications', 'Full Stack'],
    preview: 'table',
  },
  {
    title: 'E-commerce Website',
    description:
      'A responsive storefront with product browsing, filtering, a cart and a streamlined checkout flow.',
    stack: ['Next.js', 'Tailwind CSS', 'Supabase'],
    categories: ['Frontend', 'Full Stack'],
    preview: 'shop',
  },
  {
    title: 'Task Management Application',
    description:
      'A kanban-style board with drag-friendly columns, due dates and a focused, distraction-free interface.',
    stack: ['React', 'Firebase', 'Framer Motion'],
    categories: ['Web Applications', 'UI/UX'],
    preview: 'kanban',
  },
  {
    title: 'Portfolio Website',
    description:
      'A glassmorphism personal brand site with smooth motion, light and dark themes, and a working contact form.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    categories: ['Frontend', 'UI/UX'],
    preview: 'portfolio',
  },
]

export interface TimelineItem {
  type: 'work' | 'education'
  title: string
  org: string
  period: string
  points: string[]
  achievement?: string
}

// PLACEHOLDER timeline — replace with your real experience and education.
export const timeline: TimelineItem[] = [
  {
    type: 'work',
    title: 'Web Developer',
    org: 'Your Office Partners',
    period: '2026 — Present',
    points: [
      'Developed responsive and dynamic web applications using MongoDB, Express.js, React.js, and Node.js.',
      'Built interactive and user-friendly frontend interfaces using React.js, JavaScript, HTML5, and CSS3.',
      'Integrated frontend applications with backend services and APIs.',
    ],
    // achievement: 'Add a major achievement here, ideally with a measurable result.',
  },
  {
    type: 'work',
    title: 'Front-end Developer',
    org: 'Arclane Solutions',
    period: '2025 — 2026',
    points: [
      'Built interactive and user-friendly frontend interfaces using React.js, JavaScript, HTML5, and CSS3.',
      'Managed databases, performed CRUD operations, and handled data storage using MongoDB.',
    ],
  },
  {
    type: 'work',
    title: 'Linux Engineer',
    org: 'Techriffs Info Systems',
    period: '2025',
    points: [
      'Assisted in Linux server administration, configuration, monitoring, and maintenance.',
      'Worked with Linux command-line tools and shell scripting for routine administrative tasks.',
      'Gained hands-on experience with DevOps practices and CI/CD pipeline fundamentals.',
    ],
  },
  {
    type: 'education',
    title: 'Master of Computer Applications',
    org: 'PSG College of Arts and Science',
    period: '2018 — 2020',
    points: ['Domain of Computer Science and Technology'],
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Applications',
    org: 'Khadir Mohideen College',
    period: '2018 — 2020',
    points: ['Domain of Computer Science and Technology'],
  },
]

export const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern websites.',
    icon: 'globe',
    tone: 'lavender',
  },
  {
    title: 'Frontend Development',
    description: 'Creating interactive and beautiful user interfaces.',
    icon: 'layout',
    tone: 'sky',
  },
  {
    title: 'Backend Development',
    description: 'Developing secure APIs and backend systems.',
    icon: 'server',
    tone: 'mint',
  },
  {
    title: 'UI Implementation',
    description: 'Transforming designs into pixel-perfect web interfaces.',
    icon: 'ruler',
    tone: 'lavender',
  },
] as const

export const heroBadges = [
  { label: 'React', icon: SiReact, color: '#1689A3', pos: 'left-[-6%] top-[14%]', delay: '0s' },
  { label: 'TypeScript', icon: SiTypescript, color: '#3178C6', pos: 'right-[-4%] top-[6%]', delay: '1.2s' },
  { label: 'Node.js', icon: SiNodedotjs, color: '#5FA04E', pos: 'right-[-8%] bottom-[26%]', delay: '2.1s' },
  { label: 'Tailwind', icon: SiTailwindcss, color: '#0891B2', pos: 'left-[-8%] bottom-[12%]', delay: '0.6s' },
]

/* ---------------------------------------------------------------------------
 * PRICING — PLACEHOLDER prices and features. Set your own before publishing.
 * ------------------------------------------------------------------------- */
export const currency = '₹'

export interface Plan {
  name: string
  tagline: string
  price: string // shown after the currency symbol
  priceNote: string
  features: string[]
  popular?: boolean
}

export const plans: Plan[] = [
  {
    name: 'Landing Website',
    tagline: 'A single, high-impact page to launch an idea or promote one offer.',
    price: '4,999',
    priceNote: 'one-time',
    features: [
      '1 responsive landing page',
      'Modern, custom design',
      'Contact / enquiry form',
      'Basic SEO setup',
      'Fast loading & mobile friendly',
      '2 rounds of revisions',
    ],
  },
  {
    name: 'Business Website',
    tagline: 'A complete multi-page site that builds trust and brings in leads.',
    price: '7,999',
    priceNote: 'one-time',
    popular: true,
    features: [
      'Up to 6 pages',
      'Custom design with animations',
      'Contact form & WhatsApp / map integration',
      'On-page SEO & Google Analytics',
      'Content management guidance',
      '3 rounds of revisions',
    ],
  },
  {
    name: 'E-commerce Website',
    tagline: 'An online store ready to showcase products and take orders.',
    price: '19,999',
    priceNote: 'starting at',
    features: [
      'Product catalogue & categories',
      'Cart & checkout flow',
      'Payment gateway integration',
      'Order & inventory dashboard',
      'SEO-ready product pages',
      '4 rounds of revisions',
    ],
  },
]
