import React from "react";
import {
  ThemeProvider as TProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";

const ThemeProvider = ({ children }) => {
  let theme = createMuiTheme({
    palette: {},
    typography: {
      fontFamily: [
        "Barlow Condensed",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          html: {
            WebkitFontSmoothing: "auto",
            padding: "0",
            margin: "0",
            background: "#777",
          },
          main: {
            background: "#eee",
            minHeight: "89vh",
          },
          "@font-face": [],
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return <TProvider theme={theme}>{children}</TProvider>;
};

export default ThemeProvider;
