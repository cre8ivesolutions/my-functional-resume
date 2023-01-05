"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          user_id: 1,
          name: "John Doe",
          email: "email@email.com",
          password: "password",
        },
        {
          user_id: 2,
          name: "Jane Doe",
          email: "email2@email.com",
          password: "password",
        },
        {
          user_id: 3,
          name: "Tammy Doe",
          email: "tammy@email.com",
          password: "password",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
