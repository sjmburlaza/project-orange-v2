import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CheckoutConfigService,
  CheckoutStepConfig,
} from 'src/app/features/checkout/checkout-config.service';
import { DynamicFormComponent } from 'src/app/shared/form/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-checkout-step',
  imports: [DynamicFormComponent],
  templateUrl: './checkout-step.component.html',
  styleUrl: './checkout-step.component.scss',
})
export class CheckoutStepComponent {
  route = inject(ActivatedRoute);
  checkoutConfigService = inject(CheckoutConfigService);

  stepConfig!: CheckoutStepConfig;

  ngOnInit() {
    const stepId = this.route.snapshot.url[0]?.path;
    this.stepConfig = this.checkoutConfigService.getStep(stepId)!;
  }

  onSubmit(value: any) {
    console.log(value);
  }
}
