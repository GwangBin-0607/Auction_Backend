'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Product_Images',{
      type: 'foreign key',
      fields:['image_id'],
      name:'fk_image_id',
      references:{
        table:'Images',
        field:'image_id'
      },
      onDelete:'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Product_Images','fk_image_id')
  }
};
