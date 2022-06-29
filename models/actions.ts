import { Action } from '@reduxjs/toolkit';
import { DataFormatted, SectionEntry } from './data';

export interface ActionWithPayload extends Action {
  payload?: Array<SectionEntry>;
}

export interface ActionHYDRATE extends Action {
  type: string;
  payload?: {
    data: {
      sections: DataFormatted;
      loading: string;
    };
  };
}
