import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Login } from "../pages";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/cms/login" />
        <Route path="/cms/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routing;
