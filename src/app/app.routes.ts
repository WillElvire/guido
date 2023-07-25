import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./features/dashboard/user/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'profil',
    loadComponent: () => import('./features/dashboard/user/profil/profil.page').then( m => m.ProfilPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./features/dashboard/user/search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'profil',
    loadComponent: () => import('./features/dashboard/guide/profil/profil.page').then( m => m.ProfilPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./features/dashboard/guide/menu/menu.page').then( m => m.MenuPage)
  },
];
