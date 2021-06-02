import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.footerBackgroundColor};
`;
export const FooterWrapper = styled.div`
  margin: auto;
  padding: 20px;
  
  max-width: ${({ theme }) => theme.maxWidth};;
  height: 100%;
`;