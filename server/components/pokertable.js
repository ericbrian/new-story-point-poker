/*
Contant that holds by room.
*/
let hands = [];

const addHand = ({ room, id, hand }) => {
    removeHand(id);
    hands.push({ room, id, hand });
    return getHands(room);
};

const getHands = (room) => hands.filter(hand => hand.room === room);

const clearRoom = (room) => {
    hands = hands.filter(hand => hand.room !== room);
}

const removeHand = (id) => {
    hands = hands.filter(hand => hand.id !== id);
}

module.exports = { getHands, addHand, removeHand, clearRoom };
