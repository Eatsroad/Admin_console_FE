import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const ConsolePage: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/menu"/>
      <Route exact path="/op"/>
      <Route exact path="/ev"/>
      <Route exact path="/ca"/>
    </Switch>
  </Router>
);

export default ConsolePage;