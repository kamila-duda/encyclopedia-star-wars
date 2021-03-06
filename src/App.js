import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { toDetailsPage, toHomePage, toResourceList } from "./core/routes";
import HomePage from "./features/HomePage";
import ResourceListPage from "./features/ResourceListPage";
import DetailsPage from "./features/DetailsPage";
import Navbar from "./features/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Switch>
        <Route  path={toDetailsPage()}>
          <DetailsPage />
        </Route>
        <Route path={toResourceList()}>
          <ResourceListPage />
        </Route>
        <Route path={toHomePage()}>
          <HomePage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
