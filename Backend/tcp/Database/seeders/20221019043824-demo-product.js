'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Products', 'petName', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Products', 'favoriteColor', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Products', 'petName', { transaction: t }),
        queryInterface.removeColumn('Products', 'favoriteColor', { transaction: t })
      ]);
    });
  }
};
