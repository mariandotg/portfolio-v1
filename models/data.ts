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

export interface Item {
  label: string;
  item: string;
  id?: string;
}

export interface ItemEntry extends BaseEntry {
  fields: Item;
}

export interface Card {
  subtitle?: string;
  techs?: Array<string>;
  period?: string;
  description?: string;
  site?: string;
  repo?: string;
  id?: string;
}

export interface CardEntry extends BaseEntry {
  fields: Card;
}

export interface Section {
  title: string;
  key: string;
  description?: string;
  cards?: Array<CardEntry>;
  items?: Array<ItemEntry>;
  id?: string;
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
  about?: Section;
  projects?: Section;
  education?: Section;
  jobs?: Section;
  skills?: Section;
  info?: Section;
}
