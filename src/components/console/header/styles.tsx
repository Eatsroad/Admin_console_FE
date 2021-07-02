import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;

  position: fixed;
  top: 0px;

  padding: 0 20px 0 20px;

  background-color: ${({ theme }) => theme.colors.footerBackgroundColor};;
`;
export const Wapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

`;
export const Title = styled.div`
  color: ${({ theme }) => theme.colors.logoColor};
  font-size: 25px;
  font-weight: bold;
`;