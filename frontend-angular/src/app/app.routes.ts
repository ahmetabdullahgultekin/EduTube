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
    loadComponent: () => import('./pages/meeting-pages/meetings-page/meetings-page.component').then(m => m.MeetingsPageComponent)
  },
  {
    path: 'meeting-details',
    loadComponent: () => import('./pages/meeting-pages/meeting-details-page/meeting-details-page.component').then(m => m.MeetingDetailsPageComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/company-related-pages/about-page/about-page.component').then(m => m.AboutPageComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/company-related-pages/contact-page/contact-page.component').then(m => m.ContactPageComponent)
  },
  {
    path: 'test',
    loadComponent: () => import('./pages/test-pages/test-page/test-page.component').then(m => m.TestPageComponent)
  },
  {
    path: 'video-test',
    loadComponent: () => import('./pages/test-pages/video-test/video-test.component').then(m => m.VideoTestComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/profile-pages/register-page/register-page.component').then(m => m.RegisterPageComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/profile-pages/login-page/login-page.component').then(m => m.LoginPageComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/profile-pages/dashboard-page/dashboard-page.component').then(m => m.DashboardPageComponent)
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/course-pages/course-list-page/course-list-page.component').then(m => m.CourseListPageComponent)
  },
  {
    path: 'course-details/:id',
    loadComponent: () => import('./pages/course-pages/course-detail-page/course-detail-page.component').then(m => m.CourseDetailPageComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent)
  }
];
