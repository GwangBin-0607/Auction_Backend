'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Image.belongsTo(models.Product,{foreignKey:"product_id"});
    }
  }
  Image.init({
    image_url:{
      type:DataTypes.STRING
    },
    image_id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id:DataTypes.INTEGER,
    priority:DataTypes.INTEGER
  }, {
    timestamps:false,
    sequelize,
    modelName: 'Image',
  });
  return Image;
};