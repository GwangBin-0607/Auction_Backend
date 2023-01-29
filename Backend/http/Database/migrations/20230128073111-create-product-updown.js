'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product_UpDowns', {
      product_id: {
        type: Sequelize.INTEGER,
        primaryKey:true
      },
      state: {
        type: Sequelize.BOOLEAN,
        defaultValue:0
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Product_UpDowns');
  }
};