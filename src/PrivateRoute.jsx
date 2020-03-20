import React from "react";
import { Route, Redirect } from "react-router-dom";

// eslint-disable-next-line react/prop-types

const fakeAuth = {
  isAuthenticated: true,
  isNotAuthenticated: false
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )}
  />
);
