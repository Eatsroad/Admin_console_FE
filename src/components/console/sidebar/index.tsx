import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ConsoleRouteList } from './ConsoleRouteList';
import { Button, Container, Wapper } from './styles';

const ConsoleSideBar = (): JSX.Element => {
  const history = useHistory();
  const [bt, setBt] = useState<string>("메뉴");

  return (
    <Container>
      <Wapper>
        {ConsoleRouteList.map((button) => (
          <Button 
            key={button.name} 
            onClick={() => {history.push(button.route); setBt(button.name)}}
            index={button.name}
            state={bt}
          >
            {button.name}
          </Button>
        ))}
      </Wapper>
    </Container>
  );
};

export default ConsoleSideBar;