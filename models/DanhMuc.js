const Sequelize = require('sequelize');
const db = require('../config/database');

const DanhMuc = db.define('danhmuc', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tendanhmuc: {
    type: Sequelize.STRING
  },
})

module.exports = DanhMuc;