import { createSlice } from "@reduxjs/toolkit";

export const resourceListSlice = createSlice({
  name: "resourceList",
  initialState: {
    status: "initial",
    checkResource: "",
    //resourceContent: [],
    results: [],
  },
  reducers: {
    fetchResourceContentError: () => ({
      status: "error",
    }),
    fetchResourceContentSuccess: (state, { payload: results }) => {
      state.status = "success";
     // state.resourceContent = results;
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
//export const selectResourceContent = (state) =>
 // selectResourceState(state).resourceContent;
export const selectResourceResults = (state) =>
  selectResourceState(state).results;
export const selectResourceContentStatus = (state) =>
  selectResourceState(state).status;

export default resourceListSlice.reducer;
