const express = require('express');
const router = express.Router();
const models = require('../new_models');

router.get('/', function (req, res, next) {
    models.state.findAll({}).then(states => {
        res.render('addressBook', {
            title: 'Address Book',
            states: states

        });
    });

});

router.get('/process', function (req, res, next) {
    const addressBook = req.query.addressBook;
    console.log(addressBook);
});


module.exports = router;