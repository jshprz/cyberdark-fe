import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthComponent } from './features/auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
        data: { title: 'Dashboard' },
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'asset-discovery',
        title: 'Asset Discovery',
        loadComponent: () =>
          import('./features/asset-discovery/asset-discovery.component').then(
            (m) => m.AssetDiscoveryComponent,
          ),
        data: { title: 'Asset Discovery' },
      },
      {
        path: 'vulnerability-scans',
        title: 'Vulnerability Scans',
        loadComponent: () =>
          import('./features/vulnerability-scans/vulnerability-scans.component').then(
            (m) => m.VulnerabilityScansComponent,
          ),
        data: { title: 'Vulnerability Scans' },
      },
      {
        path: 'reports',
        title: 'Reports',
        loadComponent: () =>
          import('./features/reports/reports.component').then((m) => m.ReportsComponent),
        data: { title: 'Reports' },
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
