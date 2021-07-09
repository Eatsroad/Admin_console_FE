import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import React, { useState } from 'react';
import { menuAPI } from '../../../api';
import CreateFormWithRequiredInput, { DefaultData } from '../../common/input/CreateForm';
import { CreateMenuData, CreateMenuResponse } from '../../common/type';
import { CreateMenuButton, CreateMenuContainer } from './styles';

interface Props {
  storeId: string;
}
const CreateMenu = ({ storeId }: Props): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [errMeseege, setErrMeseege] = useState<string>();
  const [errState, setErrState] = useState<boolean>(false);

  const messege = [
    "필수 항목입니다."
  ]
  
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  }
  const onChangeDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  }
  const dummyFunc = () => {

  }
  const inputState = () => {
    if (name === "") return false;
    if (price === "") return false;
    if (description === "") return false;
    else return true;
  } 

  const create = async () => {
    try {
      const data: CreateMenuData = {
        name: name,
        price: parseInt(price),
        description: description,
        state: "주문 가능",
        store_id: parseInt(storeId)
      };
      const result: AxiosResponse<CreateMenuResponse> = await menuAPI.createMenu(data);

      if (result.status === StatusCodes.CREATED) {
        console.log(result.data);
      }
    } catch (e) {
      setErrState(true);
      setErrMeseege("이미 있는 메뉴입니다.");
    }
  }
  const data: DefaultData[] = [
    {
      value: name,
      placeholder: "메뉴 이름",
      onChange: onChangeName,
      onPressKey: dummyFunc,
      state: inputState(),
      messege: messege,
    },
    {
      value: description,
      placeholder: "메뉴 설명",
      onChange: onChangeDesc,
      onPressKey: dummyFunc,
      state: inputState(),
      messege: messege,
    },
    {
      value: description,
      placeholder: "가격",
      onChange: onChangePrice,
      onPressKey: dummyFunc,
      state: inputState(),
      messege: messege,
    },
    
  ]
  return (
    <CreateMenuContainer>
     <CreateFormWithRequiredInput
      data={data}
    />
      <CreateMenuButton state={inputState()} onClick={create}>
        메뉴 추가하기
        {errState ? `${errMeseege}`: ""}
      </CreateMenuButton>
      
    </CreateMenuContainer>
  );
}

export default CreateMenu;