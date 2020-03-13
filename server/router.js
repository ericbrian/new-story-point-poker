const express = require('express');
const router = express.Router();

const { getRoomNames } = require('./components/users');

router.get('/', (req, res) => {
    res.send('Server is up and running.');
});

router.get('/api/getRoomNames', (req, res) => {
    res.send(getRoomNames());
})

module.exports = router;
