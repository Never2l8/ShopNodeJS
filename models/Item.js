const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:1986@localhost:5432/postgres');
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

let database = require('./database');
// const force = database.db.dbConfig.forceCreateTable;
// const sequelize = database.db.sequelize;
const Item = sequelize.define('item', {
    name: {
        type: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists
Item.sync({force: true}).then(() => {
    // Table created
    return Item.create({
        name: 'TEST'
    });
});

module.exports = sequelize;