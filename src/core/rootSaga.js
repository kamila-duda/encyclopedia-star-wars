import { watchFetchResource } from "../features/HomePage/homeSaga";
import { all } from "redux-saga/effects";
import { watchFetchList } from "../common/listPage/listSaga";

export default function* rootSaga() {
  yield all([watchFetchResource(), watchFetchList()]);
}
