const express = require('express');
const router = express.Router();
const models = require('../new_models');

router.get('/', function (req, res, next) {
    models.category.findAll({
        attributes: ['id', 'name']
    }).then(categories => {
        console.log(categories);
        res.render('add_category', {
            title: 'Add Category',
            categories: categories
        });
    });

});


router.post('/', function (req, res, next) {
    const path = 'images/categories/' + req.body.category_name + req.body.parent_category + '.jpg';
    req.files.image.mv('public/' + path, function (err) {
        if (err)
            return res.status(500).send(err);
        models.category.create({
            name: req.body.category_name,
            image: path,
            parentId: req.body.parent_category
        }).then(function (data) {
            models.category.findAll({
                attributes: ['id', 'name']
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
        }).catch(function (error) {
            res.status(500);
            res.json({error: error, stackError: error.stack});
        });
    });
});


module.exports = router;
