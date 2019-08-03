import { connect } from 'react-redux';
import { doLogout } from '../actions/auth';
import Todo from '../components/Todo';

const mapStateToProps = (state) => ({
    loading: state.auth.loading
});

const mapDispatchToProps = dispatch => ({
    doLogout() {
        dispatch(doLogout());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);