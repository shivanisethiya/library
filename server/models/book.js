'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
  
    static associate(models) {
 
    }
  }
  Book.init({
    book_id:
    {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
     
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },  
    author:
    {
      type: DataTypes.STRING,
      allowNull:false
    },
    year_published:
    {
       type:DataTypes.SMALLINT,
       allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'Book',
    tableName:'books',
    timestamps:false
  });
  return Book;
};