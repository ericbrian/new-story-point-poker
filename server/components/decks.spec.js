const { getDeckNames, getDeck, calculateAverage } = require('./decks');

test('should return all deck names', () => {
    const res = getDeckNames();

    expect(res.length).toBe(3);
    expect(res[0]).toBe('Fibonacci');
    expect(res[1]).toBe('Simple Sequence');
    expect(res[2]).toBe('T-Shirt');
});

test('should return deck by name', () => {
    const res = getDeck('Simple Sequence');

    expect(res.length).toBe(12);
});

test('should calculate average for hands in room', () => {
    const deck_name = "Fibonacci";
    const hands = [
        { room: 'room 1', id: 'id1', hand: '1' },
        { room: 'room 1', id: 'id2', hand: '3' },
        { room: 'room 1', id: 'id3', hand: '5' },
        { room: 'room 1', id: 'id4', hand: '8' },
        { room: 'room 1', id: 'id5', hand: 'Break' },
        { room: 'room 1', id: 'id6', hand: '1' },
    ];
    const res = calculateAverage(hands, deck_name);
    expect(res).toBe(3.6);
});