import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, LogoutButtonContainer } from './styles';

const LogoutButton = (): JSX.Element => {
  const history = useHistory();

  const onClick = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    history.replace("/");
  };

  return (
    <LogoutButtonContainer>
      <Button onClick={onClick}>
        로그아웃
      </Button>
    </LogoutButtonContainer>
  );
}

export default LogoutButton;