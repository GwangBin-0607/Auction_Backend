'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Product.hasMany(models.Product_Image,{foreignKey:"product_id"});
      models.Product.hasMany(models.Product_Price,{foreignKey:"product_id"});
      models.Product.hasOne(models.Product_UpDown,{foreignKey:"product_id"});
      models.Product.belongsTo(models.User,{foreignKey:"user_id"});
    }
  }
  Product.init({
    product_id: {
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    product_name: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
    registerTime:DataTypes.DATE,
    comment:DataTypes.STRING,
    user_id:DataTypes.STRING
  }, {
    timestamps:false,
    sequelize,
    modelName: 'Product',
  });
  return Product;
};