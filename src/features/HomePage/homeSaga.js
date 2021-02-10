import { call, put, delay, takeLatest } from "redux-saga/effects";
import {
  fetchResource,
  fetchResourceError,
  fetchResourceSuccess,
} from "../HomePage/homeSlice";
import { fetchFromAPI } from "../fetchFromAPI";

function* fetchResourceHandler() {
  try {
    yield delay(500);
    const resource = yield call(fetchFromAPI, {
      path: "",
    });
    yield put(fetchResourceSuccess(resource));
  } catch (error) {
    yield put(fetchResourceError());
  }
}
export function* watchFetchResource() {
  yield takeLatest(fetchResource.type, fetchResourceHandler);
}
