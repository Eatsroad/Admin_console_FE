import styled from 'styled-components';

interface FiexdProps {
  state: boolean;
  y: number
}
interface DividerProps {
  y: number;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
`;
export const LeftViewContainer = styled.div`
  width: 100%;
  ${(props: FiexdProps) => props.state ? `transform: translate(0, ${props.y}px)`: ""};
`;
export const RightViewContainer = styled.div`
  flex: 1;
  ${(props: FiexdProps) => props.state ? `transform: translate(0, ${props.y}px)`: ""};
`;
export const Divider = styled.div`
  height: 100%;
  border: 1px solid #808080;
  
  
`;
export const DividerHitBox = styled.div`
  cursor: col-resize;
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  ${(props: DividerProps) => `transform: translate(0, ${props.y}px)`};
  :hover {
    div {border: 1px solid #2596ff;}
  }
`;