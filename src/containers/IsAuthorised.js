import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

const rules = {
    'admin': [
        'visit:manage-access',
        'visit:manage-resources',
        'visit:access-doors',
        'visit:events'
    ],    
    'user': [
        'visit:access-doors',
        'visit:events'
    ],
    'visitor': []
};

const verifyAuth = ({rules, role, action}) => {
    const permissions = rules[role];
    if(permissions.indexOf(action) !== -1) {
        return true;
    }
    return false;
}

const IsAuthorised = (props) => {
    const {role, action, isPrivilegedAction} = props;
    const isAuthenticated = verifyAuth({rules, role, action});

    if (isAuthenticated) {
        return props.children;
    } else if(isPrivilegedAction) {
        return null;
    } else if(role === 'user') {
        return <Redirect to="/access-doors" />    
    }
    return <Redirect to="/" />
}

export const mapStateToProps = (state, ownProps) => {
    let userInfo = {};
    if (sessionStorage.userInfo) {
        userInfo = JSON.parse(sessionStorage.userInfo)
    } else {
        userInfo = state.userInfo;
    }
    const {action} = ownProps;
    const {role} = userInfo;
    return {
        role,
        action
    }
}

export default connect(mapStateToProps)(IsAuthorised);
