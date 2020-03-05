const users = [];

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find(user => user.room === room && user.name === name);

    if (existingUser)
        return { error: `A user with name ${name} is already in room ${room}.` };

    const user = { id, name, room };
    users.push(user);

    return { user };
}

const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id);

    if (index != -1)
        return users.splice(index, 1)[0];
}

const getUser = (id) => user.find(user => user.id === id);

const getUsersInRoom = (room) => users.filter(user => user.room === room);

const getRoomNames = () => {
    if (!users)
        return [];

    const rooms = new Set();
    users.forEach(user => { rooms.add(user.room) });
    return [...rooms].sort();
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom, getRoomNames };
