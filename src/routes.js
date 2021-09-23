import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fair from './pages/Fair/index';
import React, { useState } from 'react';
import { UserContext } from './common/contexts/User';
import Login from './pages/Login';
import Cart from './pages/Cart';

function Router() {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <UserContext.Provider value={{ name, setName, balance, setBalance }}>
            <Login />
          </UserContext.Provider>
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
