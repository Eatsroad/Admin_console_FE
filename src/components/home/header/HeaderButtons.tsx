import React from 'react';
import { RouteButton } from '../../common/buttons';
import MoveToConsoleButton from './MoveToConsoleButton';
import { HeaderButton, HeaderButtonsContainer } from './styles';

const HeaderButtons: React.FC = () => {
  const isLoggin = localStorage.getItem('accessToken');

  const buttons = [
    {
      name: "회원가입",
      route: "/signup",
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
            <HeaderButton key={button.name} buttonName={button.name}>
              <RouteButton route={button.route} title={button.name}/>
            </HeaderButton>
          ))
        :
        <MoveToConsoleButton/>
      }
    </HeaderButtonsContainer>
  );
};
export default HeaderButtons;