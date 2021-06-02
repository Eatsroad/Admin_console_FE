import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const SummuryContainer = styled.div`
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  background-color: #ffffff;
`;
export const SummryTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  /* text-align: center; */
  color: ${({ theme }) => theme.colors.logoColor};
  margin-bottom: 20px;
`;
export const SummuryButton = styled.button`
  width: 200px;
  color: white;

  padding: 10px;
  font-weight: bold;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.logoColor};
`;