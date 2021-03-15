import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import ThemeProvider from "./style/ThemeProvider.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
