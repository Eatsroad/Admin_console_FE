import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderButton, HeaderButtonsContainer } from './styles';

const HeaderButtons: React.FC = () => {
  const history = useHistory();
  const isLoggin = false;

  const buttons = [
    {
      name: "회원가입",
      route: "/signin",
    },
    {
      name: "로그인",
      route: "/signin",
    },
  ]
  return (
    <HeaderButtonsContainer>
      {
        !isLoggin ? 
          buttons.map((button) => (
            <HeaderButton onClick={() => history.push(button.route)}>{button.name}</HeaderButton>
          ))
        :
        <HeaderButton onClick={() => history.push("/console")}>콘솔로 이동</HeaderButton>
      }
    </HeaderButtonsContainer>
  );
};
export default HeaderButtons;