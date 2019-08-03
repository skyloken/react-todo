import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.doLogin(this.state.email, this.state.password);
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
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.onSubmit}>
                    <input type='mail' name='email' value={this.state.email} onChange={this.handleInputChange} />
                    <input type='password' name='password' value={this.state.password} onChange={this.handleInputChange} />
                    <button type='submit'>Login</button>
                </form>
            </div>
        );
    }

}

export default Login;