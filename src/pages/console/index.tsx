import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { 
  ConsoleCategory,
  ConsoleHeader,
  ConsoleMenu, 
  ConsoleOptionGroup,
  ConsoleSideBar 
} from '../../components/console';
import { Container, Content } from './styles';

const ConsoleSubRouter = ():JSX.Element => (
  <Switch>
    <Route exact path="/console/menu" component={ConsoleMenu}/>
    <Route exact path="/console/category" component={ConsoleCategory}/>
    <Route exact path="/console/option-group" component={ConsoleOptionGroup}/>
  </Switch>
);
const ConsolePage = (): JSX.Element => {
  const token = localStorage.getItem("accessToken");
  const history = useHistory();

  useEffect(() => {
    if (!token) history.replace("/");
  }, [history, token]);

  return (
    <Container>
      <ConsoleHeader/>
      <Content>
        <ConsoleSideBar/>
        <ConsoleSubRouter/>
      </Content>
    </Container>
  );
};

export default ConsolePage;