import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fair from './pages/Fair/index';
import React from 'react';
import Login from './pages/Login';
import Cart from './pages/Cart';
import UserProvider from './common/contexts/user/UserProvider';
import { CartProvider } from './common/contexts/cart/CartProvider';
import { PaymentProvider } from './common/contexts/payment/PaymentProvider';

function Router() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <CartProvider>
            <Route exact path='/fair'>
              <Fair />
            </Route>
            <PaymentProvider>
              <Route exact path='/cart'>
                <Cart />
              </Route>
            </PaymentProvider>
          </CartProvider>
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
}

export default Router;
