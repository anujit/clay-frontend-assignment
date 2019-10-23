import React from 'react';
import {resourcesApi} from '../api/ResourcesApi';

export default class Resources extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            doors: [],
            showNewUserForm: false
        }
    }

    componentDidMount() {
        resourcesApi.fetchUsers()
        .then((data) => {
            this.setState({users: data.users});
        });

        resourcesApi.fetchDoors()
        .then((data) => {
            this.setState({doors: data.doors});
        });
    }

    addNewUser = () => {
        const {showNewUserForm} = this.state;
        this.setState({
            showNewUserForm: !showNewUserForm
        });
    }

    submitNewUser = () => {
        const {newUserName: user, newUserRole: role} = this.state;
        resourcesApi.submitUser({
            user,
            role
        })
        .then(({user,role}) => {
            //push to state
        });
    }

    handleNameChange = (e) => {
        this.setState({
            newUserName: e.target.value
        })
    }

    render() {
        const {doors, users, showNewUserForm} = this.state;
        return (
            <div className="resources-wrap">
                <section className="manage-people-wrap">
                    <h1>Manage People</h1>
                    <div className="people-list">
                        {
                            users.map((user) => {
                                return (
                                    <div className="user-box" key={user.id}>
                                        <div className="user-name-wrap">
                                            <h4>{user.name}</h4>
                                        </div>
                                        <p>
                                            Role : {user.role}
                                        </p>
                                        <button>Edit</button>
                                        <button>Remove</button>
                                    </div>
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
                                    <button onClick={this.submitNewUser}>Submit</button>
                                </div>
                            </form>
                        }
                    </div>
                </section>
                <section className="manage-doors-wrap">
                    <h1>Manage Doors</h1>
                    <div className="doors-list">
                    {
                            doors.map((door) => {
                                return (
                                    <div className="door-box" key={door.id}>
                                        <div className="user-name-wrap">
                                            <h4>{door.name}</h4>
                                        </div>
                                        <p>
                                            {door.description}
                                        </p>
                                        <button>Edit</button>
                                        <button>Remove</button>                                        
                                    </div>
                                );
                            })
                        } 
                    </div>
                </section>
            </div>
        );
    }
}

