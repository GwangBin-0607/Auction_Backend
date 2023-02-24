'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Product_Image.belongsTo(models.Product,{foreignKey:"product_id"});
      models.Product_Image.belongsTo(models.Image,{foreignKey:"image_id"});
    }
  }
  Product_Image.init({
    image_id:{
     type:DataTypes.INTEGER,
     primaryKey:true 
    },
    product_id:DataTypes.INTEGER,
    priority:DataTypes.INTEGER
  }, {
    timestamps:false,
    sequelize,
    modelName: 'Product_Image',
  });
  return Product_Image;
};