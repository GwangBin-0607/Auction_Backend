'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Product_Prices',[{
      product_id:1,
      auction_num:1,
      price:5000,
      auction_date:new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Product_Prices',{
      product_id:1
    })
  }
};
