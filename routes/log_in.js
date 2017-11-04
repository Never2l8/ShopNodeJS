const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('log_in', { title: 'Log In' });
});

module.exports = router;
