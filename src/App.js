import React, { Fragment, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

/* lazy loading */
const Crew = React.lazy(() => import('./Pages/Crew'));
const Destination = React.lazy(() => import('./Pages/Destination'));
const Technology = React.lazy(() => import('./Pages/Technology'));
const Home = React.lazy(() => import('./Pages/Home'));


function App() {
  return (
    <Fragment>
      <Suspense fallback={<p>Loading...</p>}>
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
      </Suspense>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </Fragment>
  );
}

export default App;
