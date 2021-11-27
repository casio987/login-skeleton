import React from "react";
import { Switch, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const Routes = () => (
  <Switch>
      <Route exact path="/">
          <LandingPage />
      </Route>
      <Route exact path="/signup">
        <SignUpPage />
      </Route>
  </Switch>
);

export default Routes;