import type { Experience } from '@/lib/types';

export const experience: Experience[] = [
  {
    company: 'Flow AI',
    role: 'Founding Engineer, Full-Stack',
    location: 'San Francisco, CA (Remote)',
    start: 'Oct 2024',
    end: 'Nov 2025',
    highlights: [
      'Spearheaded development of a robust full-stack authentication system (Supabase Auth with row-level security via Next.js middle-ware), enabling secure, long-lived sessions and protected routes across multi-tenant workspaces',
      'Architected a normalized PostgreSQL schema to ensure fast query performance and clear data ownership, enforcing strict access controls with row-level security',
      'Developed GPT-powered task generation and chat flows, conducting blinded A/B tests on prompts and models that showed a 95% preference for the new variant among users (testers and engineers)',
      'Optimized front-end performance by migrating a React single-page app to Next.js with Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR), cutting bundle size by ~35% and reducing initial page load time by ~30%',
    ],
    tech: ['Next.js', 'React', 'Supabase', 'PostgreSQL', 'TypeScript'],
    featured: true,
  },
  {
    company: 'Libutti Realty Advisors',
    role: 'Software Developer',
    location: 'San Diego, CA',
    start: 'Oct 2023',
    end: 'Apr 2024',
    highlights: [
      'Developed and maintained a web platform for property listings, customer interactions, and transactions, streamlining the real estate management process for the firm',
      'Designed and optimized a relational database for property records, ensuring fast query performance and scalability',
      'Implemented input validation, error handling, and logging that reduced data inconsistencies and made it easier to debug production issues',
    ],
    tech: ['JavaScript', 'SQL', 'REST APIs'],
  },
  {
    company: 'MentorAmp',
    role: 'Software Developer',
    location: 'San Francisco, CA',
    start: 'May 2021',
    end: 'Feb 2022',
    highlights: [
      'Diagnosed and documented dozens of UX/UI issues, collaborating with engineers to prioritize fixes and enhance user experience',
      'Collaborated in Agile sprints (daily stand-ups, planning, retrospectives), contributing feedback that kept development on schedule and ensured 100% on-time delivery of project milestones',
    ],
    tech: ['Agile', 'QA', 'UX/UI'],
  },
];
