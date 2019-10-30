const _modifyPermissionSuccess = (prevState, payload) => {
    const {userId, doorId, toAdd} = payload;

    const userToModify = prevState.users.find(user => user.id === userId);
    const index = prevState.users.findIndex(user => user.id === userId);

    if(toAdd) {
        return [
            ...prevState.users.slice(0, index),
            {
                ...userToModify, 
                canOpenDoors: [
                    ...userToModify.canOpenDoors, 
                    doorId       
                ]
            },
            ...prevState.users.slice(index+1)
        ];
    } else {
        return [
                ...prevState.users.slice(0, index),
                {
                    ...userToModify, 
                    canOpenDoors: userToModify.canOpenDoors.filter(id => id != doorId)
                },
                ...prevState.users.slice(index+1)
        ];
    }
}

const resources = (state = {users: [], doors: []}, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'FETCH_PEOPLE_SUCCESS':
            return {
                ...state,
                users: payload
            };
        case 'FETCH_DOORS_SUCCESS':
            return {
                ...state,
                doors: payload
            };
        case 'ADD_NEW_USER_SUCCESS':
            return {
                ...state,
                users: [...state.users, payload]
            }
        case 'DELETE_USER_SUCCESS':
            return {
                ...state,
                users: state.users.filter(user => user !== payload)
            }
        case 'DELETE_DOOR_SUCCESS':
            return {
                ...state,
                doors: state.doors.filter(door => door !== payload)
            }            
        case 'ACCESS_DOORS_SUCCESS':
            const door = state.doors.find(door => door.id === payload.doorId);
            const doorIndex = state.doors.indexOf(door);
            return {
                ...state,
                doors: [
                    ...state.doors.slice(0, doorIndex),
                    {
                        ...door,
                        isOpen: true,
                        status: payload.status
                    },
                    ...state.doors.slice(doorIndex + 1),                    
                ]
            }
        case 'ACCESS_DOORS_FAILURE':
            const failureDoor = state.doors.find(door => door.id === payload.doorId);
            const failureDoorIndex = state.doors.indexOf(failureDoor);
            return {
                ...state,
                doors: [
                    ...state.doors.slice(0, failureDoorIndex),
                    {
                        ...failureDoor,
                        isOpen: false,
                        status: payload.status
                    },
                    ...state.doors.slice(failureDoorIndex + 1),                    
                ]
            }            
        case 'MODIFY_PERMISSION_SUCCESS':
            return {
                ...state,
                users: _modifyPermissionSuccess(state, payload)
            }
        default:
            return state;
    }
}
export default resources;
