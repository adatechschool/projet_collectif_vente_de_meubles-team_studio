var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var furnituresRouter = require('./routes/furnitures');
var usersRouter = require('./routes/users');
var registrationRouter = require('./routes/registration');
var adminRouter = require('./routes/admin');
var loginRouter = require('./routes/login');
var imagesRouter = require('./routes/images')
var furnitureIdRouter = require('./routes/furnitureId');
var furnitureTypeRouter = require('./routes/furnituresType');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());//parse incoming Request Object as a JSON Object
app.use(express.urlencoded({ extended: true }));//parse incoming Request Object if object, with nested objects, or generally any type.
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/furnitures', furnituresRouter);
app.use('/users', usersRouter);
app.use('/registration', registrationRouter);
app.use('/admin', adminRouter);
app.use('/login', loginRouter);
app.use('/images/:imageName', imagesRouter);
app.use('/', furnitureIdRouter);
app.use('/', furnitureTypeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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
