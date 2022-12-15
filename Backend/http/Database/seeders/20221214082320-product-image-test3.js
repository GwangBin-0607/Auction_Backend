'use strict';
/** @type {import('sequelize-cli').Migration} */
const path = require('path');
var appRoot = process.env.PWD;
var come = path.resolve(appRoot, "../", "images", "nike2.png");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Product_Images',[{
      product_id:3,
      image_url:come,
      main_image:true
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Product_Images',{
      product_id:3
    })
  }
};
