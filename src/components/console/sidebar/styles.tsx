import styled from 'styled-components';

interface ButtonProp {
  index: number;
  state: number;
}

export const Container = styled.div`
  position: fixed;
  top: 50px;
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
  color: ${(props: ButtonProp) => props.index === props.state ? "white" : "black"};
`;

export const StoreName = styled.div`
`;