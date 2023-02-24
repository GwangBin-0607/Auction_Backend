'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_Images',[{
      user_id:1,
      image_id:41,
      priority:1
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_Images',{
      user_id:1
    })
  }
};
