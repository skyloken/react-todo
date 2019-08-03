import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import createStore from './store';
import Todo from './components/Todo';
import Login from './components/Login';
import PrivateRoute from './routes/PrivateRoute';

const history = createBrowserHistory();
const store = createStore(history);

const App = () => (
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <div>
        <PrivateRoute exact path="/" component={Todo} />
        <Route exact path="/login" component={Login} />
      </div>
    </ConnectedRouter>
  </Provider >
);

export default App;
