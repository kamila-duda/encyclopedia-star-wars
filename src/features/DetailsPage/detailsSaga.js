import { call, put, delay, takeLatest, takeEvery } from "redux-saga/effects";
import { fetchFromAPI } from "../../features/fetchFromAPI";
import store from "../../core/store";
import { getDetails, getDetailsSuccess, getDetailsError } from "./detailsSlice";

function* fetchDetailsHandler() {
  try {
    yield delay(500);
    const path = store.getState().details.path;
    const detailsContent = yield call(fetchFromAPI, { path: path });
    yield put(getDetailsSuccess(detailsContent));
  } catch (error) {
    yield put(getDetailsError());
  }
}
export function* watchFetchDetails() {
  yield takeEvery(getDetails.type, fetchDetailsHandler);
}
