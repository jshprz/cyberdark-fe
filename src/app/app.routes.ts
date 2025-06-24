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
      {
        path: 'vulnerability-scans',
        loadComponent: () =>
          import('./features/vulnerability-scans/vulnerability-scans.component').then(
            (m) => m.VulnerabilityScansComponent,
          ),
      },
      {
        path: 'risk-scoring',
        loadComponent: () =>
          import('./features/risk-scoring/risk-scoring.component').then(
            (m) => m.RiskScoringComponent,
          ),
      },
      {
        path: 'monitoring-and-alerts',
        loadComponent: () =>
          import('./features/monitoring-and-alerts/monitoring-and-alerts.component').then(
            (m) => m.MonitoringAndAlertsComponent,
          ),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./features/reports/reports.component').then((m) => m.ReportsComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/settings/settings.component').then((m) => m.SettingsComponent),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
