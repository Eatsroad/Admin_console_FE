import React from "react";
import { 
  BrowserRouter as Router, 
  Redirect, 
  Route, 
  Switch,
} from "react-router-dom";
import ConsolePage from "./page/console";
import HomePage from "./page/home";
import SigninPage from "./page/signin";
import SignupPage from "./page/signup";

const RouterComponent: React.FC = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/signup" component={SignupPage}/>
    <Route path="/signin" component={SigninPage}/>
    <Route path="/console" component={ConsolePage}/>
    <Redirect path="*" to="/"/>
  </Switch>
);

const AppRouter: React.FC = () => (
  <Router>
    <RouterComponent />
  </Router>
);

export default AppRouter;
