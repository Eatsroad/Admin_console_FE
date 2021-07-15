import { configureStore } from '@reduxjs/toolkit';
import menuSlice from '../components/console/menu/slice';
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { menuSaga } from '../components/console/menu/saga';
import { categorySaga } from '../components/console/category/saga';
import categorySlice from '../components/console/category/slice';

function* rootSaga() {
  yield all([menuSaga(), categorySaga()]);
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { 
    menuSlice,
    categorySlice,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;