import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { Link, Route } from 'react-router-dom';
import Login from '../containers/Login';
import Todo from '../containers/Todo';
import PrivateRoute from '../routes/PrivateRoute';
import Nav from './Nav';

class App extends React.Component {

  componentDidMount() {
    this.props.refLogin();
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
        {this.props.loading ? <CircularProgress /> :
          <div>
            <PrivateRoute exact path='/' component={Todo} />
            <Route exact path="/login" component={Login} />
          </div>
        }
      </div>
    );
  }
}

export default App;
