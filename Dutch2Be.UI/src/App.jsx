import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./components/layout/body/Body";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";

const App = () => (
  <Router>
    <Header />
    <Body />
    <Footer />
  </Router>
);

export default App;
