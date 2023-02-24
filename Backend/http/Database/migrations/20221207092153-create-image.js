'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Images', {
      image_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      product_id:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      image_id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Images');
  }
};