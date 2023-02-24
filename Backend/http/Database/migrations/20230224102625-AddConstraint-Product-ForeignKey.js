'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Products',{
      type: 'foreign key',
      fields:['user_id'],
      name:'fk_user_id',
      references:{
        table:'Users',
        field:'user_id'
      },
      onDelete:'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Products','fk_user_id')
  }
};
