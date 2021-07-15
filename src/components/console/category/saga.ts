import { AxiosResponse } from "axios";
import { StatusCodes } from "http-status-codes";
import { call, put, takeLatest } from 'redux-saga/effects'
import { categoryAPI } from "../../../api";
import { CategoryInfoResponse, CreateCategoryData, CreateCategoryResponse, UpdateCategoryMenu } from "../../common/type";
import { setCategories, setCategory } from "./slice";

function* getAllCategorySaga(action: {
  type: string;
  payload: {}
}) {
  const storeId = localStorage.getItem('storeId')!; 
  try {
    const response: AxiosResponse<CategoryInfoResponse[]> = yield call(categoryAPI.getAllCategories, storeId);
    if (response.status === StatusCodes.OK) {
      yield put(setCategories(response.data));
    }
  } catch (e) {
    console.log(e);
  };
};
function* createCategorySaga(action: {
  type: string;
  payload: {
    data: CreateCategoryData
  }
}) {
  const storeId = localStorage.getItem('storeId')!; 

  try {
    const response: AxiosResponse<CreateCategoryResponse> = yield call(categoryAPI.createCategory, action.payload.data);

    if (response.status === StatusCodes.CREATED) {
      const response: AxiosResponse<CategoryInfoResponse[]> = yield call(categoryAPI.getAllCategories, storeId);

      if (response.status === StatusCodes.OK) {
        yield put(setCategories(response.data));
      }
    }
  } catch (e) {
    console.log(e);
  };
};

function* deleteCategorySaga(action: {
  type: string;
  payload: {
    categoryId: number;
  }
}) {
  const storeId = localStorage.getItem('storeId')!; 

  try {
    const response: AxiosResponse = yield call(categoryAPI.deleteCategory, action.payload.categoryId);

    if (response.status === StatusCodes.OK) {
      const response: AxiosResponse<CategoryInfoResponse[]> = yield call(categoryAPI.getAllCategories, storeId);

      if (response.status === StatusCodes.OK) {
        yield put(setCategories(response.data));
      }
    }
  } catch (e) {
    console.log(e);
  } 
}

function* updateCategoryMenuSaga(action: {
  type: string;
  payload: {
    data: UpdateCategoryMenu
    id: number;
  }
}) {
  const storeId = localStorage.getItem('storeId')!; 
  console.log(action.payload.id);
  try {
    const response: AxiosResponse = yield call(categoryAPI.updateCategoryMenu, action.payload.data, action.payload.id);

    if (response.status === StatusCodes.OK) {
      const response: AxiosResponse<CategoryInfoResponse[]> = yield call(categoryAPI.getAllCategories, storeId);

      if (response.status === StatusCodes.OK) {
        yield put(setCategories(response.data));
        yield put(setCategory(action.payload.id));
      }
    }
  } catch (e) {
    console.log(e);
  } 
}

export function* categorySaga(): Generator {
  yield takeLatest("/category/getAllCategorySaga", getAllCategorySaga);
  yield takeLatest("/category/createCategorySaga", createCategorySaga);
  yield takeLatest("/category/deleteCategorySaga", deleteCategorySaga);
  yield takeLatest("/category/updateCategoryMenu", updateCategoryMenuSaga);
}