var dotenv = require('dotenv');

dotenv.load();


module.exports = {
  client: 'mysql',
  connection: process.env.DATABASE_URL || {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD || "bakl", 
    database:"mega_boil" // process.env.DB_NAME
  }
};
