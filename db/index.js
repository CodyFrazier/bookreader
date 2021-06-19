client = require('./client');

const { authenticateUser } = require('./auth');

const Models = { users } = require('./Models');

const sync = async() => {
    const SQL = `
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        DROP TABLE IF EXISTS users;

        CREATE TABLE users (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            username VARCHAR(28),
            password VARCHAR(100),
            penname VARCHAR(100),
            author_bio TEXT,
            bookmark_list TEXT []
        );
    `;
    
    await client.query(SQL);
};

module.exports = {
    sync,
    Models,
    authenticateUser
};