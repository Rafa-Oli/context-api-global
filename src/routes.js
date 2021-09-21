import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";


function Router(){
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/'>
            <Login></Login>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router