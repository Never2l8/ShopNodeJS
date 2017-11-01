const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('account', { title: 'Express' });
});

router.get('/process', function(req, res, next) {
    const profile = req.query.my_profile;
    console.log(profile);
});

module.exports = router;