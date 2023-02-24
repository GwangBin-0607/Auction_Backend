'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product_Images', {
      product_id:{
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Product_Images');
  }
};