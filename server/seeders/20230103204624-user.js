'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [
      {
       name: 'John Doe',
       email: "email@email.com",
       password: "password"
     },
      {
       name: 'Jane Doe',
       email: "email2@email.com",
       password: "password"
     },
      {
       name: 'Tammy Doe',
       email: "tammy@email.com",
       password: "password"
     },
    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
