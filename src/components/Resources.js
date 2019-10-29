import React from 'react';
import Box from './Box';
export default class Resources extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showNewUserForm: false,
            newUserName: '',
            newUserRole: ''            
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchDoors();
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
        const {showNewUserForm} = this.state;
        const {users, doors} = this.props;
        return (
            <div className="resources-wrap">
                <section className="manage-people-wrap">
                    <h1>Manage People</h1>
                    <div className="entity-list">
                        {
                            users.map((user) => {
                                return (
                                    <Box 
                                        key={user.id}
                                        entityName={user.name}
                                        entityDetailsKey="Role"
                                        entityDetailsValue={user.role}
                                        onDeleteEntity={this.deleteUser}
                                    />
                                );
                            })
                        }
                        {
                            users.length < 4 && 
                            <button onClick={this.addNewUser}>Add New User</button>
                        }
                        {
                            showNewUserForm && 
                            <form>
                                <div className="form-group">
                                    <label htmlFor="new-user-name">Name</label>
                                    <input type="text" onChange={this.handleNameChange} className="form-control" id="new-user-name" />
                                    <label htmlFor="new-role-name">Role</label>
                                    <input type="text" onChange={this.handleRoleChange} className="form-control" id="new-role-name" />
                                    <button type="button" onClick={this.submitNewUser}>Submit</button>
                                </div>
                            </form>
                        }
                    </div>
                </section>
                <section className="manage-doors-wrap">
                    <h1>Manage Doors</h1>
                    <div className="dooentityrs-list">
                    {
                            doors.map((door) => {
                                return (
                                    <Box 
                                        key={door.id}
                                        entityName={door.name}
                                        entityDetailsKey="Role"
                                        entityDetailsValue={door.role}
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

