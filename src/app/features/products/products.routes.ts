import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const PRODUCTS_ROUTES: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'details', component: ProductDetailsComponent },
];
