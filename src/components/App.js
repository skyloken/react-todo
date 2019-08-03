import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { Link, Switch } from 'react-router-dom';
import Login from '../containers/Login';
import Todo from '../containers/Todo';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import Nav from './Nav';

class App extends React.Component {

  componentDidMount() {
    this.props.authenticate();
  }

  render() {
    return (
      <div>
        <Nav />
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Todo</Link>
          </li>
        </ul>
        <div>
          {this.props.loading ? <CircularProgress /> :
            <Switch>
              <PrivateRoute exact path='/' component={Todo} />
              <PublicRoute exact path="/login" component={Login} />
            </Switch>
          }
        </div>
      </div>
    );
  }
}

export default App;
