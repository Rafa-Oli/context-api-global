import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feira from './pages/Feira/index';
import Carrinho from './pages/Carrinho/index';
import React, {useState} from 'react';
import { UserContext } from './common/contexts/User';

function Router(){
    const [name, setName] = useState('')
    const [balance, setBalance] = useState(0)
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <UserContext.Provider value={{name, setName, balance, setBalance}}>
            <Login/>
                </UserContext.Provider>
            </Route>
            <Route exact path='/fair'>
            <Feira/>
            </Route>
            <Route exact path='/cart'>
            <Carrinho/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router