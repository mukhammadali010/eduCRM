import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname } from 'path';

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

const generateEnvContent = (isProd: boolean) => `export const environment = {
  production: ${isProd},
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

const files = [
  { path: './src/environments/environment.ts', isProd: false },
  { path: './src/environments/environment.prod.ts', isProd: true },
];

for (const file of files) {
  const dir = dirname(file.path);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  writeFileSync(file.path, generateEnvContent(file.isProd));
  console.log(`✅ ${file.path} file generated successfully.`);
}
