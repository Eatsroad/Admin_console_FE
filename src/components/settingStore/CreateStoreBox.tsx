import React from 'react';
import { useHistory } from 'react-router-dom';
import { CreateStoreBoxContainer, CreateStoreBoxText} from './styles';

const CreateStoreBox = (): JSX.Element => {
  const history = useHistory();

  return (
    <CreateStoreBoxContainer onClick={() => history.push("/store/create")}>
      <CreateStoreBoxText>가게 등록하기</CreateStoreBoxText>
    </CreateStoreBoxContainer>
  );
};

export default CreateStoreBox;