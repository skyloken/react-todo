import { connect } from 'react-redux';
import { addTask, fetchTodos, doneTask, deleteAllTask, deleteDoneTask } from '../actions/todo';
import Todo from '../components/Todo';

const mapStateToProps = ({ todo }) => ({
    todos: todo.todos
});

const mapDispatchToProps = dispatch => ({
    addTask(task) {
        dispatch(addTask(task));
    },
    fetchTodos() {
        dispatch(fetchTodos());
    },
    doneTask(todoId, isDone) {
        dispatch(doneTask(todoId, isDone));
    },
    deleteAllTask() {
        dispatch(deleteAllTask());
    },
    deleteDoneTask() {
        dispatch(deleteDoneTask());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);