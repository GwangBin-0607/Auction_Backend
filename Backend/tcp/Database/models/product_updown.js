'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_UpDown extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Product_UpDown.belongsTo(models.Product,{foreignKey:"product_id"})
    }
  }
  Product_UpDown.init({
    product_id: {
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    state:{
      type:DataTypes.BOOLEAN
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'Product_UpDown',
  });
  return Product_UpDown;
};