'use strict';

class Office {

  constructor(name) {
    this.name = name;
    this.rooms = {};
  }

  addRoom(room) {
    this.rooms[room.name] = room.isAvailable;
    return `${room.name} has been added to the meeting room list.`
  }

  listRooms() {
    return this.rooms;
  }
}
