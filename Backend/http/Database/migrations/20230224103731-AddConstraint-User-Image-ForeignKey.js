'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('User_Images',{
      type: 'foreign key',
      fields:['image_id'],
      name:'fk_user_image_id',
      references:{
        table:'Images',
        field:'image_id'
      },
      onDelete:'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('User_Images','fk_user_image_id')
  }
};
