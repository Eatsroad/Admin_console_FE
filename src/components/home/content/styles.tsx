import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const SummuryContainer = styled.div`
  height: 800px;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  background-color: #ffffff;
`;
export const SummuryWrapper = styled.div`
  margin: auto;
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
export const Test = styled.h1`
`;
export const FirstContentsContainer = styled.div`
  width: 100vw;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.footerBackgroundColor};
  display: flex;
`;
export const FirstContentTitle = styled.div`
  margin: 0 auto;
`;
export const  FirstContentSubTitle = styled.div`
`;
export const SecondContentsContainer = styled.div`
  width: 100vw;
  height: 500px;
  /* background-color: ${({ theme }) => theme.colors.footerBackgroundColor}; */
  display: flex;
`;
export const SecondContentTitle = styled.div`
  margin: 0 auto;
`;
export const SecondContentSubTitle = styled.div`
`;
