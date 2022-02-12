import React from "react";
import { Switch, Route, Redirect, RouteProps } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

interface AuthenticatedRouteProps extends RouteProps {
  children: React.ReactNode;
  path: string;
}

const AuthenticatedRoute = ({ children, ...rest }: AuthenticatedRouteProps) => {
  const token = sessionStorage.getItem(process.env.REACT_APP_TOKEN!);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !!token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};


const Routes = () => (
  <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route exact path="/signup">
        <SignUpPage />
      </Route>
      <AuthenticatedRoute exact path="/landing">
        <LandingPage />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/error">
        <ErrorPage />
      </AuthenticatedRoute>
  </Switch>
);

export default Routes;