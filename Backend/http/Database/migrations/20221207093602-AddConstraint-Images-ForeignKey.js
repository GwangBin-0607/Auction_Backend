'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Images',{
      type: 'foreign key',
      fields:['product_id'],
      name:'fk_product_id',
      references:{
        table:'Products',
        field:'product_id'
      },
      onDelete:'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Images','fk_product_id')
  }
};
