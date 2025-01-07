require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    logging:true,
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  }
}


// require('dotenv').config();

// module.exports = {
//   development: {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//   },
//   test: {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//   },
//   production: {
//     use_env_variable: 'DATABASE_URL', // Optional for cloud-hosted databases
//     dialect: 'postgres',
//   },
// };







// require('dotenv').config();

// module.exports = {
//   development: {
//     username: 'postgres',
//     password: 'shivani',  
//     database: 'postgres',
//     host: 'localhost',
//     dialect: "postgres"
//   },
//   test: {
//     username: 'postgres',
//     password: 'shivani',  
//     database: 'postgres',
//     host: 'localhost',
//     dialect: "postgres"
//   },
//   production: {
//     username: 'postgres',
//     password: 'shivani',  
//     database: 'postgres',
//     host: 'localhost',
//     dialect: "postgres"
//   }
// }





