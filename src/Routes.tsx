import React from "react";
import { Switch, Route} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const Routes = () => (
  <Switch>
      <Route exact path="/">
          <LoginPage />
      </Route>
      <Route exact path="/signup">
        <SignUpPage />
      </Route>
      <Route exact path="/landing">
        <LandingPage />
      </Route>
      <Route exact path="/error">
        <ErrorPage />
      </Route>
  </Switch>
);

export default Routes;