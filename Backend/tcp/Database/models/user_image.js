'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User_Image.belongsTo(models.User,{foreignKey:"user_id"});
      models.User_Image.belongsTo(models.Image,{foreignKey:"image_id"});
    }
  }
  User_Image.init({
    image_id:{
     type:DataTypes.INTEGER,
     primaryKey:true 
    },
    user_id:DataTypes.INTEGER,
    priority:DataTypes.INTEGER
  }, {
    timestamps:false,
    sequelize,
    modelName: 'User_Image',
  });
  return User_Image;
};