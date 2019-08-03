import { connect } from 'react-redux';
import { refLogin } from '../actions/auth';
import App from '../components/App';

const mapStateToProps = ({auth}) => ({
    loading: auth.loading
});

const mapDispatchToProps = dispatch => ({
    refLogin() {
        dispatch(refLogin());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);