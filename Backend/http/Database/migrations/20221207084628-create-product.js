'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name:{
        allowNull: false,
        type: Sequelize.STRING
      },
      product_price:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      registerTime:{
        allowNull:false,
        type:Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      comment:{
        allowNull:false,
        type:Sequelize.STRING
      },
      user_id:{
        allowNull:false,
        type:Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};