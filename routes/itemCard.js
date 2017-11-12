const express = require('express');
const router = express.Router();
const models = require('../new_models');

router.get('/', function (req, res, next) {
    models.item.findAll({})
        .then(items => {
        console.log(items[2]);
        res.render('itemCard', {
            title: 'itemCard',
            item: items[2]
        });
    });

});

module.exports = router;