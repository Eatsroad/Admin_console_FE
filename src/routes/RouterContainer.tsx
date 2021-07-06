import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { 
  ConsolePage,
  HomePage, 
  SigninPage, 
  SignupPage 
} from '../pages';
import SettingStorePage from '../pages/settingStore';

const RouterContainer: React.FC = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/signin" component={SigninPage}/>
    <Route path="/signup" component={SignupPage}/>
    <Route path="/console/:store_id" component={ConsolePage}/>
    <Route path="/store" component={SettingStorePage}/>
    <Redirect path="*" to="/"/>
  </Switch>
);

export default RouterContainer;