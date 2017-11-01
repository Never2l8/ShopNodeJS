const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('cart', { title: 'Express' });
});

router.get('/process', function(req, res, next) {
    const cart = req.query.my_cart;
    console.log(cart);
});

module.exports = router;