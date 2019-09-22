const Sequelize = require('sequelize');

module.exports =  new Sequelize('qimlive', 'qim_training', 'qim_training', {
  host: '10.203.192.193',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});