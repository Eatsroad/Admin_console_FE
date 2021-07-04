import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 50px;

  position: fixed;
  top: 0px;

  background-color: ${({ theme }) => theme.colors.footerBackgroundColor};;
`;
export const Wapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px 0 20px;

`;
export const Title = styled.div`
  color: ${({ theme }) => theme.colors.logoColor};
  font-size: 25px;
  font-weight: bold;
`;
export const LogoutButtonContainer = styled.div`
`;
export const Button = styled.div``;