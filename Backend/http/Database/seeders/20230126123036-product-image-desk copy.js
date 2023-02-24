'use strict';
/** @type {import('sequelize-cli').Migration} */
const path = require('path');
var appRoot = process.env.PWD;
var come = path.resolve(appRoot, "../", "images", "desk.png");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images',[{
      image_id:6,
      image_url:come
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images',{
      image_id:6
    })
  }
};
