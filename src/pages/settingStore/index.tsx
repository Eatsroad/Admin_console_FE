import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConsoleHeader } from '../../components/console';
import SelectStore from '../../components/settingStore';
import CreateStore from '../../components/settingStore/CreateStore';
import { Container } from './styles';

const SettingStorePage = (): JSX.Element => {
  return (
    <Container>
      <ConsoleHeader/>
      <Switch>
        <Route exact path="/store" component={SelectStore}/>
        <Route exact path="/store/create" component={CreateStore}/>
      </Switch>
    </Container>
  );
};

export default SettingStorePage;