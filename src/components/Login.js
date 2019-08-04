import { Box, Button, Card, CardActions, CardContent, List, ListItem, TextField, Typography } from '@material-ui/core';
import AccountCircle from "@material-ui/icons/AccountCircle";
import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.login(this.state.email, this.state.password);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    render() {
        return (
            <Card>
                <Box p={5} textAlign='center'>
                    <form onSubmit={this.handleSubmit}>
                        <CardContent >
                            <AccountCircle fontSize='large' />
                            <Typography variant='h5'>Login</Typography>
                            <List>
                                <ListItem>
                                    <TextField
                                        type='mail'
                                        label='Email'
                                        name='email'
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        margin='normal'
                                        variant='outlined'
                                        fullWidth
                                        required
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        type='password'
                                        label='Password'
                                        name='password'
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        margin='normal'
                                        variant='outlined'
                                        fullWidth
                                        required
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                        <CardActions>
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                fullWidth
                            >Login</Button>
                        </CardActions>
                    </form>
                </Box >
            </Card >
        );
    }

}

export default Login;