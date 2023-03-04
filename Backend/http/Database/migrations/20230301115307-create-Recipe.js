'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recipes', {
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey:true
      },
      product_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey:true
      },
      buyDate:{
        allowNull:false,
        type:Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      product_price:{
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Recipes');
  }
};

