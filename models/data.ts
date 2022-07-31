interface Sys {
  space: object;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environments: object;
  revision: number;
  contentType: object;
  locale: string;
}

interface BaseEntry {
  metadata: object;
  sys: Sys;
}

interface Image {
  fields: {
    file: { url: string };
  };
}

export interface BaseCard {
  label?: string;
  item?: string;
  id?: string;
  subtitle?: string;
  techs?: string;
  institution?: string;
  courseTitle?: string;
  period?: string;
  description?: string;
  certificate?: string;
  company?: string;
  position?: string;
  name?: string;
  year?: string;
  site?: string;
  repository?: string;
}

export interface Card extends BaseCard {
  image?: Image;
}

export interface CardFormatted extends BaseCard {
  image?: Image | string;
}

export interface CardEntry extends BaseEntry {
  fields: Card;
}

export interface Section {
  title: string;
  key: string;
  description?: string;
  cards?: Array<CardEntry>;
  language: string;
  id: string;
}

export interface SectionEntry extends BaseEntry {
  fields: Section;
}

export interface RawData {
  sys: object;
  total: number;
  skip: number;
  limit: number;
  items: Array<SectionEntry>;
}

export interface Language {
  displayName: string;
  slug: string;
  id: string;
}

export interface Header {
  title: string;
  key: string;
  language: string;
  id: string;
  languagesList: Array<Language>;
}

export interface About {
  title: string;
  key: string;
  description: string;
  language: string;
  id: string;
}

export interface Item {
  label: string;
  item: string;
  id: string;
}

export interface Info {
  title: string;
  key: string;
  cards: Array<Item>;
  language: string;
  id: string;
}

export interface SkillCard {
  subtitle: string;
  techs: string;
  id: string;
}

export interface Skills {
  title: string;
  key: string;
  cards: Array<SkillCard>;
  language: string;
  id: string;
}

export interface CourseCard {
  institution: string;
  courseTitle: string;
  period: string;
  description?: string;
  certificate?: string;
  id: string;
}

export interface Education {
  title: string;
  key: string;
  cards: Array<CourseCard>;
  language: string;
  id: string;
}

export interface JobCard {
  company: string;
  position: string;
  period: string;
  description: string;
  id: string;
}

export interface JobExperience {
  title: string;
  key: string;
  cards: Array<JobCard>;
  language: string;
  id: string;
}

export interface ProjectCard {
  imageUrl: string;
  name: string;
  year?: string;
  description: string;
  id: string;
  site: string;
  repository: string;
}

export interface FeaturedProjects {
  title: string;
  key: string;
  cards: Array<ProjectCard>;
  language: string;
  id: string;
}

export interface SocialMedia {
  url: string;
  icon: string;
  id: string;
}

export interface Footer {
  title: string;
  key: string;
  language: string;
  id: string;
  socialMedia: Array<SocialMedia>;
}

export interface DataFormatted {
  header: Header;
  about: About;
  info: Info;
  skills: Skills;
  education: Education;
  jobExperience: JobExperience;
  featuredProjects: FeaturedProjects;
  footer: Footer;
}
