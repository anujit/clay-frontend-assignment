import React from 'react';
import AccessBox from '../templates/AccessBox';
export default class ManageAccess extends React.Component {

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
            <div className="manage-access-wrap">
                <h1>Manage Access</h1>
                <div className="people-list">
                    {
                        users.map((user) => {
                            return (
                                <AccessBox
                                    key={user.id}
                                    doors={doors}
                                    user={user}
                                    modifyPermission={this.modifyPermission}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

