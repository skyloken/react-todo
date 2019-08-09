import { Box, Button, Card, List, ListItem, TextField } from '@material-ui/core';
import AssignmentTurnedIn from "@material-ui/icons/AssignmentTurnedIn";
import React from 'react';

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.signup(this.state.email, this.state.password);
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
                    <form onSubmit={this.handleSubmit} autoComplete='off'>
                        <AssignmentTurnedIn fontSize='large' />
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
                            color='secondary'
                            fullWidth
                        >Signup</Button>
                    </form>
                </Box>
            </Card>
        );
    }

}

export default Signup;