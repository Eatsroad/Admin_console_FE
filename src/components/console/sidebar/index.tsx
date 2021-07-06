import React from 'react';
import { ConsoleRouteList } from './ConsoleRouteList';
import { Button, Container, StoreName, Wapper } from './styles';

interface Props {
  setCom: (index: number) => void;
  currentIndex: number;
  storeName: string;
}

const ConsoleSideBar = ({setCom, currentIndex, storeName}: Props): JSX.Element => (
  <Container>
    <Wapper>
      <StoreName>{storeName}</StoreName>
      {
        ConsoleRouteList.map((button, index) => (
          <Button 
            key={button.name} 
            onClick={() => setCom(index)}
            index={index}
            state={currentIndex}
          >
            {button.name}
          </Button>
        ))
      }
    </Wapper>
  </Container>
);

export default ConsoleSideBar;