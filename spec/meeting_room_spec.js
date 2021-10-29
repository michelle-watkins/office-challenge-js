'use strict';

describe('MeetingRoom: ', () => {
  let room;

  beforeEach(() => {
    room = new MeetingRoom('Room 1');
  })

  describe('constructor: ', () => {
    it('should have a room name', () => {
      expect(room.name).toEqual('Room 1'); 
    });

    it('should be available by default', () => {
      expect(room.isAvailable).toEqual('Available'); 
    });
  });

  describe('enterMeeting', () => {
    it('should make a room "unavailable" when a meeting has started', () => {
      room.enterMeeting();
      expect(room.isAvailable).toEqual('Unavailable');
    });

    it('should return a message displaying the room is unavailable', () => {
      expect(room.enterMeeting()).toEqual('Meeting in progress - Room 1 is now unavailable.')
    });
  });

  describe('leaveMeeting', () => {
    it('should make a room "available" when a meeting has ended', () => {
      room.leaveMeeting();
      expect(room.isAvailable).toEqual('Available');
    });

    it('should return a message displaying the room is available', () => {
      expect(room.leaveMeeting()).toEqual('Meeting has ended - Room 1 is now available.')
    });
  });
})