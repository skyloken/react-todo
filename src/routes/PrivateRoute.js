import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { auth } from '../firebase';

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                auth.currentUser !== null ? (
                    <Component {...props} />) : (
                        <Redirect to='/login' />
                    )
            }
        />
    );
}

// const mapStateToProps = state => ({
//     user: state.auth.user
// })

export default PrivateRoute;