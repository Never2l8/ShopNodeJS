const express = require('express');
//var models  = require('../models');
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
    res.render('addItem', { title: 'Express' });
});

router.get('/process', function(req, res, next) {
    const title = req.query.entry_title;
    console.log(title);

    const brand = req.query.item_brand;
    console.log(brand);

    const brief = req.query.brief;
    console.log(brief);
    // sequelize.import('/models/item');
    // models.Item.create({
    //     name: name
    // });


    const description = req.query.description;
    console.log(description);

    const price = req.query.price;
    console.log("$" + price);

    const color = req.query.item_color;
    console.log(color);

    const size = req.query.size;
    console.log(size);

    const code = req.query.vendor_code;
    console.log(code);
    res.render('index', {title: description})
});



module.exports = router;