import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { toHomePage, toResourceList } from "./core/routes";
import HomePage from "./features/HomePage";
import ResourceListPage from "./features/ResourceListPage";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={toHomePage()}>
          <HomePage />
        </Route>
        <Route path={toResourceList()}>
          <ResourceListPage />
        </Route>
        <Route path={"/"}>
          <Redirect to={toHomePage()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
