# Office Management

# Run instructions
1. `git clone https://github.com/michelle-watkins/office-challenge-js.git`
2. Open project in your chosen IDE
3. Run `open SpecRunner.html` in the terminal to see test results

## Specification and user stories
1. A meeting room should have a name
```
As a staff member
In order to distinguish between meeting rooms
I would like my meeting room to have a name
```
2. Add a meeting room to the list of rooms
```
As an office manager
So that staff can coordinate meetings
I would like to add a meeting room to the office
```
3. List the meeting rooms
```
As an office manager
So that I can manage meeting rooms
I would like to list all the meeting rooms in the office
```
4. Rooms should have an available/unavailable attribute
```
As a staff member
In order to have meeting,
I would like to check if the meeting room is available or not (true or false)
```
5. When a room is in use, it should be unavailable
```
As a staff member
In order to have a meeting,
I would like to be able to enter the meeting room and this should make it unavailable
```
6. When a room is no longer in use, it should be available
``` 
As a staff member
In order to end a meeting
I would like to be able to leave the meeting room and this should make it available again
```
7. List available meeting rooms
```
As a staff member
So that I can see where to have my meeting
I would like to be able to see a list of available rooms in the office
```
8. Error message if a room is already in use and an attempt is made to use that room
```
As a staff member
So that I can avoid interrupting a meeting
I would like an error if I try to use a room that has already been entered
```