require('dotenv').config();

//this is currently not being used.
// if i need to use it, uncomment the username and pw in the .env file
console.log(`config.js is workin'`);

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'resume',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'resume_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'resume_production',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
