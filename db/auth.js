const client = require('./client');

//Check the Database for a user by username:
const authenticateUser = async ({ username, password }) => {
    const user = ( await client.query("SELECT * FROM users WHERE username=$1", [username])).rows[0];
    //Place Password Encoding and Decoding here. ( Let's make sure we can just do it first. ;D )
    return { id: user.id, username: user.username, penname: user.penname };
};

module.exports = {
    authenticateUser
};