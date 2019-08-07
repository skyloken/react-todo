import { push } from 'connected-react-router';
import firebase from '../firebase';
import { loaded, loading, authed, unauthed } from './app';

export const authenticate = () => {
    return dispatch => {
        firebase.auth().onAuthStateChanged(user => {
            if (user !== null) {
                dispatch(authed());
            } else {
                dispatch(unauthed());
            }
            dispatch(loaded());
        });
    }
}

export const login = (email, password) => {
    return dispatch => {

        // ログイン
        dispatch(loading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch(push('/'));
            })
            .catch(error => {
                // ログイン失敗
                dispatch(loaded());
                alert(error.message);
            });

    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(loading());
        firebase.auth().signOut()
            .then(() => {
                dispatch(push('/login'))
            });
    }
}