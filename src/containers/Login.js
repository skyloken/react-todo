import { connect } from 'react-redux';
import { login, googleLogin } from '../actions/app';
import Login from '../components/Login';

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
    login(email, password) {
        dispatch(login(email, password));
    },
    googleLogin() {
        dispatch(googleLogin());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);