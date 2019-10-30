import React from 'react';
import Box from '../templates/Box';
import PropTypes from 'prop-types';
export default class ManageResources extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showNewUserForm: false,
            newUserName: '',
            newUserRole: ''            
        }
    }

    componentDidMount() {
        const {fetchDoors, doors, users, fetchUsers} = this.props;
        if(doors.length === 0) {
            fetchDoors();
        }      
        
        if(users.length === 0) {
            fetchUsers();
        }
    }

    addNewUser = () => {
        const {showNewUserForm} = this.state;
        this.setState({
            showNewUserForm: !showNewUserForm
        });
    }

    submitNewUser = () => {
        const {newUserName: user, newUserRole: role} = this.state;
        this.props.addNewUser({
            name: user,
            role
        });
        this.setState({
            showNewUserForm: false,
            newUserName: '',
            newUserRole: ''
        });
    }

    handleNameChange = (e) => {
        this.setState({
            newUserName: e.target.value
        })
    }

    handleRoleChange = (e) => {
        this.setState({
            newUserRole: e.target.value
        })
    }

    deleteUser = (user) => {
        this.props.deleteUser(user);
    }

    deleteDoor = (door) => {
        this.props.deleteDoor(door);
    }    

    render() {
        const {showNewUserForm, newUserName, newUserRole} = this.state;
        const {users, doors} = this.props;
        return (
            <div className="resources-wrap">
                <section className="manage-people-wrap mb-5">
                    <h1>Manage People</h1>
                    <div className="entity-list row mt-3">
                        {
                            users.map((user) => {
                                return (
                                    <Box 
                                        key={user.id}
                                        entity={user}
                                        entityName={user.name}
                                        entityDetailsKey="Role"
                                        entityDetailsValue={user.role}
                                        onDeleteEntity={this.deleteUser}
                                    />
                                );
                            })
                        }
                    </div>                        
                        {
                            users.length < 4 && 
                            <button className="btn btn-primary mt-5 mb-5" onClick={this.addNewUser}>Add New User</button>
                        }
                        {
                            showNewUserForm && 
                            <form className="new-user-form">
                                <div className="form-group">
                                    <label htmlFor="new-user-name">Name</label>
                                    <input type="text" className="form-control" onChange={this.handleNameChange} className="form-control" id="new-user-name" />
                                    <label htmlFor="new-role-name">Role</label>
                                    <input type="text" className="form-control" onChange={this.handleRoleChange} className="form-control" id="new-role-name" />
                                    <button disabled={!newUserName || !newUserRole} className=" mt-5 btn btn-primary" type="button" onClick={this.submitNewUser}>Submit</button>
                                </div>
                            </form>
                        }
                </section>
                <section className="manage-doors-wrap">
                    <h1>Manage Doors</h1>
                    <div className="entity-list">
                    {
                            doors.map((door) => {
                                return (
                                    <Box 
                                        key={door.id}
                                        entityName={door.name}
                                        entityDetailsKey="Description"
                                        entityDetailsValue={door.description}
                                        onDeleteEntity={this.deleteDoor}
                                    />
                                );
                            })
                    } 
                    </div>
                </section>
            </div>
        );
    }
}

// ManageResources.defaultProps = {
//     doors: [],
//     users: []
// }

// ManageResources.propTypes = {
//     fetchUsers: PropTypes.func.isRequired,
//     fetchDoors: PropTypes.func.isRequired,
//     addNewUser: PropTypes.func.isRequired,
//     deleteUser: PropTypes.func.isRequired,
//     deleteDoor: PropTypes.func.isRequired,
//     users: PropTypes.array.isRequired,
//     doors: PropTypes.array.isRequired
// }