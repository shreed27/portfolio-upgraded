/* eslint-disable @typescript-eslint/no-unused-vars */
import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import Python from '@/components/technologies/Python';
import GCP from '@/components/technologies/GCP';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
  featuredHighlights?: string[];
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'GoodFin (YC W22)',
    position: 'AI Engineer Intern',
    location: 'San Francisco, California, USA',
    image: '/assets/logo.png',
    description: [
      'Engineered a low-latency RAG Voice Agent using OpenAI Realtime API & Pinecone, optimizing WebRTC audio pipelines to reduce inference latency by 40%.',
      'Serving 10k+ documents with sub-second retrieval accuracy using vector embeddings and hybrid search.',
    ],
    startDate: 'January 2026',
    endDate: 'Present',
    website: 'https://goodfin.com',
    technologies: [
      { name: 'Python', href: 'https://python.org', icon: <Python /> },
      { name: 'TypeScript', href: 'https://typescriptlang.org', icon: <TypeScript /> },
      { name: 'React', href: 'https://react.dev', icon: <ReactIcon /> },
      { name: 'Next.js', href: 'https://nextjs.org', icon: <NextJs /> },
      { name: 'AWS', href: 'https://aws.amazon.com', icon: <AWS /> },
      { name: 'GCP', href: 'https://cloud.google.com', icon: <GCP /> },
      { name: 'MongoDB', href: 'https://www.mongodb.com', icon: <MongoDB /> },
      { name: 'PostgreSQL', href: 'https://www.postgresql.org', icon: <PostgreSQL /> },
    ],
    featuredHighlights: [
      'Engineered a low-latency RAG voice agent with OpenAI Realtime API and Pinecone, cutting inference latency by 40%.',
      'Built retrieval pipelines for 10k+ documents with sub-second search and production-ready ranking behavior.',
      'Improved WebRTC audio reliability and end-to-end agent responsiveness for real-time customer interactions.',
    ],
  },
  {
    isCurrent: false,
    company: 'Amazon x Extern',
    position: 'Data Strategy & ML Extern',
    location: 'New York, USA (Remote)',
    image: '/assets/logo.png',
    description: [
      'Architected and deployed a cloud-native NLP intelligence engine on GCP (Vertex AI & GKE) to synthesize 5,000+ unstructured data points.',
      'Identified attrition drivers and delivered a strategy briefing that optimized efficiency for Amazon Fulfillment Centers.',
    ],
    startDate: 'November 2025',
    endDate: 'December 2025',
    website: 'https://amazon.com',
    technologies: [
      { name: 'GCP', href: 'https://cloud.google.com', icon: <GCP /> },
      { name: 'Vertex AI', href: 'https://cloud.google.com/vertex-ai', icon: <GCP /> },
      { name: 'GKE', href: 'https://cloud.google.com/kubernetes-engine', icon: <GCP /> },
    ],
    featuredHighlights: [
      'Architected an NLP intelligence engine on Vertex AI and GKE to synthesize 5,000+ unstructured signals.',
    ],
  },
  {
    isCurrent: false,
    company: 'Mega Forte',
    position: 'AI Developer Intern',
    location: 'Singapore (Hybrid)',
    image: '/assets/logo.png',
    description: [
      'Revitalized a 20-year-old legacy assessment engine and architected a custom Handwritten OCR pipeline (96% accuracy) to digitize physical answer sheets.',
      'Engineered a tri-algorithm ensemble logic to benchmark digitized inputs against model keys, automating high-fidelity performance summaries.',
    ],
    startDate: 'July 2025',
    endDate: 'October 2025',
    website: '#',
    technologies: [
      { name: 'Python', href: 'https://python.org', icon: <Python /> },
      { name: 'OCR', href: '#', icon: <Python /> },
      { name: 'Computer Vision', href: '#', icon: <Python /> },
    ],
  },
  {
    isCurrent: false,
    company: 'PipRaiser',
    position: 'Capital Market Analyst Intern',
    location: 'Bangalore, India (Hybrid)',
    image: '/assets/logo.png',
    description: [
      'Generated a 165.6% absolute return ($10K → $26.5K) with a 2.9 Sharpe and 3.8 Sortino ratio.',
      'Synthesized macro overlays with order flow analysis across multi-asset classes, while enforcing a systematic 5% max risk framework and VaR modeling.',
    ],
    startDate: 'June 2025',
    endDate: 'August 2025',
    website: '#',
    technologies: [
      { name: 'Python', href: 'https://python.org', icon: <Python /> },
      { name: 'Quant', href: '#', icon: <Python /> },
      { name: 'Risk Management', href: '#', icon: <Python /> },
    ],
  },
  {
    isCurrent: false,
    company: 'Lotus Capital',
    position: 'Quant Trader Trainee',
    location: 'Anfa - Casablanca (Remote)',
    image: '/assets/logo.png',
    description: [
      'Leveraged $1M in institutional liquidity across commodities & FX to generate a 2.6% ROI in 48 hours.',
      'Automated order flow tagging and alpha decay diagnostics that optimized a 3.0–5.0 Sharpe Ratio with <1.2% exposure per position.',
    ],
    startDate: 'April 2025',
    endDate: 'May 2025',
    website: '#',
    technologies: [
      { name: 'Python', href: 'https://python.org', icon: <Python /> },
      { name: 'HFT', href: '#', icon: <Python /> },
      { name: 'Trading', href: '#', icon: <Python /> },
    ],
  },
  {
    isCurrent: false,
    company: 'HP Ventures',
    position: 'Business Analyst & VC Extern',
    location: 'San Francisco, USA (Remote)',
    image: '/assets/logo.png',
    description: [
      'Executed due diligence on $130M+ in Series A AI deployments (Jasper, Wisq).',
      'Engineered high-conviction investment thesis that modeled 180k-unit hardware sales lift against 20% sector-wide valuation compression.',
    ],
    startDate: 'August 2024',
    endDate: 'September 2024',
    website: '#',
    technologies: [
      { name: 'VC', href: '#', icon: <Python /> },
      { name: 'Due Diligence', href: '#', icon: <Python /> },
      { name: 'AI Markets', href: '#', icon: <Python /> },
    ],
  },
  {
    isCurrent: false,
    company: 'HeadStarter AI',
    position: 'Software Engineering Intern',
    location: 'New York, USA (Remote)',
    image: '/assets/logo.png',
    description: [
      'Led a cross-border engineering team to architect PantryAI, LawAI, and FinAI SaaS platforms.',
      'Secured an accelerated Software Engineer Resident offer.',
    ],
    startDate: 'July 2024',
    endDate: 'September 2024',
    website: 'https://headstarter.co',
    technologies: [
      { name: 'React', href: 'https://react.dev', icon: <ReactIcon /> },
      { name: 'Next.js', href: 'https://nextjs.org', icon: <NextJs /> },
      { name: 'Firebase', href: '#', icon: <GCP /> },
    ],
  },
];
