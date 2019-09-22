const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./config/database');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();

app.get('/', (req, res) => {
    res.send('IM INDEX');
})

app.use('/danhmuc', require('./routes/DanhMuc'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));