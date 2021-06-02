import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import AppRouter from "./routes";
import GlobalStyle from "./style/GlobalStyle";
import theme from "./style/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AppRouter/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
