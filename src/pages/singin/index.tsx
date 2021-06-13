import React from 'react';
import SigninForm from '../../components/signin/form';
import SigninTitle from '../../components/signin/form/SigninTitle';
import { SigninPageContainer, SigninPageWrapper } from './styles';

const SigninPage: React.FC = () => (
  <SigninPageContainer>
    <SigninPageWrapper>
      <SigninTitle/>
      <SigninForm/>
    </SigninPageWrapper>
  </SigninPageContainer>
);

export default SigninPage;