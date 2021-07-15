import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import {call, put, takeLatest } from 'redux-saga/effects'
import { menuAPI } from '../../../api'
import { CreateMenuData, CreateMenuResponse, MenuInfoResponse, UpdateCategoryData } from '../../common/type';
import { setMenu, setMenus } from './slice';


function* getAllMenuSaga(action: {
  type: string;
  payload: {}
}) {
  const storeId = localStorage.getItem('storeId')!;
  try {
    const response: AxiosResponse<MenuInfoResponse[]> = yield call(menuAPI.getAllMenu, storeId);

    if (response.status === StatusCodes.OK) {
      yield put(setMenus(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

function* createMenuSaga(action: {
  type: string;
  payload: {
    data: CreateMenuData
  }
}) {
  const storeId = localStorage.getItem('storeId')!;
  try {
    const response: AxiosResponse<CreateMenuResponse> = yield call(menuAPI.createMenu, action.payload.data);
    if (response.status === StatusCodes.CREATED) {
      
      const response: AxiosResponse<MenuInfoResponse[]> = yield call(menuAPI.getAllMenu, storeId);
      if (response.status === StatusCodes.OK) {
        yield put(setMenus(response.data));
      }
    }
  } catch (e) {

  }
};

function* deleteMenuSaga(action: {
  type: string;
  payload: { 
    menuId: number
  }
}) {
  const storeId = localStorage.getItem('storeId')!;
  try {
    const response: AxiosResponse = yield call(menuAPI.deleteMenu, action.payload.menuId);
    if (response.status === StatusCodes.OK) {
      const response: AxiosResponse<MenuInfoResponse[]> = yield call(menuAPI.getAllMenu, storeId);
      
      if (response.status === StatusCodes.OK) {
        yield put(setMenus(response.data));
      }
    }
  } catch (e) {

  }
};
function* updataMenuSaga(action: {
  type: string;
  payload: {
    menuId: number,
    data: UpdateCategoryData
  }
}) {
  const storeId = localStorage.getItem('storeId')!;
  try {
    const response: AxiosResponse = yield call(menuAPI.updateMenuCategory, action.payload.data, action.payload.menuId);
    if (response.status === StatusCodes.OK) {
      const response: AxiosResponse<MenuInfoResponse[]> = yield call(menuAPI.getAllMenu, storeId);
      
      if (response.status === StatusCodes.OK) {
        yield put(setMenus(response.data));
        yield put(setMenu(action.payload.menuId));
      }
    }
  } catch (e) {

  }
};

export function* menuSaga(): Generator {
  yield takeLatest("/menu/updateMenuSaga", updataMenuSaga);
  yield takeLatest("/menu/deleteMenuSaga", deleteMenuSaga);
  yield takeLatest("/menu/createMenuSaga", createMenuSaga);
  yield takeLatest("/menu/getAllMenuSaga", getAllMenuSaga);
}

export default menuSaga;