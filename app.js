'use strict';

const PORT = process.env.PORT || 3000;

// requires:   loading libraries
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var uuid = require('uuid');


// app declaration
var app = express();
app.use(express.static('public'));
app.set('view engine', 'jade');
app.set('views', __dirname + '/template');

app.get('/', (rq,res,next) => {
  res.render('index')
});

app.get('/contact', (rq,res,next) => {
  res.render('contact')
});

app.listen(PORT, err => {
  console.log( err || `Server listening on port ${PORT}` );
});
