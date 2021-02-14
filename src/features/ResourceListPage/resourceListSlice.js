import { createSlice } from "@reduxjs/toolkit";

export const resourceListSlice = createSlice({
  name: "resourceList",
  initialState: {
    status: "initial",
    results: [],
  },
  reducers: {
    fetchResourceContentError: () => ({
      status: "error",
    }),
    fetchResourceContentSuccess: (state, { payload: results }) => {
      state.status = "success";
      state.results = results;
    },
    fetchResourceContent: (state) => {
      state.status = "loading";
    },
  },
});

export const {
  fetchResourceContentError,
  fetchResourceContentSuccess,
  fetchResourceContent,
} = resourceListSlice.actions;

const selectResourceState = (state) => state.resourceList;
export const selectResourceResults = (state) =>
  selectResourceState(state).results;
export const selectResourceContentStatus = (state) =>
  selectResourceState(state).status;

export default resourceListSlice.reducer;
