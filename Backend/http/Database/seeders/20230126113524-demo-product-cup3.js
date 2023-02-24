'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products',[{
      product_id:34,
      product_name:"Cups",
      product_price:3000,
      comment:"나이키 신발 판매!",
      user_id:1
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products',{
      product_id:34
    })
  }
};
