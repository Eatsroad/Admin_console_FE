import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { StorePreviewInfo } from '../../common/type';
import { ConsoleRouteList } from './ConsoleRouteList';
import { Button, Container, Wapper } from './styles';

interface Props {
  storeId: number,
  userData: StorePreviewInfo[];
  setStore: (storeId: number) => void;
}

const ConsoleSideBar = ({storeId, userData, setStore}: Props): JSX.Element => {
  const history = useHistory();
  const location = useLocation().pathname;
  const [bt, setBt] = useState<string>(location);

  return (
    <Container>
      <Wapper>
        {
          ConsoleRouteList.map((button) => (
            <Button 
              key={button.name} 
              onClick={() => {history.push(button.route); setBt(button.route)}}
              index={button.route}
              state={bt}
            >
              {button.name}
            </Button>
          ))
        }
      </Wapper>
    </Container>
  );
};

export default ConsoleSideBar;