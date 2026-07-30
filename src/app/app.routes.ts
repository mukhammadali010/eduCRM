import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  // TODO: point this at a real not-found page once one exists.
  { path: '**', redirectTo: 'home' },
];
