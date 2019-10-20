import {connect, mapStateToProps} from 'react-redux';
import checkAuth from '../utils/checkAuth';

const VerifyAuth = (props) => {
    const {action} = props;
    const isVerified = checkAuth(role, action);
    if (isVerified) {
        return props.children;
    }
    return null;
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        role: state.user.role
    }
}

export default connect(mapStateToProps, null)(VerifyAuth)
