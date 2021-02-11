import { all } from "redux-saga/effects";
import { watchFetchList } from "../features/ResourceListPage/resourceListSaga";
import { watchFetchDetails } from "../features/DetailsPage/detailsSaga";

export default function* rootSaga() {
  yield all([ watchFetchList(), watchFetchDetails()]);
}
