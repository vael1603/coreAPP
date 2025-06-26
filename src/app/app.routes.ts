import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/signin',
    pathMatch: 'full',
  },
  {
    path: 'auth/signin',
    pathMatch: 'full',

    loadComponent: () =>
      import('./features/auth/components/sign-in/sign-in.component').then(
        (m) => m.SignInComponent,
      ),
  },

  {
    path: 'auth/signup',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/auth/components/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent,
      ),
  },
  
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/home/components/landing/landing.component').then(
        (m) => m.LandingComponent,
      ),
  }
];
