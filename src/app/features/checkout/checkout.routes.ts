import { Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { ReviewOrderComponent } from './review-order/review-order.component';
import { ShippingComponent } from './shipping/shipping.component';

export const CHECKOUT_ROUTES: Routes = [
  { path: 'payment', component: PaymentComponent },
  { path: 'review-order', component: ReviewOrderComponent },
  { path: 'shipping', component: ShippingComponent },
];
