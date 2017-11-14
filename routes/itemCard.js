const express = require('express');
const router = express.Router();
const models = require('../new_models');

router.get('/', function (req, res, next) {
    models.item.findById(req.query.id)
        .then(item => {
        console.log(item);
        res.render('itemCard', {
            title: 'itemCard',
            item: item
        });
    });

});

module.exports = router;