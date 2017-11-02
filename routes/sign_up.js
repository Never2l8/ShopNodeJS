const express = require('express');
const router = express.Router();
//const database = require('../models/database');
const models  = require('../new_models');

router.get('/', function (req, res, next) {
    res.render('sign_up', {title: 'Sign Up'});
});

router.get('/process', function (req, res, next) {
    const email = req.query.email;
    console.log(email);
    const password = req.query.password;
    console.log(password);
    const repeat_password = req.query.repeat_password;
    console.log(repeat_password);

    models.user.create({
        email: email,
        password: password
    }).then(function() {
        res.render('sign_up_success', {title: 'Success'});
    });
});


module.exports = router;