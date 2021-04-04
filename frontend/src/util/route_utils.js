import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const state = useSelector((state) => state);
  const { signedIn } = state.session;
  return (
    <Route
      {...rest}
      render={(props) =>
        signedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export const AuthRoute = ({ component: Component, ...rest }) => {
  const state = useSelector((state) => state);
  const { signedIn } = state.session;

  return (
    <Route
      {...rest}
      render={(props) =>
        signedIn ? <Redirect to="/files" /> : <Component {...props} />
      }
    />
  );
};
