'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
      // define association here
    // }
  }
  User.init({
    user_id:{
      allowNull: true,     
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, 
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    message: Sequelize.STRING,
    password: Sequelize.STRING, 
    created_at: {
      type: Sequelize.TIMESTAMP,
      allowNull: true,
      DEFAULT: new Date()
    },
    updated_at: {
      type: Sequelize.TIMESTAMP,
      allowNull: true,
      DEFAULT: new Date()
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};