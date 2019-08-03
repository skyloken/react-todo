import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import firebase from '../firebase';

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route {...rest} render={props =>
            firebase.auth().currentUser !== null ? (
                <Component {...props} />) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
        } />
    );

}

export default PrivateRoute;