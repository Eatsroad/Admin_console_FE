import { StatusCodes } from 'http-status-codes';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { storeAPI } from '../../api';
import { RequiredInput } from '../common/input';
import { CreateStoreData } from '../common/type';
import { CreateStoreWrapper, CreateStoreContainer, CreateStoreButton, CreateStoreButtonText } from './styles';

const CreateStore = (): JSX.Element => {
  const history = useHistory();
  const [storeName, setStoreName] = useState({
    storeName: "",
    state: false
  });
  const [address, setAddress] = useState(
    {
      address: "",
      state: false
    }
  );
  const [phoneNumber, setPhoneNumber] = useState(
    {
      phoneNumber: "",
      state: false
    }
  );
  const [table, setTable] = useState(
    {
      table: "",
      state: false
    }
  );
  const messege = ["필수항목입니다."];

  const handleButtonState = (): boolean => {
    let result = false;

    if (storeName.state && address.state) {
      if (phoneNumber.state && table.state) result = true;
    }
    return result;
  }
  const onPressKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    
    if(event.key === 'Enter') {
      onClick();
    }
  }
  const onClick = async () => {
    if (handleButtonState()) {
      try {
        const data: CreateStoreData = {
          name: storeName.storeName,
          address: address.address,
          phone_number: phoneNumber.phoneNumber,
          tables: parseInt(table.table)
        }
        const result = await storeAPI.createStore(data);

        if (result.status === StatusCodes.CREATED) {
          localStorage.setItem('storeId', result.data.store_id.toString());
          history.replace(`/console/${result.data.store_id}`);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStoreName({storeName: event.target.value, state: true});
  }
  const onAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({address: event.target.value, state: true});
  }
  const onPhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber({phoneNumber: event.target.value, state: true});
  }
  const onTableChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTable({table: event.target.value, state: true});
  }


  return (
    <CreateStoreContainer>
      <CreateStoreWrapper>
        <RequiredInput
          placeholder="가게 이름"
          value={storeName.storeName}
          messege={messege}
          state={storeName.state}
          onChange={onNameChange}
          onPressKey={onPressKey}
        />
        <RequiredInput
          placeholder="가게 주소"
          value={address.address}
          messege={messege}
          state={address.state}
          onChange={onAddressChange}
          onPressKey={onPressKey}
        />
        <RequiredInput
          placeholder="가게 전화번호"
          value={phoneNumber.phoneNumber}
          messege={messege}
          state={phoneNumber.state}
          onChange={onPhoneNumberChange}
          onPressKey={onPressKey}
        />
        <RequiredInput
          placeholder="테이블 수"
          value={table.table}
          messege={messege}
          state={table.state}
          onChange={onTableChange}
          onPressKey={onPressKey}
        />
        <CreateStoreButton onClick={onClick} state={handleButtonState()}>
          <CreateStoreButtonText>가게 생성하기</CreateStoreButtonText>
        </CreateStoreButton>
      </CreateStoreWrapper>
    </CreateStoreContainer>
  );
};

export default CreateStore;