import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "resource",
  initialState: {
    status: "initial",
    resource: {},
  },
  reducers: {
    fetchResourceError: () => ({
      status: "error",
    }),
    fetchResourceSuccess: (state, { payload: resource }) => {
      state.status = "success";
      state.resource = resource;
    },
    fetchResource: () => ({
      status: "loading",
    }),
  },
});

export const {
  fetchResourceError,
  fetchResourceSuccess,
  fetchResource,
} = homeSlice.actions;

const selectResourceState = (state) => state.resource;
export const selectResource = (state) => selectResourceState(state).resource;
export const selectResourceStatus = (state) =>
  selectResourceState(state).status;

export default homeSlice.reducer;
