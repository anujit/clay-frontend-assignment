import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

const rules = {
    'admin': [
        'visit:manage-access',
        'visit:manage-resources',
        'visit:access-doors'
    ],    
    'user': [
        'visit:access-doors'
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
    const {role, action, checkAuthorisation} = props;
    const isAuthenticated = verifyAuth({rules, role, action});

    if (isAuthenticated) {
        return props.children;
    } else if(checkAuthorisation) {
        return null;
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
