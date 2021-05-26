const { Client } = require('pg');

const client = new Client(process.env.DATABASE_URL || 'postgres://localhost/nomad_bookreader_db');

client.connect();

module.exports = client;