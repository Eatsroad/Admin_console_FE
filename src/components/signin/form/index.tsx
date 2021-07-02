import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userApi } from '../../../api';
import RouteButton from '../../common/buttons/RouteButton';
import { RequiredInput } from '../../common/input';
import { UserSigninData, UserSigninResponse } from '../type';
import SigninButton from './SigninButton';
import { StatusCodes } from "http-status-codes";
import {
  ButtonsContainer, 
  GotoSignupPageButton, 
  SigninFormContainer, 
} from './styles';

const SigninForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emailState, setEmaiState] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [passwordState, setPasswordState] = useState<boolean>(true);
  const [errState, setErrState] = useState<boolean>(false);
  const history = useHistory();

  const emailMessegeList = [
    "올바은 이메일 형식이 아닙니다."
  ];
  const passwordMessegeList = [
    "비밀번호를 입력해주세요",
  ];
  
  const IsEmail = (): boolean => {
    var regExp =/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
  }
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    
    if (IsEmail()) setEmaiState(true);
    else if (email === "") setEmaiState(false);
  }
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (password !== "") setPasswordState(true);
  }
  const hanbleSiginState = (): boolean => {
    var result = false;
    if (emailState && passwordState) {
      result = true;
    }
    if (email === "") result = false;
    if (password === "") result = false;
    
    return result;
  }
  const onPressKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      onClick();
    }
  }
  const onClick = async () => {
    if (hanbleSiginState()) {
      try {
        const data: UserSigninData = {
          email: email,
          password: password
        }
        const response: AxiosResponse<UserSigninResponse> = await userApi.signin(data);
  
        if (response.status === StatusCodes.CREATED) {
          console.log(response.data);
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("userName", response.data.name);
          history.replace("/console");
        }
      } catch (e) {
        setErrState(true);
      }  
    }
  }
  
  return (
    <SigninFormContainer>
      <RequiredInput
        placeholder="이메일"
        value={email}
        onChange={onEmailChange}
        messege={emailMessegeList}
        state={emailState}
        onPressKey={onPressKey}
      />
      <RequiredInput
        placeholder="비밀번호"
        value={password}
        onChange={onPasswordChange}
        messege={passwordMessegeList}
        state={passwordState}
        onPressKey={onPressKey}
      />
      <ButtonsContainer>
        <SigninButton
          signinState={hanbleSiginState()}
          errState={errState}
          onClick={onClick}
        />
        <GotoSignupPageButton>
          <RouteButton route={"/signup"} title={"회원이 아니신가요?"}/>
        </GotoSignupPageButton>
      </ButtonsContainer>
    </SigninFormContainer>
  );
};

export default SigninForm;