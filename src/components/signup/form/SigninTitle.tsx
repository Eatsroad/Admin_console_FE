import React from 'react';
import RouteButton from '../../common/buttons/RouteButton';
import { SigninTitleContainer } from './styles';

const SigninTitle: React.FC = () => (
  <SigninTitleContainer>
    <RouteButton route={"/"} title={"Eatsroad"}/>
  </SigninTitleContainer>
);

export default SigninTitle;