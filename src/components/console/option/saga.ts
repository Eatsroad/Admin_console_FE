import { AxiosResponse } from "axios";
import { StatusCodes } from "http-status-codes";
import { call, put, takeLatest } from "redux-saga/effects";
import { optionAPI } from "../../../api";
import { CreateOptionData, OptionInfoResponse, UpdateOptionGroupInOption } from "../../common/type";
import { setOption, setOptions } from "./slice";
const storeId = localStorage.getItem('storeId')!;

function* getAllOptionSaga() {
  try {
    const response: AxiosResponse<OptionInfoResponse[]> = yield call(optionAPI.getAllOption, parseInt(storeId));

    if (response.status === StatusCodes.OK) {
      yield put(setOptions(response.data));
    } 
  } catch (e) { console.log(e) };
};

function* createOptionSaga(action: {
  type: string;
  payload: {
    data: CreateOptionData
  }
}) {
  try {
    const response: AxiosResponse = yield call(optionAPI.createOption, action.payload.data);
    
    if (response.status === StatusCodes.CREATED) {
      const response: AxiosResponse<OptionInfoResponse[]> = yield call(optionAPI.getAllOption, parseInt(storeId));
      if (response.status === StatusCodes.OK) {
        yield put(setOptions(response.data));
      } 
    }
  } catch (e) { console.log(e) }
}
function* deleteOptionSaga(action: {
  type: string;
  payload: {
    option_id: number
  }
}) {
  try {
    const response: AxiosResponse = yield call(optionAPI.deleteOption, action.payload.option_id);

    if (response.status === StatusCodes.OK) {
      const response: AxiosResponse<OptionInfoResponse[]> = yield call(optionAPI.getAllOption, parseInt(storeId));

      if (response.status === StatusCodes.OK) {
        yield put(setOptions(response.data));
      } 
    }
  } catch (e) { console.log(e) }
};
function* updateOptionGroupInOption(action: {
  type: string;
  payload: {
    id: number,
    data: UpdateOptionGroupInOption
  }
}) {
  try {
    const response: AxiosResponse = yield call(optionAPI.updateOptionGroupInOption, action.payload.id, action.payload.data);

    if (response.status === StatusCodes.OK) {
      const response: AxiosResponse<OptionInfoResponse[]> = yield call(optionAPI.getAllOption, parseInt(storeId));

      if (response.status === StatusCodes.OK) {
        yield put(setOptions(response.data));
        yield put(setOption(action.payload.id));
      } 
    }
  } catch (e) { console.log(e) }
}

export function* optionSaga(): Generator {
  yield takeLatest('/option/getAllOptionSaga',getAllOptionSaga);
  yield takeLatest('/option/createOptionSaga',createOptionSaga);
  yield takeLatest('/option/deleteOptionSaga',deleteOptionSaga);
  yield takeLatest('/option/updateOptionGroupInOption',updateOptionGroupInOption);
}