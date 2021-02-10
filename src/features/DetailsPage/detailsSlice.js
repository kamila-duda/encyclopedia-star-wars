import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    status: "initial",
    path: "",
    details: {},
  },
  reducers: {
    getDetails: (state, { payload: path }) => {
      state.path = path;
      state.status = "loading";
    },
    getDetailsSuccess: (state, { payload: details }) => {
      state.details = details;
      state.status = "success";
    },
    getDetailsError: () => ({
      status: "error",
    }),
  },
});

export const {
  getDetails,
  getDetailsSuccess,
  getDetailsError,
} = detailsSlice.actions;

const selectDetailsState = (state) => state.details;
export const selectDetailsResults = (state) =>
  selectDetailsState(state).details;
  export const selectDetailsStatus = (state) =>
  selectDetailsState(state).status;

export default detailsSlice.reducer;
