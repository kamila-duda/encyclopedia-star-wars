import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/HomePage/homeSlice";
import resourceListReducer from "../features/ResourceListPage/resourceListSlice";
import detailsReducer from "../features/DetailsPage/detailsSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    resource: homeReducer,
    resourceList: resourceListReducer,
    details: detailsReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
