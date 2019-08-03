import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import Todo from '../components/Todo';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
    doLogout() {
        dispatch(logout());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);