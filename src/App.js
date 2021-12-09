import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./features/Navbar";
import Planets from "./pages/Planets";
import People from "./pages/People";
import Films from "./pages/Films";
import Species from "./pages/Species";
import Vehicles from "./pages/Vehicles";
import Starships from "./pages/Starships";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path={"/:path/:id"}>
          <DetailsPage />
        </Route>
        <Route path={"/films"}>
          <Films />
        </Route>
        <Route path={"/planets"}>
          <Planets />
        </Route>
        <Route path={"/people"}>
          <People />
        </Route>
        <Route path={"/species"}>
          <Species />
        </Route>
        <Route path={"/vehicles"}>
          <Vehicles />
        </Route>
        <Route path={"/starships"}>
          <Starships />
        </Route>
        <Route path={"/"}>
          <HomePage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
