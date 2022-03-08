export interface SkillProps {
  id: number;
  skill: string;
  image?: any;
}

export interface ExperienceProps {
  id: number;
  company: string;
  fromTo: string;
  length: string;
  position: string;
  skills: string[];
}

export interface ProjectProps {
  id: number;
  name: string;
  info: string;
  url: string;
  Icon: React.ReactNode;
}

export interface CertificateProps {
  id: number;
  title: string;
  img: string;
}
