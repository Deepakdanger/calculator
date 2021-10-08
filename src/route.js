import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import quote from './components/quote';
import home from './components/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/calculator" component={App} />
      <Route path="/quote" component={quote} />
    </Switch>
  </BrowserRouter>

);

export default Routes;
