import { createReducer } from "typesafe-actions";
import { setHomeData } from "./actions";
import { initialState } from "./module";

export default createReducer(initialState).handleAction(
  setHomeData,
  (state, action) => ({
    ...state,
    ...action.payload,
  })
);
