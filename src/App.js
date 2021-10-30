import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Crew from "./Pages/Crew";
import Destination from "./Pages/Destination";
import Home from "./Pages/Home";
import Technology from "./Pages/Technology";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/destination/:destinationName">
          <Destination />
        </Route>
        <Route path="/destination" exact>
          <Redirect to="/destination/moon" />
        </Route>
        <Route path="/crew/:crewRole">
          <Crew />
        </Route>
        <Route path="/crew" exact>
          <Redirect to="/crew/commander" />
        </Route>
        <Route path="/tech/:tech">
          <Technology />
        </Route>
        <Route path="/tech" exact>
          <Redirect to="/tech/vehicle" />
        </Route>
      </Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </Fragment>
  );
}

export default App;
