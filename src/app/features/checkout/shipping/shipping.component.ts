import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CheckoutService } from 'src/app/features/checkout/checkout.service';
import { DynamicField } from 'src/app/shared/form/dynamic-field.model';
import { DynamicFormComponent } from 'src/app/shared/form/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-shipping',
  imports: [],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss',
})
export class ShippingComponent {}
