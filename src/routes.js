import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fair from './pages/Fair/index';
import React from 'react';
import Login from './pages/Login';
import Cart from './pages/Cart';
import UserProvider from './common/contexts/UserProvider';

function Router() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/fair'>
            <Fair />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
}

export default Router;
