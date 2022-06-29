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

interface Card {
  id: string;
  subtitle?: string;
  techs?: Array<string>;
  period?: string;
  description?: string;
}

export interface CardEntry extends BaseEntry {
  fields: Card;
}

export interface Section {
  title: string;
  cards: Array<CardEntry>;
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

export interface DataFormatted {
  aboutSection?: Section;
  projectsSection?: Section;
  educationSection?: Section;
  jobExperienceSection?: Section;
  skillsSection?: Section;
  infoSection?: Section;
}
