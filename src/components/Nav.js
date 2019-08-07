import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Nav = ({ authed, logout }) => (
    <AppBar position="static" color="primary">
        <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>ToDoApp</Typography>
            {authed && <Button color='inherit' onClick={logout}>Logout</Button>}
        </Toolbar>
    </AppBar>
);

export default Nav;