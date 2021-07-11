import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import React, { useState } from 'react';
import { categoryAPI } from '../../../api';
import ButtonWithRequiredState from '../../common/buttons/ButtonWithRequiredState';
import CreateFormWithRequiredInput, { DefaultData } from '../../common/input/CreateForm';
import { CreateCategoryData, CreateCategoryResponse } from '../../common/type';
import { CreateCategoryContainer } from './styles';

interface Props {
  storeId: string,
  menus: number[];
}
const CreateCategory = ({
  storeId,
  menus
}: Props) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [errMeseege, setErrMeseege] = useState<string>();
  const [errState, setErrState] = useState<boolean>(false);

  const inputState = () => {
    if (name === "") return false;
    if (description === "") return false;
    else return true;
  } 
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const onChangeDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  }
  const dummyFunc = () => {

  }
  const messege = [
    "필수 항목입니다."
  ]
  const data: DefaultData[] = [
    {
      value: name,
      placeholder: "카테고리 이름",
      onChange: onChangeName,
      onPressKey: dummyFunc,
      state: inputState(),
      messege: messege,
    },
    {
      value: description,
      placeholder: "카테고리 설명",
      onChange: onChangeDesc,
      onPressKey: dummyFunc,
      state: inputState(),
      messege: messege,
    },
    
  ]
  const create = async () => {
    if (inputState()) {
      try {
        const data: CreateCategoryData = {
          name: name,
          description: description,
          state: "주문 가능",
          store_id: parseInt(storeId),
          menus: menus,
          role: "ETC"
        }
        const response: AxiosResponse<CreateCategoryResponse> = await categoryAPI.createCategory(data);
  
        if (response.status === StatusCodes.CREATED) {
  
        }
  
      } catch (e) {
        setErrState(true);
        setErrMeseege("이미 있는 카테고리입니다.");
      }
    }
  }

  return (
    <CreateCategoryContainer>
      <CreateFormWithRequiredInput
        data={data}
      />
      <ButtonWithRequiredState
      state={inputState()}
      onClick={create}
      text={"카테고리 추가하기"}
      errMessege={errMeseege!}
      errState={errState}
    />    
    </CreateCategoryContainer>
  ) 
};
export default CreateCategory;