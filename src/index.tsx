import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import AppRouter from "./routes";
import GlobalStyle from "./style/GlobalStyle";
import theme from "./style/theme";
import { store } from './redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <AppRouter/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);