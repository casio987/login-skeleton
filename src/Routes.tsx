import React from "react";
import { Switch, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

const Routes = () => (
  <Switch>
      <Route exact path="/">
          <LandingPage />
      </Route>
  </Switch>
);

export default Routes;