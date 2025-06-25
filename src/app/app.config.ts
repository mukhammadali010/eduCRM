import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { routes } from './app.routes';
// import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // provideFirebaseApp(() => {
    //   try {
    //     return initializeApp(environment.firebaseConfig);
    //   } catch (error) {
    //     console.error('Error initializing Firebase:', error);
    //     return initializeApp(environment.firebaseConfig);
    //   }
    // }),
  ],
};
