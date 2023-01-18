interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface File {
  _type: 'file';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  cvUrl: string;
}

export interface Social extends SanityBody {
  _type: 'social';
  link: string;
  title: string;
}

export interface Skill extends SanityBody {
  _type: 'skill';
  title: string;
  image: Image;
  progress?: number;
}

export interface Recommandation extends SanityBody {
  _type: 'recommandation';
  author: string;
  authorRole: string;
  authorImage: Image;
  authorDescription: string;
  authorCompany: string;
}

export interface PageInfo extends SanityBody {
  _type?: 'pageInfo';
  name: string;
  role: string;
  cv: File;
  profileImage: Image;
  aboutImage: Image;
  address?: string;
  backgroundInformation?: string;
  phoneNumber?: string;
  email?: string;
  socials: Social[];
  recommandations: Recommandation[];
}

export interface Experience extends SanityBody {
  _type: 'experience';
  company: string;
  companyDescription?: string;
  companyImage?: Image;
  dateEnded: date;
  dateStarted: date;
  jobTitle: string;
  tasks: string[];
  technologies: Skill[];
  isCurrentlyWorkingHere?: boolean;
  contractType: string;
  projectDescription: string;
  companyUrl?: string;
}

export interface Project extends SanityBody {
  _type: 'project';
  title: string;
  image?: Image;
  linkToBuild?: string;
  linktoRepo?: string;
  summary: string;
  technologies: Skill[];
}
