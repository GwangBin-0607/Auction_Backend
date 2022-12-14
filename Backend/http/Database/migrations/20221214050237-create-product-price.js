'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product_Prices', {
      product_id: {
        type: Sequelize.INTEGER
      },
      auction_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      auction_num:{
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Product_Prices');
  }
};