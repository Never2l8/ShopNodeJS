var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');

var index = require('./routes/index');
var users = require('./routes/users');
var addItem = require('./routes/addItem');
var account = require('./routes/account');
var cart = require('./routes/cart');
var sign_up = require('./routes/sign_up');
var new_arrivals = require('./routes/new_arrivals');
var itemCard = require('./routes/itemCard');
const cms = require('./routes/cms');
const add_category = require('./routes/add_category');
const statistics = require('./routes/statistics');
const orders = require('./routes/orders');
const log_in = require('./routes/log_in');
const women = require('./routes/women');
const men = require('./routes/men');
const clearance = require('./routes/clearance');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/cms', cms);
app.use('/users', users);
app.use('/addItem', addItem);
app.use('/account', account);
app.use('/cart', cart);
app.use('/sign_up', sign_up);
app.use('/new_arrivals', new_arrivals);
app.use('/itemCard', itemCard);
app.use('/add_category', add_category);
app.use('/statistics', statistics);
app.use('/orders', orders);
app.use('/log_in', log_in);
app.use('/women', women);
app.use('/men', men);
app.use('/clearance', clearance);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
//const connect = "postgres://postgres:1986@localhost:5432";
