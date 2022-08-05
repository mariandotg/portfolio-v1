import { Action } from '@reduxjs/toolkit';
import { IDataFormatted, ISectionEntry } from './data';

export interface ActionWithPayload extends Action {
  payload?: {
    response: Array<ISectionEntry>;
    lang: string;
  };
}

export interface ActionHYDRATE extends Action {
  type: string;
  payload?: {
    data: {
      sections: IDataFormatted;
      loading: string;
      language: string;
    };
  };
}
