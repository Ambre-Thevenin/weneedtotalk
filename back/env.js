require('dotenv').config();

const getEnv = (variable) => {
  const value = process.env[variable];
  return value;
};


const SERVER_PORT = getEnv('SERVER_PORT');
const DB_HOST = getEnv('DB_HOST');
const DB_PORT = getEnv('DB_PORT');
const DB_USER = getEnv('DB_USER');
const DB_PASSWORD = getEnv('DB_PASSWORD');
const DB_NAME = getEnv('DB_NAME');

module.exports = {
  SERVER_PORT,
  DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME
};
