import { StatusCodes } from 'http-status-codes';
import {call, put, takeLatest } from 'redux-saga/effects'
import { menuAPI } from '../../../api'


function* getAllMenu(storeId: string) {
  try {
    yield put()
    const response = yield call(menuAPI.getAllMenu, storeId);

    if (response.status === StatusCodes.OK) {
      yield put()
    }
    
  } catch (e) {

  }
}

export function* menuSaga() {
  yield takeLatest(, getAllMenu);
}