export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end?: string;
  highlights: string[];
  tech?: string[];
  featured?: boolean;
};

export type Project = {
  title: string;
  year: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  icon: 'github' | 'layers' | 'grid';
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type SiteConfig = {
  name: string;
  location: string;
  email: string;
  linkedIn: string;
  github: string;
};
