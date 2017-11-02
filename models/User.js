// // get lib
// const Sequelize = require('sequelize');
// // get database
// const database = require('database');
// // get database config
// const dbConfig = require('dbConfig');
//
// const User = database.define('user', {
//     email: {
//         type: Sequelize.STRING
//     },
//     password: {
//         type: Sequelize.STRING
//     }
// });
//
// // force: true will drop the table if it already exists
// User.sync({force: dbConfig.forceCreateTable}).then(() => {
//     // Table created
//     // return User.create({
//     //     firstName: 'John',
//     //     lastName: 'Hancock'
//     // });
// });
//
// module.exports = database;