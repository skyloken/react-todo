import { Box, Button, Card, List, ListItem, TextField } from '@material-ui/core';
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

    handleGoogleLoginClick = () => {
        this.props.googleLogin();
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
                        <AccountCircle fontSize='large' />
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
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            fullWidth
                            style={{ marginTop: 20 }}
                        >Login</Button>
                    </form>
                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        onClick={this.handleGoogleLoginClick}
                        style={{ marginTop: 20 }}
                    >Login with Google</Button>
                </Box>
            </Card>
        );
    }

}

export default Login;