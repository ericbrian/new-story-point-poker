const { addHand, getHands, removeHand, clearRoom } = require('./pokertable');

test('should persist player\'s hand.', () => {
    const room = 'room 1';
    const id = 'id1';
    const hand = '3'

    addHand({ room, id: 'id2', hand: '5' });
    addHand({ room, id: 'id3', hand: 'xl' });
    addHand({ room, id: 'id4', hand: 's' });
    addHand({ room, id, hand: 'm' });
    const res = addHand({ room, id, hand });

    expect(res.length).toBe(4);

    const updated_hand = res.filter(hand => hand.id === id);
    expect(updated_hand[0].hand).toBe(hand);
});

test('should return all the hands in a room', () => {

    const room = 'room 2';
    const id = 'id5';
    const hand = 'new room!!!'
    addHand({ room, id, hand });

    const res = getHands(room);
    expect(res.length).toBe(1);
});

/*
test('', () => { });
test('', () => { });
test('', () => { });
 */