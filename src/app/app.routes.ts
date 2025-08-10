import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},

  {
    path: 'documents',
    loadComponent: () => import('./pages/documents/documents.component').then(m => m.DocumentsComponent)
  },
  {
    path: 'documents/:id',
    loadComponent: () => import('./pages/documents/document-detail.component').then(m => m.DocumentDetailComponent)
  },
  {path: 'qa', loadComponent: () => import('./pages/qa/qa.component').then(m => m.QaComponent)},
  {path: 'users', loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent)},
  {path: 'auth/login', loadComponent: () => import('./pages/auth/login.component').then(m => m.LoginComponent)},
  {
    path: 'auth/register',
    loadComponent: () => import('./pages/auth/register.component').then(m => m.RegisterComponent)
  },

  {path: '**', redirectTo: 'auth/login'}
];
