'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products',[{
      product_id:4,
      product_name:"Nike Cap",
      product_price:30000,
      comment:"나이키 신발 판매!",
      user_id:1
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products',{
      product_id:4
    })
  }
};
