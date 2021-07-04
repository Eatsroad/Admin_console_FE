import React from 'react';
import LogoutButton from './LogoutButton';
import { Container, Title, Wapper } from './styles';

const ConsoleHeader = (): JSX.Element => (
  <Container>
    <Wapper>
      <Title>Eatsroad</Title>
      <LogoutButton/>
    </Wapper>
  </Container>
);

export default ConsoleHeader;