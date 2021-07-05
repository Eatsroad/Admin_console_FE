import React from 'react';
import { Button, SigninButtonContainer, SigninErrorMessege } from './styles';

interface Props {
  signinState: boolean;
  errState: boolean;
  onClick: () => void;
}
const SigninButton: React.FC<Props> = ({
  signinState,
  errState,
  onClick,
}: Props) => {
  return (
    <SigninButtonContainer >
      <Button onClick={onClick} signinState={signinState}>
        회원가입
      </Button>
      { errState ? 
        <SigninErrorMessege>
          이미 존재하는 이메일입니다.
        </SigninErrorMessege>
        :<></>
      }
    </SigninButtonContainer>
  );
};

export default SigninButton;
