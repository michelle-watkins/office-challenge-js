'use strict';

class MeetingRoom {

  constructor(name) {
    this.name = name;
    this.isAvailable = 'Available';
  }

  enterMeeting() {
    this.isAvailable = 'Unavailable';
    return `Meeting in progress - ${this.name} is now unavailable.`;
  }

  leaveMeeting() {
    this.isAvailable = 'Available';
    return `Meeting has ended - ${this.name} is now available.`
  }
}
