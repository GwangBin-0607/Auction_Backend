'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return  await queryInterface.bulkInsert('Users', [{
      firstName: 'Student',
      lastName: 'Doe',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

   down : async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users',{
        firstName:'Student'
    });
  }
};
