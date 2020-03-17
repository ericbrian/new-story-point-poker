const decks = [
    {
        "Simple Sequence": [
            { "1": 1 },
            { "2": 2 },
            { "3": 3 },
            { "4": 4 },
            { "5": 5 },
            { "6": 6 },
            { "7": 7 },
            { "8": 8 },
            { "9": 9 },
            { "10": 10 }
        ]
    },
    {
        "T-Shirt": [
            { "XS": 1 },
            { "S": 2 },
            { "M": 3 },
            { "L": 4 },
            { "XL": 5 }
        ]
    },
    {
        "Fibonacci": [
            { "1": 1 },
            { "2": 2 },
            { "3": 3 },
            { "5": 5 },
            { "8": 8 },
            { "13": 13 },
            { "21": 21 }
        ]
    }
];

const deck_extension = [
    { "?": 0 },
    { "☕": 0 }
];

// Private
const getDeckForAveraging = (name) => decks.filter(deck => Object.keys(deck)[0] === name)[0][name];

const getDeckNames = () => decks.map(deck => Object.keys(deck)[0]).sort();
const getDeck = (name) => [...getDeckForAveraging(name), ...deck_extension];
const calculateAverage = (hands, deck_name) => {
    const lookup = getDeckForAveraging(deck_name);
    const vals = hands
        .filter(hand => {
            const deck_size = lookup.length;
            let x = 0;
            for (; x < deck_size; x++) {
                if (!isNaN(lookup[x][hand.hand])) {
                    return true;
                }
            }
            return false;
        })
        .map(hand => {
            let good_vals = [];
            const deck_size = lookup.length;
            let x = 0;
            for (; x < deck_size; x++) {
                if (!isNaN(lookup[x][hand.hand])) {
                    good_vals.push(lookup[x][hand.hand]);
                    x = deck_size;
                }
            }
            return good_vals;
        });
    const numerator = vals.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue[0], 10), 0);
    return numerator / vals.length;
};

module.exports = { getDeckNames, getDeck, calculateAverage };
