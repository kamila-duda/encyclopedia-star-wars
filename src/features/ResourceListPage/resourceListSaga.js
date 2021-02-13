import { call, put, delay, takeEvery } from "redux-saga/effects";
import { fetchFromAPI, fetchFromAPIdetail } from "../../features/fetchFromAPI";
import { fetchResourceContent, fetchResourceContentError, fetchResourceContentSuccess } from "./resourceListSlice";

function* fetchResourceContentHandler({payload}) {
  try {
    yield delay(500);
    let results = [];
    let resourceContent = yield call(fetchFromAPI,  payload );
    results = [...results, ...resourceContent.results];
   
    while(resourceContent.next !== null){
      resourceContent = yield call(fetchFromAPIdetail, resourceContent.next);
     results = [...results, ...resourceContent.results];
    }
    yield put(fetchResourceContentSuccess(results));
  } catch (error) {
    yield put(fetchResourceContentError());
  }
}
export function* watchFetchList() {
  yield takeEvery(fetchResourceContent.type, fetchResourceContentHandler);
}
