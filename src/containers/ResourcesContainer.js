import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {resourcesApi} from '../api/ResourcesApi';
import Resources from '../components/ManageResources';
import ManageAccess from '../components/ManageAccess';
import AccessDoors from '../components/AccessDoors';
import { manageAccessApi } from '../api/ManageAccessApi';

const {fetchUsers, fetchDoors, addNewUser, deleteUser, deleteDoor} = resourcesApi;
const {modifyPermission, accessDoor} = manageAccessApi;

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
    fetchUsers,
    fetchDoors,
    addNewUser,
    deleteUser,
    deleteDoor,
    modifyPermission,
    accessDoor
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
