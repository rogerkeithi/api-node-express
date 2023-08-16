import { Sequelize } from 'sequelize';
import dbConfig from './db.config.js';

const sequelize = async () => {
  return new Sequelize(dbConfig);
}

export default sequelize