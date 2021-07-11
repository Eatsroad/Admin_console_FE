import { configureStore } from '@reduxjs/toolkit';
import menuSlice from '../components/console/menu/slice';
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { menuSaga } from '../components/console/menu/saga';

function* rootSaga() {
  yield all([menuSaga()]);
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { 
    menuSlice,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;