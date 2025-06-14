import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'asset-discovery',
        loadComponent: () =>
          import('./features/asset-discovery/asset-discovery.component').then(
            (m) => m.AssetDiscoveryComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
