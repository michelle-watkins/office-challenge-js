'use strict';

describe('Office: ', () => {
  let office;
  let room;

  beforeEach(() => {
    office = new Office('New Office'); 
    room = new MeetingRoom('Room 1');
  })

  describe('constructor: ', () => {
    it('should have an office name', () => {
      expect(office.name).toEqual('New Office');
    });

    it('should create an empty hash of rooms', () => {
      expect(office.rooms).toEqual({});
    });
  });

  describe('addRoom: ', () => {
    it('should add the specified room to the meeting room list', () => {
      office.addRoom(room);
      expect(office.rooms).toEqual({'Room 1' : 'Available'});
    });
  });

  describe('listRooms: ', () => {
    it('should return the list of rooms', () => {
      let room2 = new MeetingRoom('Room 2');
      office.addRoom(room);
      office.addRoom(room2);
      expect(office.listRooms()).toEqual({'Room 1' : 'Available', 'Room 2' : 'Available'})
    });
  });
})