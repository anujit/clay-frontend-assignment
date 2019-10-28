import React from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPageComponent from '../components/LandingPageComponent';

const LoginWrapper = ({role}) => {
    console.log(role);
    if (role === 'visitor') {
        return <LandingPageComponent />
    }

    if(role === 'admin') {
        return <Redirect to="manage-access" />
    }

    if(role === 'user') {
        return <Redirect to="access-doors" />
    }    
}

const mapStateToProps = (state) => {
    const {userInfo} = state;
    const {role} = userInfo;
    return {
        role
    }
}

export default connect(mapStateToProps)(LoginWrapper);
