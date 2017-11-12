// must be
const express = require('express');
const router = express.Router();
const models = require('../new_models');

// if you need to use DB
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres:1986@localhost:5432/postgres');
// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

// route mapping itself
router.get('/', function (req, res, next) {
    models.category.findAll({
        attributes: ['name']
    }).then(categories => {
        models.size.findAll({
            attributes: ['name']
        }).then(sizes => {
            res.render('addItem', {
                title: 'Add Item',
                sizes: sizes,
                categories: categories
            });
        });

    }).catch(function (error) {
        res.status(500);
        res.json({error: error, stackError: error.stack});
        res.render('addItem', {title: 'Express'});
    });
});

// route mapping to another address
router.post('/process', function (req, res, next) {
    const title = req.body.item_title;
    console.log(title);

    const brand = req.body.item_brand;
    console.log(brand);

    const brief = req.body.brief;
    console.log(brief);
    // sequelize.import('/models/item');
    // models.Item.create({
    //     name: name
    // });


    const description = req.body.description;
    console.log(description);

    const price = req.body.price;
    console.log("$" + price);

    const color = req.body.item_color;
    console.log(color);

    const size = req.body.size;
    console.log(size);

    const code = req.body.vendor_code;
    console.log(code);
    res.render('index', {title: description})
});

router.post('/', function (req, res, next) {
    models.item.create({
        category: req.body.category_name,
        item_brand: req.body.item_brand,
        item_title: req.body.item_title,
        item_image: req.body.item_image,
        brief: req.body.brief,
        description: req.body.description,
        price: req.body.price,
        item_color: req.body.item_color,
        size: req.body.size,
        vendor_code: req.body.vendor_code
    }).then(function (data) {

        models.category.findAll({
            attributes: ['name']
        }).then(categories => {
            models.size.findAll({
                attributes: ['name']
            }).then(sizes => {
                res.render('addItem', {
                    title: 'Add Item',
                    sizes: sizes,
                    categories: categories
                });
            }).catch(function (error) {
                res.status(500);
                res.json({error: error, stackError: error.stack});
            });
        });
    });


});
// tell system about new routes
module.exports = router;