import React from 'react';
import { Button, LogoutButtonContainer } from './styles';

const LogoutButton = (): JSX.Element => {
  const onClick = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
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