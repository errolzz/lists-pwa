import ReduxThunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { SETTINGS } from '../constants/constants';

// reducers
import lists from './lists';

// create browser history
export const history = createHistory({ basename: SETTINGS.SITE_ROOT });

// combine all reducers
const reducers = combineReducers({
  // router: routerReducer,
  lists,
});

// the store
export const store = createStore(
  connectRouter(history)(reducers),
  compose(
    applyMiddleware(
      // build the middleware for intercepting and dispatching navigation actions
      routerMiddleware(history),
      ReduxThunk,
    ),
  ),
);
