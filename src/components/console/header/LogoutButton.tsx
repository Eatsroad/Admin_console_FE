import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, LogoutButtonContainer } from './styles';

const LogoutButton = (): JSX.Element => {
  const history = useHistory();

  const onClick = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    localStorage.removeItem('storeId');
    history.replace("/");
  };

  return (
    <LogoutButtonContainer>
      <Button onClick={onClick}>
        ๋ก๊ทธ์์
      </Button>
    </LogoutButtonContainer>
  );
}

export default LogoutButton;