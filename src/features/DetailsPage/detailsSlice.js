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
    },
    getDetailsSuccess: (state, { payload: details }) => {
      state.details = details;
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

export default detailsSlice.reducer;
