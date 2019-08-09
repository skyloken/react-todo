import { connect } from 'react-redux';
import { addTask, fetchTodos, doneTask } from '../actions/todo';
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);