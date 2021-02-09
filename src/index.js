import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './core/store';
import { Provider } from 'react-redux';
import { theme } from "./core/theme";
import { GlobalStyle } from "./core/GlobalStyle";
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
