const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const ProductRoute = require('./routes/product');

dotenv.config('.env');

const app = express();

//Set template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

// 1) GLOBAL MIDDLEWARES

//Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// 2) ROUTES
app.use('/', ProductRoute);
// app.get('/post', (req, res) => {
//   res.send('hi');
// });

module.exports = app;
