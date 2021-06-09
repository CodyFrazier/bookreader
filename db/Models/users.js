const client = require('../client');

const users = {
    readAll: async() => {
        return (await client.query('SELECT * FROM users')).rows;
    },
    create: async({ username, password, penname, author_bio }) => {
        const SQL = `INSERT INTO users (username, password, penname, author_bio) values ($1, $2, $3, $4) RETURNING *`;

        return (await client.query(SQL, [username, password, penname, author_bio])).rows[0];
    },
    updateUser: async({ username, password, penname, author_bio, id }) => {
        const SQL = `UPDATE users SET username=$1, password=$2, penname=$3, author_bio=$4 WHERE id=$5 RETURNING *`;

        return (await client.query(SQL, [username, password, penname, author_bio, id])).rows[0];
    },
    findUser: async({ username, password }) => {
        return (await client.query(`SELECT * FROM users WHERE username=$1 & password=$2`, [username, password])).rows[0];
    }
}

module.exports = users;