import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ user, component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props =>
            user !== null ? (
                <Component {...props} />) : (
                    <Redirect to='/login' />
                )
        } />
    );
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(PrivateRoute);