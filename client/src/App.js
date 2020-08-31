import React from 'react';
import { Route, Switch } from 'react-router';
import { IntlProvider } from 'react-intl';

import Shell from 'containers/Shell';
import Home from 'containers/Home';
const App = () => {
  const language = navigator.language;

  return (
    <Switch>
      <Route path="/">
        <Shell>
          <Home />
        </Shell>
      </Route>
    </Switch>
  );
};

export default App;
