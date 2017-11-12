const express = require('express');
const router = express.Router();
const models = require('../new_models');
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
    models.item.findAll({})
        .then(items => {
        console.log(items);
        res.render('new_arrivals', {
            title: 'New Arrivals',
            item: items
        });
    });

});

module.exports = router;
