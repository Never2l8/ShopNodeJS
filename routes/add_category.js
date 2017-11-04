const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('add_category', { title: 'Add Category' });
});

module.exports = router;
