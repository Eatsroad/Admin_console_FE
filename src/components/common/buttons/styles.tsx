import styled from 'styled-components';

interface RequiredStateButtonProps {
  state: boolean;
}
export const Button = styled.button`
  width: 100%;
  height: 100%;
`; 

export const Container = styled.div`
`;
export const Wrapper = styled.div`
`;
export const ButtonText = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.colors.logoColor};
  ${(props: RequiredStateButtonProps) => props.state ? "": "opacity: 0.4"};
`;
export const ErrText = styled.div``;