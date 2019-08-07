import { push } from 'connected-react-router';
import firebase from '../firebase';

export const loading = () => ({
    type: 'LOADING'
});

export const loaded = () => ({
    type: 'LOADED'
});

export const authed = () => ({
    type: 'AUTHED'
});

export const unauthed = () => ({
    type: 'UNAUTHED'
});

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