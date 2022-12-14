'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Product_Prices',{
      type: 'foreign key',
      fields:['product_id'],
      name:'fk_product_price_id',
      references:{
        table:'Products',
        field:'product_id'
      },
      onDelete:'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Product_Prices','fk_product_price_id')
  }
};
