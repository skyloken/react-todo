import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import firebase from '../firebase';

const PublicRoute = ({ component: Component, ...rest }) => {

    return (
        <Route {...rest} render={props =>
            firebase.auth().currentUser === null ? (
                <Component {...props} />) : (
                    <Redirect to='/' />
                )
        } />
    );

}

export default PublicRoute;