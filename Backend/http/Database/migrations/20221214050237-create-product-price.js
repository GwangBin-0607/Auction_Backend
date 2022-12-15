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
        type: Sequelize.DATE,
        primaryKey:true
      },
      auction_num:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price:{
        allowNull:false,
        type:Sequelize.INTEGER,
        primaryKey:true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Product_Prices');
  }
};