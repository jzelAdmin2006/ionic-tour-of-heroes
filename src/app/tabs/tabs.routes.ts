import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'heroes',
        loadComponent: () =>
          import('../heroes/heroes-page.component').then((m) => m.HeroesPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../settings/settings-page.component').then((m) => m.SettingsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/heroes',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/heroes',
    pathMatch: 'full',
  },
];
