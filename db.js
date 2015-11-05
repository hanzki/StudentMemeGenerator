var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.DATABASE_URL || "postgres://username:password@host:port/dbname");

module.exports = sequelize;
