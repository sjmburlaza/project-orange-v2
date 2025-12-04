import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'manage-orders',
    loadComponent: () =>
      import('./manage-orders/manage-orders.component').then(
        (m) => m.ManageOrdersComponent
      ),
  },
  {
    path: 'manage-products',
    loadComponent: () =>
      import('./manage-products/manage-products.component').then(
        (m) => m.ManageProductsComponent
      ),
  },
];
