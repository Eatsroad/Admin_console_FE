import React from 'react';
import { Button, MoveToConsoleButtonContainer, UserName } from './styles';

const MoveToConsoleButton: React.FC = () => {
  const name = localStorage.getItem("userName");

  return (
    <MoveToConsoleButtonContainer>
      <UserName>{name}님</UserName>
      <Button>콘솔로 이동</Button>
    </MoveToConsoleButtonContainer>
  );
};

export default MoveToConsoleButton;