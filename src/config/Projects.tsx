/* eslint-disable @typescript-eslint/no-unused-vars */
import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import Python from '@/components/technologies/Python';
import GCP from '@/components/technologies/GCP';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Archon.AI | Coding Agent CLI',
    description:
      'Multi-agent Mixture-of-Experts (MoE) orchestration layer for autonomous architectural conflict resolution.',
    image: '/assets/logo.png',
    link: 'https://github.com/shreed27',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'NLP', icon: <GCP key="nlp" /> },
      { name: 'MoE', icon: <NextJs key="moe" /> }, // Placeholder
      { name: 'CLI', icon: <NodeJs key="cli" /> },
    ],
    github: 'https://github.com/shreed27',
    live: 'https://github.com/shreed27',
    details: true,
    projectDetailsPageSlug: '/projects/archon-ai',
    isWorking: true,
  },
];
