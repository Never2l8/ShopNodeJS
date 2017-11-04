const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('statistics', { title: 'Statistics' });
});

module.exports = router;
