import styled from 'styled-components';

interface ButtonProp {
  index: string;
  state: string;
}

export const Container = styled.div`
  width: 150px;
`;
export const Wapper = styled.div`
  
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;

  font-size: 16px;
  background-color: ${(props: ButtonProp) => props.index === props.state ? "gray" : ""};
`;