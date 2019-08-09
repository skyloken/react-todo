import { connect } from 'react-redux';
import { deleteTask, doneTask } from '../actions/todo';
import TodoItem from '../components/TodoItem';

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => ({
    deleteTask(todoId) {
        dispatch(deleteTask(todoId));
    },
    doneTask(todoId, isDone) {
        dispatch(doneTask(todoId, isDone));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);