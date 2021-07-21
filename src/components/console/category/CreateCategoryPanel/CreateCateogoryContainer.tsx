/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DefaultData } from '../../../common/input/CreateForm';
import { CreateCategoryData } from '../../../common/type';
import CreateCategoryPresenter from './CreateCategoryPresenter';

const CreateCategoryContainer = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [errMessege, setErrMeseege] = useState<string>();
  const [errState, setErrState] = useState<boolean>(false);

  const dispatch = useDispatch();

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
  const onClick = () => {
    const data: CreateCategoryData = {
      name: name,
      description: description,
      state: "주문 가능",
      store_id: parseInt(localStorage.getItem('storeId')!),
      menus: [],
      role: "ETC"
    }
    dispatch({ type: "/category/createCategorySaga", payload: { data }});
    setName("");
    setDescription("");
  }

  return (
    <CreateCategoryPresenter
      data={data}
      state={inputState()}
      errState={errState}
      onClick={onClick}
      errMessege={errMessege!}
    />
  ) 
};
export default CreateCategoryContainer;