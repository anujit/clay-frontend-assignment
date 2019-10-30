import React from 'react';

const AccessBox = ({doors, user, modifyPermission}) => {
    const {canOpenDoors=[]} = user;    
    return (
        <div className="access-box" key={user.id}>
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
                                onChange={() => {
                                    modifyPermission(user, door, isAllowed);
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
}

export default AccessBox;
