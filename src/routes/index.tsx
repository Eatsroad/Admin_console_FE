import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterContainer from './RouterContainer';

const AppRouter: React.FC = () => (
  <Router>
    <RouterContainer/>
  </Router>
);

export default AppRouter;