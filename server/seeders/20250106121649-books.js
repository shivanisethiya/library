'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('books',[
    {
      name:'The Hobbit',
      author:'J.R.R tolken ',
      year_published:1937
    },
    {
      name:'The Harry Poter',
      author:'J.R.R rowlien ',
      year_published:1925
    },
    {
      name:'The Great Priyanshi',
      author:'F. Scott ',
      year_published:1935
    },
    {
      name:'The Greate Shivaji ',
      author:'George alkin ',
      year_published:1949
    }
  ])
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('books', null, {});
     
  }
};
