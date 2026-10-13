export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  photo: string;
  summary: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Project {
  name: string;
  subtitle: string;
  tags: string[];
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export interface Portfolio {
  profile: Profile;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: string[];
  publications: string[];
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}
