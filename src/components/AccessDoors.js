import React from 'react';
import PropTypes from 'prop-types';

export default class AccessDoors extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDoors();
    }

    accessDoor = (door) => {
        const {id: doorId, isOpen} = door;
        const {accessDoor} = this.props;

        // make a post call to access the door..
        accessDoor({doorId, isOpen: !isOpen});
    }

    getStatusMessage = (status) => {
        const {isError, message} = status;
        const statusClass = isError ? 'alert-danger' : 'alert-success';
        return (
            <div className={`mt-3 door-status alert ${statusClass}`}>
                {message}
            </div>
        );
    }

    render() {
        const {doors} = this.props;
        return (
            <div className="access-doors-wrap">
                <h1>Access Doors</h1>
                <div className="doors-list mt-3">
                    {
                        doors.map((door) => {
                            const {isOpen} = door;
                            return (
                                <div className="door-box" key={door.id}>
                                    <div className="door-wrap">
                                        <h4>{door.name}</h4>
                                        <p>
                                            {door.description}
                                        </p>
                                        {
                                            <button type="button" className="btn btn-success" disabled={isOpen} onClick={() => this.accessDoor(door)}>
                                                Open Door
                                            </button>
                                        }
                                        {
                                            door.status && this.getStatusMessage(door.status)
                                        }                                        
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

AccessDoors.defaultProps = {
    doors: []
}

AccessDoors.propTypes = {
    doors: PropTypes.array.isRequired,
    accessDoor: PropTypes.func.isRequired,
    fetchDoors: PropTypes.func.isRequired
}