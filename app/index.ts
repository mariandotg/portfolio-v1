import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import dataReducer from './store/slices/data';
import { IDataFormatted } from '../models/data';

const makeStore = () =>
  configureStore({
    reducer: {
      data: dataReducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type NewAppState = Omit<AppState, 'data'> & {
  data: {
    sections: IDataFormatted;
    loading: string;
  };
};

export const wrapper = createWrapper<AppStore>(makeStore);
