import { ReactNode } from 'react';

interface ISys {
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

interface IBaseEntry {
  metadata: object;
  sys: ISys;
}

interface IImage {
  fields: {
    file: { url: string };
  };
}

export interface IBaseCard {
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

export interface ICard extends IBaseCard {
  image?: IImage;
}

export interface ICardFormatted extends IBaseCard {
  image?: IImage | string;
}

export interface ICardEntry extends IBaseEntry {
  fields: ICard;
}

export interface IButton {
  cta?: string;
  children?: ReactNode;
  variant: 'primary' | 'secondary';
  url?: string;
}

export interface IIconButton {
  children: ReactNode;
  clickFunction: () => void;
  style: string;
}

export interface ISection {
  title: string;
  key: string;
  description?: string;
  cards?: Array<ICardEntry>;
  cta?: IButton;
  language: string;
  id: string;
}

export interface ISectionEntry extends IBaseEntry {
  fields: ISection;
}

export interface IRawData {
  sys: object;
  total: number;
  skip: number;
  limit: number;
  items: Array<ISectionEntry>;
}

export interface ILanguage {
  displayName: string;
  slug: string;
  id: string;
}

export interface IHeader {
  title: string;
  key: string;
  language: string;
  id: string;
  languagesList: Array<ILanguage>;
}

export interface IAbout {
  title: string;
  key: string;
  description: string;
  language: string;
  cta: IButton;
  id: string;
}

export interface IItem {
  label: string;
  item: string;
  id: string;
}

export interface IInfo {
  title: string;
  key: string;
  cards: Array<IItem>;
  language: string;
  id: string;
}

export interface ISkillCard {
  subtitle: string;
  techs: string;
  id: string;
}

export interface ISkills {
  title: string;
  key: string;
  cards: Array<ISkillCard>;
  language: string;
  id: string;
}

export interface ICourseCard {
  institution: string;
  courseTitle: string;
  period: string;
  description?: string;
  certificate?: IButton;
  id: string;
}

export interface IEducation {
  title: string;
  key: string;
  cards: Array<ICourseCard>;
  language: string;
  id: string;
}

export interface IJobCard {
  company: string;
  position: string;
  period: string;
  description: string;
  id: string;
}

export interface IJobExperience {
  title: string;
  key: string;
  cards: Array<IJobCard>;
  language: string;
  id: string;
}

export interface IProjectCard {
  image: string;
  name: string;
  year?: string;
  description: string;
  site: IButton;
  repository: IButton;
  id: string;
}

export interface IFeaturedProjects {
  title: string;
  key: string;
  cards: Array<IProjectCard>;
  language: string;
  id: string;
}

export interface ISocialMedia {
  url: string;
  icon: string;
  id: string;
}

export interface IContactField {
  label: string;
  placeholder: string;
  name: string;
  type: string;
  id: string;
}

export interface IContact {
  title: string;
  key: string;
  cards: Array<IContactField>;
  language: string;
  cta: IButton;
  id: string;
}

export interface IFooter {
  title: string;
  key: string;
  language: string;
  id: string;
  socialMedia: Array<ISocialMedia>;
}

export interface IDataFormatted {
  header: IHeader;
  about: IAbout;
  info: IInfo;
  skills: ISkills;
  education: IEducation;
  jobExperience: IJobExperience;
  featuredProjects: IFeaturedProjects;
  contact: IContact;
  footer: IFooter;
}
