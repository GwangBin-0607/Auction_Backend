'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('User_Images',{
      type: 'foreign key',
      fields:['user_id'],
      name:'fk_image_user_id',
      references:{
        table:'Users',
        field:'user_id'
      },
      onDelete:'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('User_Images','fk_image_user_id')
  }
};
