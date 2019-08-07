import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { addTask } from '../actions/todo';

const mapStateToProps = ({ todo }) => ({
    todos: todo.todos
});

const mapDispatchToProps = dispatch => ({
    addTask(task) {
        dispatch(addTask(task));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);