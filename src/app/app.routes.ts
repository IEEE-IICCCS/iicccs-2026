import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'committee',
    loadComponent: () =>
      import('./pages/committee/committee.component').then(
        (m) => m.CommitteeComponent,
      ),
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./pages/registration/registration.component').then(
        (m) => m.RegistrationComponent,
      ),
  },
  {
    path: 'author-guidelines',
    loadComponent: () =>
      import('./pages/author-guidelines/author-guidelines.component').then(
        (m) => m.AuthorGuidelinesComponent,
      ),
  },
  {
    path: 'call-for-papers',
    loadComponent: () =>
      import('./pages/call-for-papers/call-for-papers.component').then(
        (m) => m.CallForPapersComponent,
      ),
  },
  {
    path: 'speakers',
    loadComponent: () =>
      import('./pages/speakers/speakers.component').then(
        (m) => m.SpeakersComponent,
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
  },
  {
    path: 'cmt-acknowledgement',
    loadComponent: () =>
      import('./pages/cmt-auth/cmt-auth.component').then(
        (m) => m.CmtAuthComponent,
      ),
  },
  { path: '**', redirectTo: '' },
];
