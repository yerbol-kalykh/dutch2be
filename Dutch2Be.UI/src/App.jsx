import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./layout/body/Body";
import Footer from "./layout/Footer";
import Header from "./layout/header/Header";

const App = () => (
  <Router>
    <Header />
    <Body />
    <Footer />
  </Router>
);

export default App;
