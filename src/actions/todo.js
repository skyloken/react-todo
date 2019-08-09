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

export const doneTask = (todoId, isDone) => {
    return dispatch => {
        db.collection('todos').doc(todoId).update({
            isDone
        }).then(() => {
            dispatch(fetchTodos());
        });
    }
}

export const deleteTask = (todoId) => {
    return dispatch => {
        db.collection('todos').doc(todoId).delete().then(() => {
            dispatch(fetchTodos());
        });
    }
}

export const deleteAllTask = () => {
    return dispatch => {
        db.collection('todos').where('uid', '==', auth.currentUser.uid)
            .get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.delete();
                })
                dispatch(fetchTodos());
            })
    }
}

export const deleteDoneTask = () => {
    return dispatch => {
        db.collection('todos').where('uid', '==', auth.currentUser.uid)
            .get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    if (doc.data().isDone) {
                        doc.ref.delete();
                    }
                })
                dispatch(fetchTodos());
            })
    }
}