import { Routes } from '@angular/router';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./product-list/product-list.component').then(
        (m) => m.ProductListComponent
      ),
  },
  {
    path: 'details',
    loadComponent: () =>
      import('./product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent
      ),
  },
];
