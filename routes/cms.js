const express = require('express');
const router = express.Router();
//const auth = require('../main/autorization');

router.get('/', function (req, res, next) {
    res.render('cms', {title: 'Express'});

});

module.exports = router;
