import styled from 'styled-components';
interface HeaderButtonProps {
  buttonName: string;
}
export const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;

  width: 100vw;
  height: 50px;

  border-bottom: 1px solid #d3d3d3;
  background-color: white;
`;
export const HeaderWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin: auto;
  padding: 0 20px 0 20px;
`;
export const HeaderLogoContainer = styled.div`
  
`;
export const HeaderLogoButton = styled.button`
  color: ${({ theme }) => theme.colors.logoColor};
  font-weight: bold;
  font-size: 20px;
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
`;
export const HeaderButton = styled.div`
  
  ${(props: HeaderButtonProps) => props.buttonName === "로그인" ? 
    `
    button {
      font-size: 18px;
      margin-left: 10px;
    }`
    : 
    "16px"
  };
  
`;
export const MoveToConsoleButtonContainer = styled.div`
`;
export const UserName = styled.div`
`;
export const Button = styled.button`
`;