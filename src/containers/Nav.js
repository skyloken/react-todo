import { logout } from "../actions/app";
import { connect } from 'react-redux';
import Nav from '../components/Nav';

const mapStateToProps = ({ app }) => ({
    authed: app.authed
})

const mapDispatchToProps = (dispatch) => ({
    logout() {
        dispatch(logout());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);