'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Product_Price.belongsTo(models.Product,{foreignKey:"product_id"})
    }
  }
  Product_Price.init({
    product_id: {
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    auction_date:{
      type:DataTypes.DATEONLY,
      primaryKey:true
    },
    price:{
      type:DataTypes.INTEGER
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'Product_Price',
  });
  return Product_Price;
};