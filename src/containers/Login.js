import { connect } from 'react-redux';
import { doLogin, doLogout } from '../actions/auth';
import Login from '../components/Login';

const mapStateToProps = (state) => ({
    user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
    doLogin(email, password) {
        dispatch(doLogin(email, password));
    },
    doLogout() {
        dispatch(doLogout());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);