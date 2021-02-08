import { watchFetchResource} from "../features/HomePage/homeSaga"
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchFetchResource()]);
}