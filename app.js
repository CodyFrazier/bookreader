const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const ejs = require('ejs');
const api = require('./api');
const models = db.Models;

app.engine('html', ejs.renderFile);

app.use(express.json());

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/*', (request, response, next) => {
    response.render(path.join(__dirname, 'index.html'))
});

app.use('/api/users', api.users.router);

//User Authentication:
app.post("/api/auth", (request, response, next) => {
    db.authenticateUser(request.body)
    .then((token) => {
        response.send({ token })
    })
    .catch((authError) => {
        console.log(`Error at Bookreader.app: ${ authError }`);
        const error = Error(`Bookreader.app :: api/auth: not authorized`);
        error.status = 401;
        next(error);
    })
});

//Create New User:
app.post('/api/createUser', (request, response, next) => {
    console.log('posting new user...')
    console.log(request.body);
    models.users.create(request.body)
    .then( user => response.send(user) )
    .catch( next );
});

module.exports = app;