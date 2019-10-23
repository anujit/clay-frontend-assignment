import React from 'react';
import {accessPermissionsApi} from '../api/AccessPermissionsApi';
import {resourcesApi} from '../api/ResourcesApi';

export default class Resources extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            doors: []
        }
    }

    componentDidMount() {
        resourcesApi.fetchDoors()
        .then((data) => {
            this.setState({doors: data.doors});
            return data.doors;
        }).then(() => {
            resourcesApi.fetchUsers()
            .then((data) => {
                this.setState({users: data.users});
            })
        });
    }

    isPermissionAllowed = () => {

    }

    modifyPermission = (user, door, isAllowed) => {
        const {id} = user;
        const toAdd = !isAllowed;
        this.setState((prevState) => {
            const userToModify = prevState.users.filter(user => user.id === id);
            userToModify[0].canOpenDoors = [...userToModify[0].canOpenDoors, door.id];
            
            const index = prevState.users.findIndex(user => user.id === id);
            if(toAdd) {
                return {
                    users: [
                        ...prevState.users.slice(0, index),
                        {...prevState.users[index], userToModify},
                        ...prevState.users.slice(index+1)
                    ]
                }                    
            } else {
                return {
                    users: [
                        ...prevState.users.slice(0, index),
                        ...prevState.users.slice(index+1)
                    ]
                }
            }
        })
    }

    render() {
        const {users, doors} = this.state;
        console.log(this.state);
        return (
            <div className="resources-wrap">
                <section className="manage-people-wrap">
                    <h1>Manage Access</h1>
                    <div className="people-list">
                        {
                            users.map((user) => {
                                const {canOpenDoors=[]} = user;
                                return (
                                    <div className="user-box" key={user.id}>
                                        <div className="user-name-wrap">
                                            <h4>{user.id}</h4>
                                        </div>
                                        <div>
                                            Access to doors:
                                            {
                                               doors.map((door) => {
                                                   const {id} = door;
                                                   let isAllowed = false;
                                                   if (canOpenDoors.indexOf(id) !== -1) {
                                                        isAllowed = true;
                                                   }
                                                   return (
                                                    <label key={id}>
                                                        <input type="checkbox"
                                                            checked={isAllowed}
                                                            onChange={(e) => {
                                                                this.modifyPermission(user, door, isAllowed);
                                                            }}
                                                        />
                                                    {door.name}
                                                    </label>                                                           
                                               )                                                   
                                               }) 
                                            }
                                        </div>
                                        <button>Modify Access</button>
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

