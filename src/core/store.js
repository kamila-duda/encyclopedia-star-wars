import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/HomePage/homeSlice';
import resourceListReducer from '../features/ResourceListPage/resourceListSlice';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    resource: homeReducer,
    resourceList: resourceListReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;