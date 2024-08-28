const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize for MySQL
const sequelize = new Sequelize('worldmap', 'root', 'pass@123', {
  host: 'localhost',
  dialect: 'mysql',
});


module.exports = sequelize;