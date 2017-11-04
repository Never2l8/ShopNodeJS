const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('men', { title: 'Men' });
});

module.exports = router;
