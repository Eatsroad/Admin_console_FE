import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DefaultData } from '../../../common/input/CreateForm';
import { CreateOptionData } from '../../../common/type';
import CreateOptionPresenter from './CreateOptionPresenter';

const CreateOptionContainer = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [errMessege, setErrMeseege] = useState<string>();
  const [errState, setErrState] = useState<boolean>(false);

  const dispatch = useDispatch();

  const inputState = () => {
    if (name === "") return false;
    if (price === "") return false;
    else return true;
  } 
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  }
  const dummyFunc = () => {

  }
  const messege = [
    "필수 항목입니다."
  ]
  const data: DefaultData[] = [
    {
      value: name,
      placeholder: "옵션 이름",
      onChange: onChangeName,
      onPressKey: dummyFunc,
      state: inputState(),
      messege: messege,
    },
    {
      value: price,
      placeholder: "옵션 가격",
      onChange: onChangePrice,
      onPressKey: dummyFunc,
      state: inputState(),
      messege: messege,
    },
  ];
  const onClick = () => {
    const data: CreateOptionData = {
      name: name,
      price: parseInt(price),
      state: "주문 가능",
      store_id: parseInt(localStorage.getItem('storeId')!),
    };
    dispatch( { type:'/option/createOptionSaga', payload: { data } } );
    setName("");
    setPrice("");
  }
  return (
    <CreateOptionPresenter
      data={data}
      state={inputState()}
      errState={errState}
      onClick={onClick}
      errMessege={errMessege!}
    />
  );
};

export default CreateOptionContainer;