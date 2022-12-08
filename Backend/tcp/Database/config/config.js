require('dotenv').config();
const env = process.env;
module.exports = {
  "development": {
    "username": env.DEV_USERNAME,
    "password": env.DEV_PASSWORD,
    "database": env.DEV_DATABASE,
    "host": env.DEV_HOST,
    "port":env.DEV_PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": env.PROD_USERNAME,
    "password": env.PROD_PASSWORD,
    "database": env.PROD_DATABASE,
    "host": env.PROD_HOST,
    "port": env.PROD_PORT,
    "dialect": "mysql"
  }
}
