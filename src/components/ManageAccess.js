import React from 'react';
import AccessBox from '../templates/AccessBox';
import PropTypes from 'prop-types';
export default class ManageAccess extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {fetchDoors, fetchUsers} = this.props;
        fetchDoors();
        fetchUsers();
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
                <div className="people-list mt-3">
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

ManageAccess.defaultProps = {
    doors: [],
    users: []
}

ManageAccess.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    fetchDoors: PropTypes.func.isRequired,
    modifyPermission: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    doors: PropTypes.array.isRequired
}
