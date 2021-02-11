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
        <Route exact path={toHomePage()}>
          <HomePage />
        </Route>
        <Route exact path={toDetailsPage()}>
          <DetailsPage />
        </Route>
        <Route exact path={toResourceList()}>
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
