'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
  
      book_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      author: {
        type: Sequelize.STRING,
         allowNull:false
      },
      year_published: {
        type: Sequelize.SMALLINT,
          allowNull:false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};