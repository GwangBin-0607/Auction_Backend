'use strict';
/** @type {import('sequelize-cli').Migration} */
const path = require('path');
var appRoot = process.env.PWD;
var come = path.resolve(appRoot, "../", "images", "phone1.png");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Product_Images',[{
      product_id:37,
      image_id:36,
      priority:1
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Product_Images',{
      product_id:37
    })
  }
};