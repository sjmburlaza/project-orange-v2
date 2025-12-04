import { Routes } from '@angular/router';

export const PROFILE_ROUTES: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  {
    path: 'orders',
    loadComponent: () =>
      import('./my-orders/my-orders.component').then(
        (m) => m.MyOrdersComponent
      ),
  },
  {
    path: 'account-settings',
    loadComponent: () =>
      import('./account-settings/account-settings.component').then(
        (m) => m.AccountSettingsComponent
      ),
  },
];
