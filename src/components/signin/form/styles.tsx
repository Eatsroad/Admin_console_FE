import styled from 'styled-components';
interface ButtonProps {
  signinState: boolean
}
export const SigninTitleContainer = styled.div`
  button {
    font-weight: bold;
    font-size: 40px;
    color: ${({ theme }) => theme.colors.logoColor};
    margin-bottom: 20px;
  }
`;

export const SigninFormContainer = styled.div`
  width: 400px;
  height: 800px;
  display: flex;
  flex-direction: column;
`;
export const SigninTitleButton = styled.button`
  
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SigninButtonContainer = styled.div`
  width: 100%;
`;
export const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.colors.logoColor};
  ${(props: ButtonProps) => props.signinState ? "": "opacity: 0.4"};
`;
export const SigninErrorMessege = styled.div`
  font-size: 12px;
  color: red;
  margin: 10px;
  text-align: center;
`;
export const GotoSignupPageButton = styled.div`
  width: 100%;
  margin: auto;
  font-size: 16px;
`;
