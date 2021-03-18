import React from "react";
import { Route, Switch } from "react-router";
import Home from "../../pages/home/Home";
import TestYourself from "../../pages/test-yourself/TestYourself";

const Body = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/testyourself" component={TestYourself} />
    </Switch>
  </main>
);

export default Body;
