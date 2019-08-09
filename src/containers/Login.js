import { connect } from 'react-redux';
import { login } from '../actions/app';
import Login from '../components/Login';

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
    login(email, password) {
        dispatch(login(email, password));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);