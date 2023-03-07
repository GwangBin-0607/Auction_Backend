'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',[{
      user_id:"1",
      user_name:"Admin"
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users',{
      user_id:"1"
    })
  }
};
