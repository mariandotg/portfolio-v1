import { Action, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { getContentfulData } from '../../../services/contentful';
import { AppState } from '../..';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await getContentfulData();
  return response;
});

export interface ActionWithPayload extends Action {
  type: string;
  payload?: any;
}

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    response: [],
    loading: 'false',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = 'true';
      })
      .addCase(fetchData.fulfilled, (state, action: ActionWithPayload) => {
        state.response = action.payload;
        state.loading = 'false';
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = 'false';
      })
      .addCase(HYDRATE, (state, action: ActionWithPayload) => {
        if (!action.payload.data.response) return state;
        state.response = action.payload.data.response;
        state.loading = 'false';
      });
  },
});

export const selectData = (state: AppState) => state.data;

export default dataSlice.reducer;
