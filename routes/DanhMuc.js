const express = require('express');
const router = express.Router();
const db = require('../config/database');
const DanhMuc = require('../models/DanhMuc');


router.get('/', (req, res) => 
DanhMuc.findAll({attributes: ['id', 'tendanhmuc']})
    .then(danhmuc => {
        console.log(danhmuc);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
    );




module.exports = router;