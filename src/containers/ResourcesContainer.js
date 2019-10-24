import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {resourcesApi} from '../api/ResourcesApi';
import Resources from '../components/Resources';
import ManageAccess from '../components/ManageAccess';
import AccessDoors from '../components/AccessDoors';

const Wrapper = ({type, ...props}) => {
    if (type === 'manage-resources') return <Resources {...props} />;
    else if (type === 'manage-access') return <ManageAccess {...props} />;
    else if (type === 'open-doors') return <AccessDoors {...props} />;

    return null;
} 

export const mapStateToProps = (state, ownProps) => {
    const {resources} = state;
    const {users, doors} = resources;
    return {
        users,
        doors,
        type: ownProps.type
    }
}

export const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUsers: resourcesApi.fetchUsers,
    fetchDoors: resourcesApi.fetchDoors,
    addNewUser: resourcesApi.addNewUser,
    deleteUser: resourcesApi.deleteUser,
    deleteDoor: resourcesApi.deleteDoor
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
