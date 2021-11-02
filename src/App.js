import React from "react";
import "./App.scss";
import { Router, Route, Switch } from "react-router-dom";

import history from "./History";
import Home from "./pages/homePage";
import ShowAll from "./pages/showAll";
import SingleNews from "./pages/singleNews";
import CallAPI from "./pages/callAPI";

export default function App() {
  return (
    <div>
      <Router history={history} basename="/">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/showall" exact component={ShowAll}></Route>
          <Route path="/newsSingle" exact component={SingleNews}></Route>
          <Route path="/callAPI" exact component={CallAPI}></Route>
        </Switch>
      </Router>
    </div>
  );
}
