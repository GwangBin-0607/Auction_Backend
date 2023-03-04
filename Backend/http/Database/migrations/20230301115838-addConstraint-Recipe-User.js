'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Recipes',{
      type: 'foreign key',
      fields:['user_id'],
      name:'fk_recipe_user_id',
      references:{
        table:'Users',
        field:'user_id'
      },
      onDelete:'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Recipes','fk_recipe_user_id')
  }
};
