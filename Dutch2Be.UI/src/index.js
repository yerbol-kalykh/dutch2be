import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
// context
import { AppContextProvider } from "./providers/AppContext.js";
// style
import ThemeProvider from "./style/ThemeProvider.jsx";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeProvider>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
