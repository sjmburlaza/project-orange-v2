import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

export const ADMIN_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manage-orders', component: ManageOrdersComponent },
  { path: 'manage-products', component: ManageProductsComponent },
];
