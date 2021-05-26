client = require('./client');

const sync = async() => {
    const SQL = `
        DROP TABLE IF EXISTS stories;
    `;
    
    await client.query(SQL);
};

module.exports = {
    sync
};