const express = require('express');
const router = express.Router();
const { users } = require('../db/Models');

router.put('/:id', (request, response, next) => {
    users.updateUser(request.body)
    .then(user => response.send(user).sendStatus(201))
    .catch(next);
});

router.get('/:id', (request, response, next) => {
    users.findUser(id)
    .then(user => response.send(user).sendStatus(201))
    .catch(next);
});

module.exports = { router };
