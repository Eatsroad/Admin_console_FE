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
        로그인
      </Button>
      { errState ? 
        <SigninErrorMessege>
          존재하지 않는 이메일이거나 비밀번호가 일치하지 않습니다
        </SigninErrorMessege>
        :<></>
      }
    </SigninButtonContainer>
  );
};

export default SigninButton;
