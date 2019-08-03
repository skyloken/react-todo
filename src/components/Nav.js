import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Nav = () => (
    <div>
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" color="inherit">TodoApp</Typography>
            </Toolbar>
        </AppBar>
    </div>
);

export default Nav;