import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import readlineSync from 'readline-sync';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envFilePath = path.resolve(__dirname, '../.env');

if (!fs.existsSync(envFilePath)) {
  console.warn('.env file is missing! Creating a new one...');
  fs.writeFileSync(envFilePath, '');
}

dotenv.config({ path: envFilePath });

const requiredEnvVars = [
  'API_PORT',
  'DB_USERNAME',
  'DB_HOST',
  'DB_PORT',
  'DB_NAME',
  'DB_PASSWORD',
  'ALLOWED_ORIGINS',
];

const missingVars = requiredEnvVars.filter((key) => !process.env[key]);

if (missingVars.length > 0) {
  console.log('Missing environment variables detected!');
  let newEnvData = fs.readFileSync(envFilePath, 'utf8');

  missingVars.forEach((key) => {
    const value = readlineSync.question(`Enter value for ${key}: `);
    if (value.trim()) {
      newEnvData += `\n${key}=${value.trim()}`;
    }
  });

  fs.writeFileSync(envFilePath, newEnvData, 'utf8');
  console.log('Environment variables saved successfully!');

  dotenv.config({ path: envFilePath });
}

interface envConfigType {
  apiPort: number;
  dbHost: string;
  dbPort: number;
  dbName: string;
  dbUsername: string;
  dbPassword: string;
  allowedOrigins: string[];
}

export const envConfig: envConfigType = {
  apiPort: Number(process.env.API_PORT) || 3000,
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: Number(process.env.DB_PORT) || 5432,
  dbName: process.env.DB_NAME || '',
  dbUsername: process.env.DB_USERNAME || '',
  dbPassword: process.env.DB_PASSWORD || '',
  allowedOrigins: process.env.ALLOWED_ORIGINS?.split(',') || [],
};

console.log('Configuration Loaded Successfully:', envConfig);
