export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  tags: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  year: string;
  status: "completed" | "in-progress" | "archived";
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export const projects: Project[] = [
  {
    slug: "nexus-ai-platform",
    title: "Nexus AI Platform",
    description:
      "A full-stack AI-powered analytics platform that processes real-time data streams and generates actionable business insights using machine learning models.",
    longDescription:
      "Nexus AI Platform is an enterprise-grade analytics solution built to handle millions of data points per second. It leverages cutting-edge machine learning models to surface patterns and anomalies in real-time, enabling businesses to make data-driven decisions faster than ever. The platform features a drag-and-drop dashboard builder, automated report generation, and a natural language query interface that lets non-technical users explore data without writing SQL.",
    image: "https://cdn.dribbble.com/userupload/43507873/file/original-6ccde408dbd36f1544fab618c6130f40.png?resize=752x&vertical=center",
    category: "Full Stack",
    tags: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Redis", "TensorFlow", "Docker"],
    features: [
      "Real-time data stream processing with sub-100ms latency",
      "Natural language query interface powered by GPT-4",
      "Drag-and-drop dashboard builder with 40+ chart types",
      "Automated anomaly detection and alerting",
      "Role-based access control and audit logging",
      "One-click PDF/CSV report export",
    ],
    liveUrl: "https://nexus-ai.demo",
    githubUrl: "https://github.com/alexdev/nexus-ai",
    year: "2024",
    status: "completed",
  },
  {
    slug: "orbit-design-system",
    title: "Orbit Design System",
    description:
      "A comprehensive React component library and design system with 80+ accessible components, dark mode support, and full TypeScript coverage.",
    longDescription:
      "Orbit is a production-ready design system built for teams that care about accessibility and developer experience. Every component is built from the ground up with WCAG 2.1 AA compliance, keyboard navigation, and screen reader support. The library ships with a powerful theming engine that supports unlimited color palettes, a Figma plugin for design-to-code handoff, and comprehensive Storybook documentation with interactive examples.",
    image: "https://miro.medium.com/1*UPtMMr8C5HRNQHjMHlizSg.gif",
    category: "Frontend",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "Tailwind CSS", "Vitest"],
    features: [
      "80+ fully accessible React components",
      "WCAG 2.1 AA compliant with full keyboard navigation",
      "Powerful CSS-in-JS theming engine",
      "Figma plugin for seamless design-to-code handoff",
      "100% TypeScript with strict mode",
      "Comprehensive Storybook documentation",
    ],
    liveUrl: "https://orbit-ds.demo",
    githubUrl: "https://github.com/alexdev/orbit-ds",
    year: "2024",
    status: "completed",
  },
  {
    slug: "pulse-ecommerce",
    title: "Pulse E-Commerce",
    description:
      "A high-performance e-commerce platform with AI-powered product recommendations, real-time inventory management, and a seamless checkout experience.",
    longDescription:
      "Pulse is a modern e-commerce platform engineered for speed and conversion. Built on Next.js with edge rendering, it achieves sub-second page loads even on mobile networks. The AI recommendation engine analyzes browsing behavior and purchase history to surface personalized product suggestions, increasing average order value by 34% in A/B tests. The platform integrates with Stripe for payments, Algolia for search, and Sanity CMS for content management.",
    image: "https://cdn.prod.website-files.com/63ed035045659239fcdacc78/64109ac324b18f29ad28f164_U7HWy8P3tDgpBLHcDwwGYp1qhN79h5eYNr5aQqSFdiLvmWJXZd35iRNitJwcNrp_12CGc52IenPbfLFiT_VWMoSMrUhx72kVPtX7j-bl5yS-AAyMhZBZRHJmNy7C-YqXDLtx4sj7IHp-64u1LAdVkWc.png",
    category: "Full Stack",
    tags: ["Next.js", "Stripe", "Algolia", "Sanity CMS", "Prisma", "PostgreSQL"],
    features: [
      "AI-powered personalized product recommendations",
      "Real-time inventory tracking across multiple warehouses",
      "One-click checkout with Stripe and Apple/Google Pay",
      "Advanced search with Algolia (filters, facets, typo-tolerance)",
      "Headless CMS with live preview",
      "Multi-currency and multi-language support",
    ],
    liveUrl: "https://pulse-shop.demo",
    githubUrl: "https://github.com/alexdev/pulse-ecommerce",
    year: "2023",
    status: "completed",
  },
  {
    slug: "devflow-cli",
    title: "DevFlow CLI",
    description:
      "A powerful developer productivity CLI tool that automates repetitive workflows, scaffolds projects, and integrates with GitHub, Jira, and Slack.",
    longDescription:
      "DevFlow CLI is the Swiss Army knife for modern development teams. It eliminates the repetitive overhead of project setup, branch management, and cross-tool communication. With a single command, developers can scaffold a new project with their team's preferred stack, create a linked GitHub branch and Jira ticket, and notify the team on Slack. The plugin architecture allows teams to build custom commands tailored to their specific workflows.",
    image: "https://uploads.toptal.io/blog/image/125259/toptal-blog-image-1516868261509-87c208749f5430932e4541a0a71033aa.png",
    category: "Backend",
    tags: ["Node.js", "TypeScript", "Commander.js", "GitHub API", "Jira API", "Slack API"],
    features: [
      "One-command project scaffolding with custom templates",
      "Automated GitHub branch + Jira ticket creation",
      "Slack integration for team notifications",
      "Interactive prompts with fuzzy search",
      "Plugin architecture for custom commands",
      "Cross-platform support (macOS, Linux, Windows)",
    ],
    liveUrl: "https://devflow-cli.demo",
    githubUrl: "https://github.com/alexdev/devflow-cli",
    year: "2023",
    status: "completed",
  },
  {
    slug: "lumina-social",
    title: "Lumina Social",
    description:
      "A creator-focused social platform with short-form video, collaborative spaces, and a monetization suite for independent content creators.",
    longDescription:
      "Lumina is a next-generation social platform built with creators at the center. Unlike ad-driven platforms, Lumina puts monetization tools directly in creators' hands — from subscriptions and tipping to digital product sales and paid communities. The platform uses WebRTC for live streaming, HLS for video delivery, and a custom recommendation algorithm that prioritizes content quality over engagement bait.",
    image: "https://images.ctfassets.net/m9n8o4ceoyuw/3Y6SmXXE6Sg3ZU1gowHQgt/619c7094667ac28490c58d4182d33074/creator_calculator_content_creators.png",
    category: "Full Stack",
    tags: ["Next.js", "WebRTC", "HLS.js", "Socket.io", "MongoDB", "AWS S3", "FFmpeg"],
    features: [
      "Short-form and long-form video with adaptive HLS streaming",
      "Live streaming with real-time chat and reactions",
      "Creator monetization: subscriptions, tips, digital products",
      "Collaborative spaces with shared editing",
      "Custom recommendation algorithm",
      "Mobile apps for iOS and Android",
    ],
    liveUrl: "https://lumina-social.demo",
    githubUrl: "https://github.com/alexdev/lumina-social",
    year: "2023",
    status: "in-progress",
  },
  {
    slug: "cryptovault-wallet",
    title: "CryptoVault Wallet",
    description:
      "A non-custodial multi-chain crypto wallet with DeFi integrations, portfolio tracking, and hardware wallet support.",
    longDescription:
      "CryptoVault is a security-first, non-custodial wallet that gives users full control of their digital assets across 15+ blockchain networks. The wallet integrates with major DeFi protocols for swapping, lending, and yield farming directly from the interface. Hardware wallet support via Ledger and Trezor ensures maximum security for large holdings. The portfolio tracker aggregates positions across all connected wallets and provides tax reporting exports.",
    image: "https://s3-alpha.figma.com/hub/file/2929649704/2e84ca26-f700-4a0c-86c4-f2d4bb1fc909-cover.png",
    category: "Web3",
    tags: ["React", "ethers.js", "wagmi", "Solidity", "Hardhat", "The Graph", "IPFS"],
    features: [
      "Non-custodial multi-chain wallet (15+ networks)",
      "Built-in DEX aggregator for best swap rates",
      "DeFi dashboard: lending, staking, yield farming",
      "Ledger and Trezor hardware wallet support",
      "Portfolio tracker with P&L and tax reports",
      "NFT gallery with floor price tracking",
    ],
    liveUrl: "https://cryptovault.demo",
    githubUrl: "https://github.com/alexdev/cryptovault",
    year: "2022",
    status: "completed",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "Frontend", icon: "⚛️" },
  { name: "TypeScript", level: 92, category: "Frontend", icon: "🔷" },
  { name: "Tailwind CSS", level: 90, category: "Frontend", icon: "🎨" },
  { name: "Framer Motion", level: 85, category: "Frontend", icon: "✨" },
  { name: "Vue.js", level: 75, category: "Frontend", icon: "💚" },
  // Backend
  { name: "Node.js", level: 90, category: "Backend", icon: "🟢" },
  { name: "Python / FastAPI", level: 82, category: "Backend", icon: "🐍" },
  { name: "PostgreSQL", level: 85, category: "Backend", icon: "🐘" },
  { name: "Redis", level: 78, category: "Backend", icon: "🔴" },
  { name: "GraphQL", level: 80, category: "Backend", icon: "◈" },
  // DevOps
  { name: "Docker / K8s", level: 80, category: "DevOps", icon: "🐳" },
  { name: "AWS", level: 78, category: "DevOps", icon: "☁️" },
  { name: "CI/CD (GitHub Actions)", level: 85, category: "DevOps", icon: "⚙️" },
  { name: "Terraform", level: 70, category: "DevOps", icon: "🏗️" },
  // Web3
  { name: "Solidity", level: 72, category: "Web3", icon: "⟠" },
  { name: "ethers.js / wagmi", level: 78, category: "Web3", icon: "🔗" },
];

export const skillCategories = ["All", "Frontend", "Backend", "DevOps", "Web3"];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/alexdev", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/alexdev", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com/alexdev", icon: "Twitter" },
  { label: "Email", href: "mailto:alex@alexdev.io", icon: "Mail" },
];
