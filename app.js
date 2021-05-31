const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const ejs = require('ejs');

app.engine('html', ejs.renderFile);

app.use(express.json());

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/*', (request, response, next) => {
    response.render(path.join(__dirname, 'index.html'))
});

module.exports = app;