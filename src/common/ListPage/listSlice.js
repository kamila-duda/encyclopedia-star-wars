import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    status: "initial",
    checkResource: "",
  },
  reducers: {
    fetchResourceContentError: () => ({
      status: "error",
    }),
    fetchResourceContentSuccess: (state, { payload: resourceContent }) => {
      state.status = "success";
      state.resourceContent = resourceContent;
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
} = listSlice.actions;

const selectResourceState = (state) => state.list;
export const selectResourceContent = (state) =>
  selectResourceState(state).resourceContent;
export const selectResourceContentStatus = (state) =>
  selectResourceState(state).status;

export default listSlice.reducer;
