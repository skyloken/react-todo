import { push } from 'connected-react-router';
import firebase from '../firebase';

const login = (user) => ({
    type: 'LOGIN',
    payload: {
        user
    }
})

const logout = () => ({
    type: 'LOGOUT'
})

export const refLogin = () => {
    return dispatch => {
        firebase.auth().onAuthStateChanged(user => {
            dispatch(login(user));
        });
    }
}

export const doLogin = (email, password) => {
    return (dispatch, getState) => {

        // ログイン済みの場合
        if (getState().auth.user != null) {
            dispatch(push('/'));
        }

        // ログイン
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                // ログイン成功
                dispatch(login(user));
                dispatch(push('/'));
            })
            .catch(error => {
                // ログイン失敗
                alert(error.message);
            });

    }
}

export const doLogout = () => {
    return (dispatch) => {
        firebase.auth().signOut();
        dispatch(logout());
        dispatch(push('/login'));
    }
}