import { envConfig } from './env.config';
export const dbConfig = {
  host: envConfig.dbHost,
  port: envConfig.dbPort,
  database: envConfig.dbName,
  user: envConfig.dbUsername,
  password: envConfig.dbPassword,
  max: 30,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
};
