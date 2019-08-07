import { connect } from 'react-redux';
import { authenticate } from '../actions/app';
import App from '../components/App';

const mapStateToProps = ({ app }) => ({
    loading: app.loading
});

const mapDispatchToProps = dispatch => ({
    authenticate() {
        dispatch(authenticate());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);