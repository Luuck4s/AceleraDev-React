import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginRoute from "./LoginRoute";
import AuthorizeRoute from "./AuthorizeRoute";
import DashboardRoute from "./DashboardRoute";

import { PrivateRoute } from "../containers";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={LoginRoute} exact />

      <Route path="/authorize" component={AuthorizeRoute} exact />

      <PrivateRoute path="/dashboard" comp={DashboardRoute} />
    </Switch>
  );
};

export default Routes;
