'use strict';

const { test } = require('../config/config');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products',[{
      product_id:1,
      product_name:"test",
      product_price:3000
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products',{
      product_id:1
    })
  }
};