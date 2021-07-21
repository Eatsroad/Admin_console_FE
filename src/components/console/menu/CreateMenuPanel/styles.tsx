import styled from 'styled-components';

interface ButtonProps {
  state: boolean;
}

export const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
`;
export const CreateMenuButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.colors.logoColor};
  ${(props: ButtonProps) => props.state ? "": "opacity: 0.4"};    
`;