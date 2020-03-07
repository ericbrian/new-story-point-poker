const {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom,
    getRoomNames
} = require('./users');

test('should add a user', () => {
    const id = 'id1';
    const name = 'Eric';
    const room = 'testroom';

    const res = addUser({
        id,
        name,
        room
    });

    expect(res.user.id).toBe(id);
    expect(res.user.name).toBe(name);
    expect(res.user.room).toBe(room);
});


test('should not add user with the same name to the same room', () => {
    const id = 'id1';
    const name = 'Eric';
    const room = 'testroom';

    const res = addUser({
        id,
        name,
        room
    });
    const res2 = addUser({
        id,
        name,
        room
    });


    expect(res2.error).toBe("A user with name Eric is already in room testroom.");
});


test('should add user with the same name to different rooms', () => {
    const id = 'id1';
    const name = 'Eric';
    const room = 'testroom';

    const res = addUser({
        id,
        name,
        room
    });

    const id2 = 'id2';
    const room2 = 'testroom2';

    const res2 = addUser({
        id: id2,
        name,
        room: room2
    });

    expect(res2.user.name).toBe(name);
    expect(res2.user.room).toBe(room2);
});