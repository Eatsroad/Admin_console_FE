import React from 'react';
import SignupForm from '../../components/signup/form';
import SigninTitle from '../../components/signup/form/SigninTitle';
import { Container, Wrapper } from './styles';

const SignupPage: React.FC = () => (
  <Container>
    <Wrapper>
      <SigninTitle/>
      <SignupForm/>
    </Wrapper>
  </Container>
);

export default SignupPage;