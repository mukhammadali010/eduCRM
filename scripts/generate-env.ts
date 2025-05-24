import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();
const requiredEnvVars = ['API_KEY', 'AUTH_DOMAIN', 'PROJECT_ID', 'STORAGE_BUCKET', 'MESSAGING_SENDER_ID', 'APP_ID', 'MEASUREMENT_ID'];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}
const targetPath = './src/environments/environment.prod.ts';
const envFileContent = `export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: '${process.env["API_KEY"]}',
    authDomain: '${process.env["AUTH_DOMAIN"]}',
    projectId: '${process.env["PROJECT_ID"]}',
    storageBucket: '${process.env["STORAGE_BUCKET"]}',
    messagingSenderId: '${process.env["MESSAGING_SENDER_ID"]}',
    appId: '${process.env["APP_ID"]}',
    measurementId: '${process.env["MEASUREMENT_ID"]}'
  }
};`;

fs.writeFileSync(targetPath, envFileContent);

