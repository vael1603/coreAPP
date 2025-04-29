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
];
