'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Recipes',{
      type: 'foreign key',
      fields:['product_id'],
      name:'fk_recipe_product_id',
      references:{
        table:'Products',
        field:'product_id'
      },
      onDelete:'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Recipes','fk_recipe_product_id')
  }
};
