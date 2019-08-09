import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ authed, logout }) => (
    <AppBar position="static" color="primary">
        <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>ToDoApp</Typography>
            {authed ? <Button color='inherit' onClick={logout}>Logout</Button> :
                <>
                    <Button color='inherit' component={Link} to='/login' style={{ marginRight: 10 }}>Login</Button>
                    <Button color='inherit' variant='outlined' component={Link} to='/signup'>Signup</Button>
                </>
            }
        </Toolbar>
    </AppBar>
);

export default Nav;