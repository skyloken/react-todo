import { db, auth } from '../firebase';
import firebase from 'firebase/app';

export const receiveTodos = (todos) => ({
    type: 'RECEIVE_TODOS',
    payload: {
        todos
    }
})

export const fetchTodos = () => {
    return dispatch => {
        db.collection('todos').where('uid', '==', auth.currentUser.uid)
            .orderBy('createdAt').get().then((querySnapshot) => {
                const todos = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }));
                dispatch(receiveTodos(todos));
            });
    }
}

export const addTask = (task) => {
    return dispatch => {
        db.collection('todos').add({
            uid: auth.currentUser.uid,
            task,
            isDone: false,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        dispatch(fetchTodos());
    }
}