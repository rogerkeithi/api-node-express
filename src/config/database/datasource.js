import { Sequelize } from 'sequelize';
import dbConfig from './db.config.js';

const sequelize = new Sequelize(dbConfig);
  
const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

export default testDbConnection