import { lookup } from 'dns';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { StoreBoxContainer, StoreImg, StoreName } from './styles';

interface Props {
  storeName: string;
  storeId: number;
}
const StoreBox = ({storeName, storeId}: Props): JSX.Element => {
  const history = useHistory();

  const onClick = () => {
    localStorage.setItem("storeId", storeId.toString());
    history.push(`/console/${storeId}`);
  }
  return (
    <StoreBoxContainer onClick={onClick}>
      <StoreImg/>
      <StoreName>{storeName}</StoreName>
    </StoreBoxContainer>
  );
};

export default StoreBox;