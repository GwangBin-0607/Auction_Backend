'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product_Prices', {
      product_id: {
        type: Sequelize.INTEGER,
        primaryKey:true
      },
      auction_date: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        primaryKey:true
      },
      price:{
        allowNull:false,
        type:Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Product_Prices');
  }
};