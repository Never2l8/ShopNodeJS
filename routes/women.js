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

router.get('/', function (req, res, next) {
    models.item.findAll({
        where: {
            category: 'women'
        }
    })
        .then(items => {
            console.log(items);
            for (i in items) {
                if (items[i].dataValues.item_image === null) items[i].dataValues.item_image = 'images/no.jpg';
            }
            res.render('catalog', {
                title: 'Women',
                items: items
            });
        });
});

module.exports = router;
