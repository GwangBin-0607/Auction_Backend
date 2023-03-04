'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Recipe.belongsTo(models.User,{foreignKey:"user_id"});
      models.Recipe.belongsTo(models.Product,{foreignKey:"product_id"});
    }
  }
  Recipe.init({
    user_id: {
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    product_id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    buyDate:DataTypes.DATE,
    product_price:DataTypes.INTEGER
  }, {
    timestamps:false,
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};