import { Component, inject, OnInit } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import {
  CheckoutConfigService,
  CheckoutStepConfig,
} from 'src/app/features/checkout/checkout-config.service';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-checkout',
  imports: [MatStepperModule, RouterOutlet, MatAnchor],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit {
  checkoutConfig = inject(CheckoutConfigService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  steps: CheckoutStepConfig[] = [];
  currentIndex = 0;

  ngOnInit() {
    this.steps = this.checkoutConfig.steps;

    // sync stepper with route
    this.route.firstChild?.url.subscribe(() => this.updateIndex());
    this.router.events.subscribe(() => this.updateIndex());

    // default to first step
    if (!this.route.firstChild) {
      this.router.navigate(['/checkout', this.steps[0].id]);
    }
  }

  updateIndex() {
    const stepId = this.route.firstChild?.snapshot.url[0]?.path;
    this.currentIndex = this.steps.findIndex((s) => s.id === stepId);
  }

  goToStep(step: CheckoutStepConfig) {
    this.router.navigate(['/checkout', step.id]);
  }

  next() {
    const nextStep = this.steps[this.currentIndex + 1];
    if (nextStep) this.goToStep(nextStep);
  }

  previous() {
    const prevStep = this.steps[this.currentIndex - 1];
    if (prevStep) this.goToStep(prevStep);
  }
}
