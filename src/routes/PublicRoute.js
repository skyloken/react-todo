import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ authed, component: Component, ...rest }) => {

    return (
        <Route {...rest} render={props =>
            !authed ? (
                <Component {...props} />) : (
                    <Redirect to='/' />
                )
        } />
    );

}

const mapStateToProps = ({ app }) => ({
    authed: app.authed
});

export default connect(mapStateToProps)(PublicRoute);