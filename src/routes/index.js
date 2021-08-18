/* eslint react/prop-types: 0 */
import React, { Component, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "components/errors/404";
import { PublicRoute, ProtectedRoute } from "routes/router";

export default class index extends Component {
  render() {
    return (
      <Switch>
        <PublicRoute
          path={["/", "/home"]}
          exact
          component={lazy(() => import("pages/Landing"))}
        />

        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
