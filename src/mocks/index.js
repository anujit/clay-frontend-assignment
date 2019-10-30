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

export const userEvents = [{
  id: "event-1",
  eventType: 'Lock Opened',
  door: 'Meeting Room Door 1'
},
{
  id: "event-2",
  eventType: 'Lock Opened',
  door: 'Lobby Door'
}];

export const adminAudit = [{
  id:"audit-1",
  user: "user-1",
  events: [{
    id: "event-1",
    eventType: 'Lock Opened',
    door: 'Meeting Room Door 1'
  },
  {
    id: "event-2",
    eventType: 'Lock Opened',
    door: 'Lobby Door'
  }]
},{
  id:"audit-2",
  user: "user-2",
  events: [{
    id: "event-21",
    eventType: 'Lock Opened',
    door: 'Meeting Room Door 3'
  },
  {
    id: "event-42",
    eventType: 'Lock Opened',
    door: 'Main Door'
  }]  
}];
