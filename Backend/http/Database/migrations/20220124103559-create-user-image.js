'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_Images', {
      user_id:{
        allowNull: false,
        type: Sequelize.STRING
      },
      image_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey:true
      },
      priority:{
        allowNull: false,
        type:Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User_Images');
  }
};