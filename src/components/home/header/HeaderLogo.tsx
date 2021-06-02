import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderLogoButton, HeaderLogoContainer } from './styles';

const HeaderLogo: React.FC = () => {
  const history = useHistory();

  return (
    <HeaderLogoContainer>
      <HeaderLogoButton onClick={() => history.push("/")}>Eatsroad</HeaderLogoButton>
    </HeaderLogoContainer>
  );
};

export default HeaderLogo;