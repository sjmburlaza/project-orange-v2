import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CheckoutService } from 'src/app/features/checkout/checkout.service';
import { DynamicField } from 'src/app/shared/form/dynamic-field.model';
import { DynamicFormComponent } from 'src/app/shared/form/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-shipping',
  imports: [DynamicFormComponent],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss',
})
export class ShippingComponent implements OnInit {
  fields: DynamicField[] | undefined;

  constructor(
    private checkoutService: CheckoutService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.checkoutService
      .getCheckoutForm()
      .pipe(
        map(
          (form) => form.steps.find((step) => step.id === 'shipping')?.fields,
        ),
      )
      .subscribe({
        next: (fields) => (this.fields = fields),
        error: (err) => console.error('Error loading fields', err),
      });
  }

  onSubmit(value: any) {
    console.log(value);
  }
}
