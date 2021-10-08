import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Quote from './components/quote';
import Home from './components/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={App} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>

);

export default Routes;
