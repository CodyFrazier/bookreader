const client = require('../client');

const users = {
    readAll: async() => {
        return (await client.query('SELECT * FROM users')).rows;
    },
    create: async({ username, password, penname }) => {
        const SQL = `INSERT INTO users (username, password, penname) values ($1, $2, $3) RETURNING *`;

        return (await client.query(SQL, [username, password, penname])).rows[0];
    },
    updateUser: async({ username, password, penname, author_bio, bookmark_list, id }) => {
        const SQL = `UPDATE users SET username=$1, password=$2, penname=$3, author_bio=$4, bookmark_list=$5 WHERE id=$6 RETURNING *`;

        return (await client.query(SQL, [username, password, penname, author_bio, bookmark_list, id])).rows[0];
    },
    findUser: async({ username, password }) => {
        return (await client.query(`SELECT * FROM users WHERE username=$1 & password=$2`, [username, password])).rows[0];
    }
}

module.exports = users;