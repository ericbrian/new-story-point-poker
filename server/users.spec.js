const { addUser, removeUser, getUser, getUsersInRoom, getRoomNames } = require('./users');

// addUser
test('should add a user', () => {
    const id = 'id1';
    const name = 'Eric';
    const room = 'testroom';

    const res = addUser({ id, name, room });

    expect(res.user.id).toBe(id);
    expect(res.user.name).toBe(name);
    expect(res.user.room).toBe(room);
    expect(res.error).not.toBeDefined();
});

test('should not add user with the same name to the same room', () => {
    const id = 'id2';
    const name = 'Eric 2';
    const room = 'testroom';
    addUser({ id, name, room });

    const res = addUser({ id, name, room });

    expect(res.error).toBe(`A user with name ${name} is already in room testroom.`);
    expect(res.user).not.toBeDefined();
});

test('should add user with the same name to different rooms', () => {
    const id = 'id3';
    const name = 'Eric 3';
    const room = 'testroom';
    addUser({ id, name, room });

    const id2 = 'id4';
    const room2 = 'testroom2';
    const res = addUser({ id: id2, name, room: room2 });

    expect(res.user.name).toBe(name);
    expect(res.user.room).toBe(room2);
    expect(res.error).not.toBeDefined();
});

// removeUser

test('should remove user from room', () => {

    const id = 'id5';
    const name = 'name 5';
    const room = 'test room';

    const id2 = 'id6';
    const name2 = 'name 6';

    addUser({ id, name, room });
    addUser({ id: id2, name: name2, room });

    const res = removeUser(id);

    expect(res.id).toBe(id);
})

// getUser

test('should return user info by user id', () => {
    const id = 'id7';
    const name = 'Eric 7';
    const room = 'a testroom';

    addUser({ id, name, room });

    const res = getUser(id);

    expect(res.id).toBe(id);
    expect(res.name).toBe(name);
    expect(res.room).toBe(room);
})

// getUsersInRoom

test('should return all user objects in room by room name', () => {
    const res = getUsersInRoom('testroom');

    expect(res.length).toBe(3);
});

// getRoomNames

test('should return the name of all the rooms in alphabetical order', () => {
    const res = getRoomNames();

    //The order matters since they should be returned in alphabetical order.
    expect(res.indexOf('a testroom')).toBe(0);
    expect(res.indexOf('test room')).toBe(1);
    expect(res.indexOf('testroom')).toBe(2);
    expect(res.indexOf('testroom2')).toBe(3);
})
