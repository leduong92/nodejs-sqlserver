const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./config/databaseps');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))
