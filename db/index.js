client = require('./client');

const sync = async() => {
    const SQL = `
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        DROP TABLE IF EXISTS users;

        CREATE TABLE users (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            username VARCHAR(28),
            password VARCHAR(100),
            penname VARCHAR(100),
            author_bio TEXT
        );
    `;
    
    await client.query(SQL);
};

module.exports = {
    sync
};