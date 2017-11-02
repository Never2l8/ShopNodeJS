const express = require('express');
const router = express.Router();

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

router.get('/', function(req, res, next) {
    res.render('sign_up', { title: 'Sign Up' });
});

module.exports = router;