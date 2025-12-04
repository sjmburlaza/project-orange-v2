import { Routes } from '@angular/router';

export const CHECKOUT_ROUTES: Routes = [
  { path: '', redirectTo: 'shipping', pathMatch: 'full' },
  {
    path: 'shipping',
    loadComponent: () =>
      import('./shipping/shipping.component').then((m) => m.ShippingComponent),
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('./payment/payment.component').then((m) => m.PaymentComponent),
  },
  {
    path: 'review-order',
    loadComponent: () =>
      import('./review-order/review-order.component').then(
        (m) => m.ReviewOrderComponent
      ),
  },
];
