/**
 * Admin flow nocks
 */
export const people = [
    {
        "id": "people-1",
        "name": "Anujit",
        "role": "admin",
        "canOpenDoors":["door-1","door-2"]
    },
    {
        "id": "people-2",
        "name": "Nene",
        "role": "user",
        "canOpenDoors":["door-2"]
    }
];

export const doors = [
    {
      "id": "door-1",
      "name": "Door 1",
      "description": "Meeting Room Door",
      "isOpen": true
    },
    {
      "id": "door-2",
      "name": "Door 2",
      "description": "Lobby Door",
      "isOpen": false
    }
];