'use strict';
const dbConfig = require("../config/config");

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI )
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")

module.exports = db;