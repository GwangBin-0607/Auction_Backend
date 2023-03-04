'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Recipes',[{
      user_id:1,
      product_id:2,
      product_price:30500
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes',{
      user_id:1,
      product_id:2
    })
  }
};
