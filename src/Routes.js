import React from "react";
import {Route, Switch} from "react-router-dom";
import Favorite from "./containers/Favorite";
import Home from "./containers/Home";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/favorite" component={Favorite} />
        </Switch>
    )
};

export default Routes;