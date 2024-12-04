import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { authEnterGuard } from './core/guards/auth-enter.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/layouts.routes').then(m => m.layoutRoutes),
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent),
    canActivate: [authEnterGuard],
    children: [
      {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/auth/register/register.component').then(m => m.RegisterComponent)
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./pages/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent)
  }
];
