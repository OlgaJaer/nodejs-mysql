const Sequelize = require('sequelize');
require('dotenv').config()

const DB_NAME = process.env.DB_NAME
const USER_NAME = process.env.USER_NAME
const PASSWORD = process.env.PASSWORD

// Option 1: Passing parameters separately
const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql' 
});

// Option 2: Passing a connection URI
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

module.exports = sequelize