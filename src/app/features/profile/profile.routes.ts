import { Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

export const PROFILE_ROUTES: Routes = [
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'orders', component: MyOrdersComponent },
];
