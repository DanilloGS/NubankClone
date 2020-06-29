const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  connectionString: process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD),
  port: process.env.PORT
};

