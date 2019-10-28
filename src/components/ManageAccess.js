import React from 'react';

export default class Resources extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDoors();
        this.props.fetchUsers();
    }

    isPermissionAllowed = () => {

    }

    modifyPermission = (user, door, isAllowed) => {
        const toAdd = !isAllowed;
        const {modifyPermission} = this.props;
        modifyPermission({userId: user.id, doorId: door.id, toAdd});
    }

    render() {
        const {users, doors=[]} = this.props;
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

