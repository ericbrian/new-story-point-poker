/*
Contant that holds by room.
*/
const tables = {};

/**
 * Get the collection of user hands in a room
 * @param {String} room The room name.
 * @return {Array} Collection of user hands.
 */
const getHands = (room) => tables[roomid];

const setHand = (room, id, hand) => {
    if (!table[room])
        table[room] = {};
    table[room][id] = hand;
}

const clearHand = (room) => {
    delete table[room];
};

module.exports = { getHands, setHand, clearHand };
