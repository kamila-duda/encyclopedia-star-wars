import { createSlice } from "@reduxjs/toolkit";

export const resourceListSlice = createSlice({
  name: "resourceList",
  initialState: {
    status: "initial",
    checkResource: "",
    resourceContent: {},
    results: [],
  },
  reducers: {
    fetchResourceContentError: () => ({
      status: "error",
    }),
    fetchResourceContentSuccess: (state, { payload: resourceContent }) => {
      state.status = "success";
      state.resourceContent=resourceContent;
      state.results = resourceContent.results;
    },
    fetchResourceContent: (state, {payload: key}) => {
      state.status = "loading";
      state.checkResource = key;
    },
  },
});

export const {
  fetchResourceContentError,
  fetchResourceContentSuccess,
  fetchResourceContent,
} = resourceListSlice.actions;

const selectResourceState = (state) => state.resourceList;
export const selectResourceContent = (state) =>
  selectResourceState(state).resourceContent;
  export const selectResourceResults = (state) =>
  selectResourceState(state).results;
export const selectResourceContentStatus = (state) =>
  selectResourceState(state).status;
  export const selectResourceContentList = (state) =>
  selectResourceState(state).checkResource;

export default resourceListSlice.reducer;
