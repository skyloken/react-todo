import { connect } from 'react-redux';
import { login, logout } from '../actions/auth';
import Login from '../components/Login';

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
    login(email, password) {
        dispatch(login(email, password));
    },
    logout() {
        dispatch(logout());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);