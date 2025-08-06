export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  images: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
}

export interface AboutInfo {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  skills: string[];
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
