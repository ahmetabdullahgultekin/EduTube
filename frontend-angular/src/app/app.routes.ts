import {Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'meetings',
    loadComponent: () => import('./pages/meetings-page/meetings-page.component').then(m => m.MeetingsPageComponent)
  },
  {
    path: 'meeting-details',
    loadComponent: () => import('./pages/meeting-details-page/meeting-details-page.component').then(m => m.MeetingDetailsPageComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page.component').then(m => m.AboutPageComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page.component').then(m => m.ContactPageComponent)
  },
  {
    path: 'test',
    loadComponent: () => import('./pages/test-page/test-page.component').then(m => m.TestPageComponent)
  },
  {
    path: 'video-test',
    loadComponent: () => import('./pages/video-test/video-test.component').then(m => m.VideoTestComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register-page/register-page.component').then(m => m.RegisterPageComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login-page/login-page.component').then(m => m.LoginPageComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent)
  }
];
