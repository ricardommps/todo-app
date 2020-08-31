import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Router } from 'react-router';
import axios from 'axios';
import { createBrowserHistory } from 'history';
import App from './App';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MuiTheme from 'assets/theme';

import * as serviceWorker from './utils/service-worker';

axios.defaults.baseURL = 'http://localhost:3001/';
export const history = createBrowserHistory();
ReactDOM.render(
  <MuiThemeProvider theme={MuiTheme}>
    <Router history={history}>
      <Switch>
        <App></App>
      </Switch>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);

serviceWorker.register();
serviceWorker.subscribeNotifications();
