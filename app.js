const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const cardRouter = require('./routes/cardRoutes');
const cardDownloadRouter = require('./routes/cardDownloadRoutes');
const deckRouter = require('./routes/deckRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next(); // pass control to the next handler
});

app.use('/', indexRouter);
app.use('/card', cardRouter);
app.use('/cardDownload', cardDownloadRouter);
app.use('/deck', deckRouter);

module.exports = app;
