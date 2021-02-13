import { call, put, delay, takeLatest, takeEvery } from "redux-saga/effects";
import {
  fetchExtraDetailFromAPI,
  fetchFromAPI,
  fetchFromAPIdetail,
} from "../../features/fetchFromAPI";
import store from "../../core/store";
import {
  getDetails,
  getDetailsSuccess,
  getDetailsError,
  getShipsName,
  getSpeciesName,
  getVehiclesName,
  getPlanetsName,
  getHomeworld,
  getCharactersName,
  getFilmsTitle
} from "./detailsSlice";

function* fetchDetailsHandler({payload}) {
  try {
    yield delay(500);
    const detailsContent = yield call(fetchFromAPI, payload);
    const homeworld = detailsContent.homeworld
      ? yield call(fetchFromAPIdetail, detailsContent.homeworld)
      : "";
    yield put(getHomeworld(homeworld.name));
    const starships = detailsContent.starships
      ? yield call(fetchExtraDetailFromAPI, detailsContent.starships, "name")
      : "";
    yield put(getShipsName(starships));
    const vehicles = detailsContent.vehicles
      ? yield call(fetchExtraDetailFromAPI, detailsContent.vehicles, "name")
      : "";
    yield put(getVehiclesName(vehicles));
    const characters = detailsContent.characters || detailsContent.residents || detailsContent.pilots
      ? yield call(fetchExtraDetailFromAPI, detailsContent.characters || detailsContent.residents || detailsContent.pilots, "name")
      : "";
    yield put(getCharactersName(characters));
    const planets = detailsContent.planets
      ? yield call(fetchExtraDetailFromAPI, detailsContent.planets, "name")
      : "";
    yield put(getPlanetsName(planets));
    const films = detailsContent.films
      ? yield call(fetchExtraDetailFromAPI, detailsContent.films, "title")
      : "";
    yield put(getFilmsTitle(films));
    yield put(getDetailsSuccess(detailsContent));
  } catch (error) {
    yield put(getDetailsError());
  }
}
export function* watchFetchDetails() {
  yield takeEvery(getDetails.type, fetchDetailsHandler);
}
