import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { getContentfulData } from '../../../services/contentful';

import { NewAppState } from '../..';
import { ActionHYDRATE, ActionWithPayload } from '../../../models/actions';

import contentfulDataAdapter from '../../../adapters/contentfulDataAdapter';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async ({ type, lang }: { type: string; lang: string }) => {
    const response = await getContentfulData(type, lang);
    return { response, lang };
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    sections: {},
    loading: 'false',
    language: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = 'true';
      })
      .addCase(fetchData.fulfilled, (state, action: ActionWithPayload) => {
        state.sections = contentfulDataAdapter(action.payload!.response);
        state.loading = 'false';
        state.language = action.payload!.lang;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = 'false';
      })
      .addCase(HYDRATE, (state, action: ActionHYDRATE) => {
        if (!action.payload!.data.sections) return state;
        state.sections = action.payload!.data.sections;
        state.language = action.payload!.data.language;
        state.loading = 'false';
      });
  },
});

export const selectData = (state: NewAppState) => state.data;
export const selectDataSections = (state: NewAppState) => state.data.sections;

export const selectAbout = (state: NewAppState) => state.data.sections.about;
export const selectInfo = (state: NewAppState) => state.data.sections.info;
export const selectSkills = (state: NewAppState) => state.data.sections.skills;
export const selectJobs = (state: NewAppState) =>
  state.data.sections.jobExperience;
export const selectEducation = (state: NewAppState) =>
  state.data.sections.education;
export const selectProjects = (state: NewAppState) =>
  state.data.sections.featuredProjects;

export default dataSlice.reducer;
