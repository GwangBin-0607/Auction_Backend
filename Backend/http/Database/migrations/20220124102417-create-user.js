'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      user_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_id:{
        type: Sequelize.INTEGER,
        primaryKey:true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

