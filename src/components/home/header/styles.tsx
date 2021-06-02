import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;

  width: 100vw;
  height: 50px;

  border-bottom: 1px solid #d3d3d3;
  background-color: white;
`;
export const HeaderWrapper = styled.div`
  max-width: 1440px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin: auto;
`;
export const HeaderLogoContainer = styled.div`
  
`;
export const HeaderLogoButton = styled.button`
  color: ${({ theme }) => theme.colors.logoColor};
  font-weight: bold;
  font-size: 20px;
`;

export const HeaderButtonsContainer = styled.div`
  
`;
export const HeaderButton = styled.button`
  
`;