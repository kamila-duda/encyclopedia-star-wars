import { call, put, delay, takeEvery } from "redux-saga/effects";
import { fetchFromAPI } from "../../features/fetchFromAPI";
import { fetchResourceContent, fetchResourceContentError, fetchResourceContentSuccess } from "./resourceListSlice";
import store from "../../core/store";

function* fetchResourceContentHandler() {
  try {
    yield delay(500);
    const checkResource = store.getState().resourceList.checkResource;
    const resourceContent = yield call(fetchFromAPI, { path: checkResource });
    yield put(fetchResourceContentSuccess(resourceContent));
  } catch (error) {
    yield put(fetchResourceContentError());
  }
}
export function* watchFetchList() {
  yield takeEvery(fetchResourceContent.type, fetchResourceContentHandler);
}
