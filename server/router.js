const express = require('express');
const router = express.Router();

const { getRoomNames } = require('./components/users');
const { getDeckNames } = require('./components/decks');

router.get('/', (req, res) => {
    res.send('Server is up and running.');
});

router.get('/api/getRoomNames', (req, res) => {
    res.send(getRoomNames());
})

router.get('/api/getDeckNames', (req, res) => {
    res.send(getDeckNames());
})

module.exports = router;
