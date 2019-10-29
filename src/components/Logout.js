import React, {Component} from 'react';
import {authApi} from '../api/AuthApi';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class LogoutComponent extends Component {

    initiateLogout = () => {
        const {logout} = this.props;
        logout();
    }

    render () {
        return <button type="button" onClick={this.initiateLogout}>Logout</button>
    }
}

export const mapDispatchToProps = dispatch => bindActionCreators({
    logout: authApi.logout
}, dispatch);

export default connect(null, mapDispatchToProps)(LogoutComponent);

