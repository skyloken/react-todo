import { Box, CircularProgress, Container, CssBaseline } from '@material-ui/core';
import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../containers/Login';
import Nav from '../containers/Nav';
import Signup from '../containers/Signup';
import Todo from '../containers/Todo';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.authenticate();
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <Nav />
        <Container maxWidth='sm'>
          <Box m={5}>
            {this.props.loading ? <CircularProgress className='circular-progress' /> :
              <Switch>
                <PrivateRoute exact path='/' component={Todo} />
                <PublicRoute exact path="/login" component={Login} />
                <PublicRoute exact path="/signup" component={Signup} />
              </Switch>
            }
          </Box>
        </Container>
      </div>
    );
  }
}

export default App;
