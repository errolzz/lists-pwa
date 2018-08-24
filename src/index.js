import React from 'react';
import { Helmet } from 'react-helmet';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from './redux/store';

// pages
import ConnectedHome from './pages/home/ConnectedHome';

// html
import './index.html';

// css
import './index.css';

// the app
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Helmet>
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <meta charset="UTF-8" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={ConnectedHome} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('index'),
);
