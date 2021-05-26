const db = require('./db');
const app = require('./app');

const PORT = process.env.PORT || 3000;

//console.log(`Preparing to sync on port ${ PORT }...`);

db.sync()
.then(() => {
    app.listen(PORT, () => {
        return console.log(`Listening On Port ${ PORT }`);
    })
});