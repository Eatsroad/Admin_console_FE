import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { 
  HomePage, 
  SigninPage, 
  SignupPage 
} from '../pages';

const RouterContainer: React.FC = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/signin" component={SigninPage}/>
    <Route path="/signup" component={SignupPage}/>
    <Redirect path="*" to="/"/>
  </Switch>
);

export default RouterContainer;