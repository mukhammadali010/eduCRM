import * as fs from 'fs';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// List of required env variables
const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
  'VITE_FIREBASE_MEASUREMENT_ID',
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
    apiKey: '${process.env['VITE_FIREBASE_API_KEY']}',
    authDomain: '${process.env['VITE_FIREBASE_AUTH_DOMAIN']}',
    projectId: '${process.env['VITE_FIREBASE_PROJECT_ID']}',
    storageBucket: '${process.env['VITE_FIREBASE_STORAGE_BUCKET']}',
    messagingSenderId: '${process.env['VITE_FIREBASE_MESSAGING_SENDER_ID']}',
    appId: '${process.env['VITE_FIREBASE_APP_ID']}',
    measurementId: '${process.env['VITE_FIREBASE_MEASUREMENT_ID']}'
  }
};`;

fs.writeFileSync(targetPath, envFileContent);
console.log('✅ environment.prod.ts file generated successfully.');
