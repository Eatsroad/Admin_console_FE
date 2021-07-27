import React from 'react';
import { useHistory } from 'react-router-dom';
import { StoreBoxContainer, StoreImg, StoreName } from './styles';

interface Props {
  storeName: string;
  storeId: string;
}
const StoreBox = ({storeName, storeId}: Props): JSX.Element => {
  const history = useHistory();

  const onClick = () => {
    localStorage.setItem("storeId", storeId.toString());
    history.push(`/console`);
  }
  return (
    <StoreBoxContainer onClick={onClick}>
      <StoreImg/>
      <StoreName>{storeName}</StoreName>
    </StoreBoxContainer>
  );
};

export default StoreBox;