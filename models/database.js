const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:1986@localhost:5432/postgres');

const dbConfig = {
  forceCreateTable: true
};

sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});
const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

const db = {
    sequelize: sequelize,
    dbConfig: dbConfig
};

// force: true will drop the table if it already exists
User.sync({force: dbConfig.forceCreateTable}).then(() => {
    // Table created
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});

var item = require('./Item');

module.exports = sequelize;