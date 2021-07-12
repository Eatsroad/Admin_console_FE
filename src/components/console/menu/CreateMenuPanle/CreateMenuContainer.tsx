import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DefaultData } from '../../../common/input/CreateForm';
import { CreateMenuData } from '../../../common/type';
import CreateMenuPresenter from './CreateMenuPresenter';

const CreateMenuContainer = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [errMessege, setErrMeseege] = useState<string>();
  const [errState, setErrState] = useState<boolean>(false);
  
  const dispatch = useDispatch();

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
  const onClick = () => {
    const data: CreateMenuData = {
      name: name,
      price: parseInt(price),
      description: description,
      state: "주문 가능",
      store_id: parseInt(localStorage.getItem('storeId')!),
    }
    dispatch({ type: "/menu/createMenuSaga", payload: { data }});
    setName("");
    setPrice("");
    setDescription("");
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
      value: price,
      placeholder: "가격",
      onChange: onChangePrice,
      onPressKey: dummyFunc,
      state: inputState(),
      messege: messege,
    },
    
  ]
  return (
    <CreateMenuPresenter
      data={data}
      state={inputState()}
      errState={errState}
      onClick={onClick}
      errMessege={errMessege!}
    />
  );
};

export default CreateMenuContainer;