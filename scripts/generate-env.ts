import * as fs from 'fs';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// List of required env variables
const requiredEnvVars = [
  'FIREBASE_API_KEY',
  'FIREBASE_AUTH_DOMAIN',
  'FIREBASE_PROJECT_ID',
  'FIREBASE_STORAGE_BUCKET',
  'FIREBASE_MESSAGING_SENDER_ID',
  'FIREBASE_APP_ID',
  'FIREBASE_MEASUREMENT_ID',
];

for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
}
const targetPath = './src/environments/environment.prod.ts';
const envFileContent = `export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: '${process.env['FIREBASE_API_KEY']}',
    authDomain: '${process.env['FIREBASE_AUTH_DOMAIN']}',
    projectId: '${process.env['FIREBASE_PROJECT_ID']}',
    storageBucket: '${process.env['FIREBASE_STORAGE_BUCKET']}',
    messagingSenderId: '${process.env['FIREBASE_MESSAGING_SENDER_ID']}',
    appId: '${process.env['FIREBASE_APP_ID']}',
    measurementId: '${process.env['FIREBASE_MEASUREMENT_ID']}'
  }
};`;

fs.writeFileSync(targetPath, envFileContent);
console.log('✅ environment.prod.ts file generated successfully.');
