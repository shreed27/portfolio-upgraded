/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Code from '@/components/svgs/Code';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
// Technology Components
import TypeScript from '@/components/technologies/TypeScript';
import Python from '@/components/technologies/Python';
import GCP from '@/components/technologies/GCP';
import AWS from '@/components/technologies/AWS';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  Python: Python,
  GCP: GCP,
  AWS: AWS,
};

export const heroConfig = {
  name: 'Shreed Shrivastava',
  title: 'AI Engineer',
  subtitle: 'Quant Trader',
  email: 'shshrivastava_be23@thapar.edu',
  avatar: '/assets/logo.png',
  nowPlaying:
    'Maan Meri Jaan - King, Nick Jonas',
  skills: [
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'GCP',
      href: 'https://cloud.google.com/',
      component: 'GCP',
    },
    {
      name: 'AWS',
      href: 'https://aws.amazon.com/',
      component: 'AWS',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
  ],
  description: {
    template:
      'Love to build cool stuff, train useful models, and work at the intersection of <b>AI systems</b>, <b>research</b>, and <b>markets</b>.',
  },
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/shreed27',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shreedshrivastava/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/shreed27',
    icon: <Github />,
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/iamshreedshrivastava/',
    icon: <Code />,
  },
  {
    name: 'Codeforces',
    href: 'https://codeforces.com/profile/shreed27',
    icon: <Code />,
  },
  {
    name: 'Email',
    href: 'mailto:shshrivastava_be23@thapar.edu',
    icon: <Mail />,
  },
];
