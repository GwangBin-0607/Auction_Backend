'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Product_Images','main_image',{
      type:Sequelize.BOOLEAN,
      defaultValue:false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Product_Images','main_image')
  }
};