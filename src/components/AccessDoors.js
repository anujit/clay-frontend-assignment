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
        return <p className={`door-status error-${isError}`}>{message}</p>
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
                                        <button disabled={isOpen} onClick={() => this.accessDoor(door)}>
                                            Open Door
                                        </button>
                                    }
                                    {
                                        door.status && this.getStatusMessage(door.status)
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

AccessDoors.defaultProps = {
    doors: []
}

AccessDoors.propTypes = {
    doors: PropTypes.array.isRequired,
    accessDoor: PropTypes.func.isRequired,
    fetchDoors: PropTypes.func.isRequired
}