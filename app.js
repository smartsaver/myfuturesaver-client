var createError = require('http-errors');
var helmet = require('helmet');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const nunjucks = require('nunjucks');

var indexRouter = require('./src/routes/index');

var app = express();

// helmet / security headers
app.use(helmet());
const sixtyDaysInSeconds = 5184000;
app.use(
  helmet.hsts({
    maxAge: sixtyDaysInSeconds
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
nunjucks.configure('src/views', { autoescape: false, express: app });
app.set('view engine', 'njk');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // if (err.status === 404) res.render('error/404');
  res.render('error/404', { logo: '/images/logo-small.png' });
});

module.exports = app;
