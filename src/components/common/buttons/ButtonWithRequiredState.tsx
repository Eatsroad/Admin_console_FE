import React from 'react';
import { ButtonText, Container, ErrText, Wrapper } from './styles';

interface Props {
  state: boolean;
  onClick: () => void;
  errState: boolean;
  text: string;
  errMessege: string;
}
const ButtonWithRequiredState = ({
  state,
  onClick,
  errState,
  text,
  errMessege
}: Props): JSX.Element => {
  const handelClick = () => {
    state && onClick();
  } 
  return (
    <Container>
      <Wrapper>
        <ButtonText onClick={handelClick} state={state}>{text}</ButtonText>
      </Wrapper>
      {
        errState && <ErrText>{errMessege}</ErrText>
      }
      
    </Container>
  );
};

export default ButtonWithRequiredState;