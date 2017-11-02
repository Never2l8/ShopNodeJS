const Sequelize = require('sequelize');
const database = require('database');

const dbConfig = require('dbConfig');

const Item = sequelize.define('item', {
    name: {
        type: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists
Item.sync({force: dbConfig.forceCreateTable}).then(() => {
    // Table created
    return Item.create({
        name: 'TEST'
    });
});

module.exports = database;