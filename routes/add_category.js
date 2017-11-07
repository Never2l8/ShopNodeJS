const express = require('express');
const router = express.Router();
const models  = require('../new_models');

router.get('/', function(req, res, next) {
    models.category.findAll({
        attributes: ['name']
    }).then(categories => {
        console.log(categories);
        res.render('add_category', {
            title: 'Add Category',
            categories: categories
        });
    });

});


router.post('/', function(req, res, next) {
    models.category.findAll({
        attributes: ['name']
    }).then(categories => {
        console.log(categories);
        res.render('add_category', {
            title: 'Add Category',
            categories: categories
        });
    });
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++');
    console.log(req.body.category_name);
    console.log(req.body.parent_category);
});



module.exports = router;
