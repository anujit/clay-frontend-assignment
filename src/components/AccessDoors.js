import React from 'react';
import {resourcesApi} from '../api/ResourcesApi';
import {manageAccessApi} from '../api/ManageAccessApi';

export default class AccessDoors extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDoors();
    }

    accessDoor = (door) => {
        const {id: doorId, isOpen} = door;
        if(isOpen) {
            this.setState({
                doorOpenMessage: 'Door is already open'
            });
        } else {
            // make a post call to access the door..
            accessPermissionsApi.accessDoor({doorId, isOpen: !door.isOpen})
            .then((data) => {
                console.log(data);
            });
        }
    }

    render() {
        const {doors} = this.props;
        return (
            <div className="access-doors-wrap">
                <h1>Access Doors</h1>
                <div className="doors-list">
                    {
                        doors.map((door) => {
                            const {isOpen} = door;
                            return (
                                <div className="door-box" key={door.id}>
                                    <div className="door-wrap">
                                        <h4>{door.name}</h4>
                                    </div>
                                    <p>
                                        {door.description}
                                    </p>
                                    {
                                        !isOpen && <button onClick={() => this.accessDoor(door)}>
                                            Open Door
                                        </button>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

