import { connect } from 'react-redux';
import Signup from '../components/Signup';
import { signup } from '../actions/app';

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
    signup(email, password) {
        dispatch(signup(email, password));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);