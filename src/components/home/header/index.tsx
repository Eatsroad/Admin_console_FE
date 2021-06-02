import React from 'react';
import HeaderButtons from './HeaderButtons';
import HeaderLogo from './HeaderLogo';
import { 
  HeaderContainer,
  HeaderWrapper 
} from './styles';

const Header:React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogo/>
        <HeaderButtons/>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
export default Header;