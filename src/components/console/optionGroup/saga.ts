import { AxiosResponse } from "axios";
import { StatusCodes } from "http-status-codes";
import { call, put, takeLatest } from "redux-saga/effects";
import { optionGroupAPI } from "../../../api";
import { CreateOptionGroupData, OptionGroupInfoResponse, UpdateMenuInOptionGroupData, UpdateOptionInOptionGroup } from "../../common/type";
import { setOptionGropup, setOptionGroups } from "./slice";

function* getAllOptionGroupSaga(action: {
  type: string;
  payload: {}
}) {
  const storeId = localStorage.getItem('storeId')!; 
  try {
    const response: AxiosResponse<OptionGroupInfoResponse[]> = yield call(optionGroupAPI.getAllOptionGroups, parseInt(storeId));
    if (response.status === StatusCodes.OK) {
      yield put(setOptionGroups(response.data));
    }
  } catch (e) { console.log(e) }; 
};

function* createoOptionGroupSaga(action: {
  type: string;
  payload: {
    data: CreateOptionGroupData
  }
}) {
  const storeId = localStorage.getItem('storeId')!;

  try {
    const response: AxiosResponse<OptionGroupInfoResponse> = yield call(optionGroupAPI.createOptionGroup, action.payload.data);

    if (response.status === StatusCodes.CREATED) {
      const response: AxiosResponse<OptionGroupInfoResponse[]> = yield call(optionGroupAPI.getAllOptionGroups, parseInt(storeId));

      if (response.status === StatusCodes.OK) {
        yield put(setOptionGroups(response.data));
      }
    }

  } catch (e) {
    console.log(e);
  }
}
function* updateOptionInOptionGroupSaga(action: {
  type: string;
  payload: {
    id: number, 
    data: UpdateOptionInOptionGroup
  }
}) {
  const storeId = localStorage.getItem('storeId')!;

  try {
    const response: AxiosResponse = yield call(optionGroupAPI.updateOptionInOptionGroup, action.payload.id, action.payload.data);

    if (response.status === StatusCodes.OK) {
      const response: AxiosResponse<OptionGroupInfoResponse[]> = yield call(optionGroupAPI.getAllOptionGroups, parseInt(storeId));

      if (response.status === StatusCodes.OK) {
        yield put(setOptionGroups(response.data));
        yield put(setOptionGropup(action.payload.id));
      }
    }
  } catch (e) {
    console.log(e);
  }
};

function* updateMenuInOptionGroupSaga(action: {
  type: string;
  payload: {
    id: number, 
    data: UpdateMenuInOptionGroupData
  }
}) {
  const storeId = localStorage.getItem('storeId')!;

  try {
    const response: AxiosResponse = yield call(optionGroupAPI.updateMenuInOptionGroup, action.payload.id, action.payload.data);

    if (response.status === StatusCodes.OK) {
      const response: AxiosResponse<OptionGroupInfoResponse[]> = yield call(optionGroupAPI.getAllOptionGroups, parseInt(storeId));

      if (response.status === StatusCodes.OK) {
        yield put(setOptionGroups(response.data));
        yield put(setOptionGropup(action.payload.id));
      }
    }
  } catch (e) {
    console.log(e);
  }
};

function* deleteOptionGroupSaga(action: {
  type: string;
  payload: {
    option_group_id: number
  }
}) {
  const storeId = localStorage.getItem('storeId')!;

  try {
    const response: AxiosResponse = yield call(optionGroupAPI.deleteOptoinGroup, action.payload.option_group_id);

    if (response.status === StatusCodes.OK) {
      const response: AxiosResponse<OptionGroupInfoResponse[]> = yield call(optionGroupAPI.getAllOptionGroups, parseInt(storeId));

      if (response.status === StatusCodes.OK) {
        yield put(setOptionGroups(response.data));
      }
    }
  } catch (e) {
    console.log(e);
  }
}

export function* optionGroupSaga(): Generator {
  yield takeLatest('/optionGroup/getAllOptionGroupSaga', getAllOptionGroupSaga);
  yield takeLatest('/optionGroup/createoOptionGroupSaga', createoOptionGroupSaga);
  yield takeLatest('/optionGroup/updateOptionInOptionGroupSaga', updateOptionInOptionGroupSaga);
  yield takeLatest('/optionGroup/updateMenuInOptionGroupSaga', updateMenuInOptionGroupSaga);
  yield takeLatest('/optionGroup/deleteOptionGroupSaga', deleteOptionGroupSaga);
}