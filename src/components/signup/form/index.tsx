import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userApi } from '../../../api';
import RouteButton from '../../common/buttons/RouteButton';
import { RequiredInput } from '../../common/input';
import { UserSignupdata, UserSignupResponse } from '../type';
import SigninButton from './SigninButton';
import { StatusCodes } from "http-status-codes";
import {
  ButtonsContainer, 
  GotoSignupPageButton, 
  SigninFormContainer, 
} from './styles';
import { UserSigninData, UserSigninResponse } from '../../signin/type';

const SignupForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nameState, setNameState] = useState<boolean>(true);
  const [phoneState, setPhoneState] = useState<boolean>(true);
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
  const requierdMessege = [
    "필수항목입니다."
  ]
  
  const IsEmail = (): boolean => {
    var regExp =/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
  }
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    
    if (IsEmail()) setEmaiState(true);
    else if (email === "") setEmaiState(false);
  }
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (name !== "") setNameState(true);
  }
  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (phone !== "") setPhoneState(true);
  }
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (password !== "") setPasswordState(true);
  }
  const hanbleSiginState = (): boolean => {
    var result = false;
    if (emailState && passwordState) {
      if (nameState && phoneState) result = true;
    }
    if (email === "") result = false;
    if (password === "") result = false;
    if (name === "") result = false;
    if (phone === "") result = false;
    
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
        const data: UserSignupdata = {
          email: email,
          password: password,
          name: name,
          phone_number: phone,
          user_role: "USER",
        }
        const response: AxiosResponse<UserSignupResponse> = await userApi.signup(data);
  
        if (response.status === StatusCodes.CREATED) {
          const signinData: UserSigninData = {
            email: email,
            password: password
          }
          const signinResponse: AxiosResponse<UserSigninResponse> = await userApi.signin(signinData);
          if (signinResponse.status === StatusCodes.CREATED) {
            localStorage.setItem("accessToken", signinResponse.data.accessToken);
            localStorage.setItem("userName", signinResponse.data.name);
            localStorage.setItem("userId", signinResponse.data.user_id.toString());
            history.replace(`/store`);
          }
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
      <RequiredInput
        placeholder="이름"
        value={name}
        onChange={onNameChange}
        messege={requierdMessege}
        state={emailState}
        onPressKey={onPressKey}
      />
      <RequiredInput
        placeholder="전화번호"
        value={phone}
        onChange={onPhoneChange}
        messege={requierdMessege}
        state={emailState}
        onPressKey={onPressKey}
      />
      <ButtonsContainer>
        <SigninButton
          signinState={hanbleSiginState()}
          errState={errState}
          onClick={onClick}
        />
        <GotoSignupPageButton>
          <RouteButton route={"/signin"} title={"이미 회원이신가요?"}/>
        </GotoSignupPageButton>
      </ButtonsContainer>
    </SigninFormContainer>
  );
};

export default SignupForm;