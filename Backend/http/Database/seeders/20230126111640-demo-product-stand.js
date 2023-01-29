'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products',[{
      product_id:8,
      product_name:"Stand",
      product_price:3000
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products',{
      product_id:8
    })
  }
};
