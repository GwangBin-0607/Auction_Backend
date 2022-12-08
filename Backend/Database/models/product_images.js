'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Product_Images.belongsTo(models.Product,{foreignKey:"product_id"});
    }
  }
  Product_Images.init({
    image_url:{
      type:DataTypes.STRING,
      primaryKey:true
    },
    product_id:DataTypes.STRING
  }, {
    timestamps:false,
    sequelize,
    modelName: 'Product_Images',
  });
  return Product_Images;
};