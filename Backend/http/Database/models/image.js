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
        models.Image.hasMany(models.Product_Image,{foreignKey:"image_id"});
        models.Image.hasMany(models.User_Image,{foreignKey:"image_id"});
    }
  }
  Image.init({
    image_id: {
        primaryKey:true,
        type:DataTypes.INTEGER
      },
    image_url:{
        type:DataTypes.STRING
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'Image',
  });
  return Image;
};