'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Images', {
      image_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image_id:{
        type: Sequelize.INTEGER,
        primaryKey:true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Images');
  }
};

