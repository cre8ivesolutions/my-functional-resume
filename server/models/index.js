'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI)

const db = {};

//This file is not being used to get data from pg to the browser

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user")

// Testing the connection to the connection //this works, if needed
sequelize 
  .authenticate()
  .then(() => console.log`2. Database connected with PG_URI at Models/index.js...`)
  .catch((err) => console.log("Error" + err));

module.exports = db;