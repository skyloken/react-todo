import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ authed, component: Component, ...rest }) => {

    return (
        <Route {...rest} render={props =>
            authed ? (
                <Component {...props} />) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
        } />
    );

};

const mapStateToProps = ({ app }) => ({
    authed: app.authed
});

export default connect(mapStateToProps)(PrivateRoute);