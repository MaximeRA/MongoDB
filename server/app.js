'use strict';

/* import modules */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const api = require('./routes');
const path = require('path');
const rootPath = path.normalize(`${__dirname}/..`);
require('dotenv').config();

const app = express();


/* Allow CORS */
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
  }

/* configure middleware */
app.set('appPath', path.join(rootPath, 'client'));
app.use(allowCrossDomain);
app.use(express.static('./client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

/* setup routing */
app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
});

/* export app */
module.exports = app;
