import { watchFetchResource } from "../features/HomePage/homeSaga";
import { all } from "redux-saga/effects";
import { watchFetchList } from "../features/ResourceListPage/resourceListSaga";
import { watchFetchDetails } from "../features/DetailsPage/detailsSaga";

export default function* rootSaga() {
  yield all([watchFetchResource(), watchFetchList(), watchFetchDetails()]);
}
