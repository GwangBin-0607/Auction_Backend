'use strict';
/** @type {import('sequelize-cli').Migration} */
const path = require('path');
var appRoot = process.env.PWD;
var come = path.resolve(appRoot, "../", "images", "phone2.png");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Product_Images',[{
      product_id:38,
      image_id:37,
      priority:1
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Product_Images',{
      product_id:38
    })
  }
};
