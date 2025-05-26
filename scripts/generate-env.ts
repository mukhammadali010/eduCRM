import * as fs from 'fs';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// List of required env variables
const requiredEnvVars = [
  'API_KEY',
  'AUTH_DOMAIN',
  'PROJECT_ID',
  'STORAGE_BUCKET',
  'MESSAGING_SENDER_ID',
  'APP_ID',
  'MEASUREMENT_ID',
];

// Check if all required env variables are present
for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
}

// Generate environment.prod.ts
const targetPath = './src/environments/environment.prod.ts';
const envFileContent = `export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: '${process.env['API_KEY']}',
    authDomain: '${process.env['AUTH_DOMAIN']}',
    projectId: '${process.env['PROJECT_ID']}',
    storageBucket: '${process.env['STORAGE_BUCKET']}',
    messagingSenderId: '${process.env['MESSAGING_SENDER_ID']}',
    appId: '${process.env['APP_ID']}',
    measurementId: '${process.env['MEASUREMENT_ID']}'
  }
};`;

fs.writeFileSync(targetPath, envFileContent);
console.log('✅ environment.prod.ts file generated successfully.');
