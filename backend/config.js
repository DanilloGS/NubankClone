const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  connectionString: process.env.DATABASE
    .replace('<dbname>', process.env.DATABASE_NAME)
    .replace('<password>',process.env.DATABASE_PASSWORD),
  port: process.env.PORT
};