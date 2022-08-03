import { Action } from '@reduxjs/toolkit';
import { IDataFormatted, ISectionEntry } from './data';

export interface ActionWithPayload extends Action {
  payload?: Array<ISectionEntry>;
}

export interface ActionHYDRATE extends Action {
  type: string;
  payload?: {
    data: {
      sections: IDataFormatted;
      loading: string;
    };
  };
}
