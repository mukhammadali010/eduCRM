import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/pages/home-page').then(m => m.HomePageComponent),
  },
  {
    path: 'courses',
    loadComponent: () => import('./features/courses/pages/courses-page').then(m => m.CoursesPageComponent),
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/pages/projects-page').then(m => m.ProjectsPageComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/pages/dashboard-page').then(m => m.DashboardPageComponent),
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/pages/blog-page').then(m => m.BlogPageComponent),
  },
  {
    path: 'not-found',
    loadComponent: () => import('./shared/components/not-found/not-found-page').then(m => m.NotFoundPageComponent),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' },
];
