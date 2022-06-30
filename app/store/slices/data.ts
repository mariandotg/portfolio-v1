import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { getContentfulData } from '../../../services/contentful';

import { AppState } from '../..';
import { DataFormatted } from '../../../models/data';
import { ActionHYDRATE, ActionWithPayload } from '../../../models/actions';
import contentfulDataAdapter from '../../../adapters/contentfulDataAdapter';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await getContentfulData();
  return response;
});

type NewAppState = Omit<AppState, 'data'> & {
  data: {
    sections: DataFormatted;
    loading: string;
  };
};

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    sections: {},
    loading: 'false',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = 'true';
      })
      .addCase(fetchData.fulfilled, (state, action: ActionWithPayload) => {
        state.sections = contentfulDataAdapter(action.payload!);
        state.loading = 'false';
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = 'false';
      })
      .addCase(HYDRATE, (state, action: ActionHYDRATE) => {
        if (!action.payload!.data.sections) return state;
        state.sections = action.payload!.data.sections;
        state.loading = 'false';
      });
  },
});

export const selectData = (state: AppState) => state.data;
export const selectDataSections = (state: NewAppState) => state.data.sections;

export default dataSlice.reducer;
