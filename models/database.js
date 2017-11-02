const dbConfig = require('dbConfig');
const Sequelize = require('sequelize');
const database = new Sequelize(dbConfig.connectionString);



database
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});
const User = database.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists
User.sync({force: dbConfig.forceCreateTable}).then(() => {
    // Table created
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});

var item = require('./Item');

module.exports = database;