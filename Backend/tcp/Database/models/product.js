'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Product.hasMany(models.Product_Price,{foreignKey:"product_id"});
    }
  }
  Product.init({
    product_id: {
      primaryKey:true,
      type:DataTypes.STRING
    },
    product_name: DataTypes.STRING,
    product_price: DataTypes.STRING
  }, {
    timestamps:false,
    sequelize,
    modelName: 'Product',
  });
  return Product;
};