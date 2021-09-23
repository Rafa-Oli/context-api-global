import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fair from './pages/Fair/index';
import React from 'react';
import Login from './pages/Login';
import Cart from './pages/Cart';
import UserProvider from './common/contexts/UserProvider';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <UserProvider>
            <Login />
          </UserProvider>
        </Route>
        <Route exact path='/fair'>
          <Fair />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
