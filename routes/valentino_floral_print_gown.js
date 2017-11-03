const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('valentino_floral_print_gown', { title: 'Express' });
});

module.exports = router;