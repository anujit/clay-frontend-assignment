import React from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LandingPageComponent from '../components/LandingPageComponent';
import {authApi} from '../api/AuthApi';

const {login} = authApi;

const LoginWrapper = ({role, ...props}) => {
    if (role === 'visitor') {
        return <LandingPageComponent {...props} />
    }

    if (role === 'admin') {
        return <Redirect to="manage-access" />
    }

    if (role === 'user') {
        return <Redirect to="access-doors" />
    }    
}

export const mapDispatchToProps = dispatch => bindActionCreators({
    initiateLogin: login
}, dispatch);

const mapStateToProps = (state) => {
    const {userInfo} = state;
    const {role} = userInfo;
    return {
        role
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginWrapper);
