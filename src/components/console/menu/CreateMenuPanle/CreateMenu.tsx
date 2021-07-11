import React, { useState } from 'react';
import ButtonWithRequiredState from '../../../common/buttons/ButtonWithRequiredState';
import CreateFormWithRequiredInput, { DefaultData } from '../../../common/input/CreateForm';
import { 
  Container 
} from './styles';

interface Props {
  create: ( name: string, price: string, description: string) => void;
  errMessege: string;
  errState: boolean;
}
const CreateMenu = ({ 
  create,
  errMessege,
  errState
}: Props): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
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
    console.log("clicked")
    create(name, price, description);
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
    <Container>
     <CreateFormWithRequiredInput
      data={data}
    />
    <ButtonWithRequiredState
      state={inputState()}
      onClick={onClick}
      text={"메뉴 추가하기"}
      errMessege={errMessege!}
      errState={errState}
    />      
    </Container>
  );
}

export default CreateMenu;