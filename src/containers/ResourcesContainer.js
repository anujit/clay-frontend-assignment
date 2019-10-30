import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {resourcesApi} from '../api/ResourcesApi';
import ManageResources from '../components/ManageResources';
import ManageAccess from '../components/ManageAccess';
import AccessDoors from '../components/AccessDoors';
import { manageAccessApi } from '../api/ManageAccessApi';

const {fetchUsers, fetchDoors, addNewUser, deleteUser, deleteDoor} = resourcesApi;
const {modifyPermission, accessDoor} = manageAccessApi;

const Wrapper = ({type, ...props}) => {
    const {
        fetchUsers,
        fetchDoors,
        addNewUser,
        deleteUser,
        deleteDoor,
        modifyPermission,
        accessDoor,
        users,
        doors              
    } = props;

    if (type === 'manage-resources') {
        const ManageResourcesProps = {
            fetchUsers,
            fetchDoors,
            addNewUser,
            deleteUser,
            deleteDoor,
            users,
            doors            
        }
        return <ManageResources {...ManageResourcesProps} />;
    }
    else if (type === 'manage-access') {
        const ManageAccessProps = {
            fetchUsers,
            fetchDoors,        
            users,
            doors,     
            modifyPermission                   
        }        
        return <ManageAccess {...ManageAccessProps} />;
    }
    else if (type === 'open-doors') {
        const OpenDoorProps = {
            doors,
            accessDoor,
            fetchDoors
        }
        return <AccessDoors {...OpenDoorProps} />;
    }

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
