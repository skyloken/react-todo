import { connect } from 'react-redux';
import { addTask, fetchTodos } from '../actions/todo';
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);