client = require('./client');


/* users table
        CREATE TABLE users (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            username (VARCHAR 28) NOT NULL,
            penname (VARCHAR 100),
            author_bio TEXT
        );
*/
const sync = async() => {
    const SQL = `
        DROP TABLE IF EXISTS users;
    `;
    
    await client.query(SQL);
};

module.exports = {
    sync
};