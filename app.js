var express = require('express');
var logger = require('morgan');
require("dotenv").config();
const db = require('./db/db')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userFormRouter = require('./routes/forms')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/forms',userFormRouter)

module.exports = app;
