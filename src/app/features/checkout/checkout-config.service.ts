import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DynamicField } from 'src/app/shared/form/dynamic-field.model';

export interface CheckoutStepConfig {
  id: string;
  label: string;
  fields: DynamicField[];
}

export interface CheckoutForm {
  version: string;
  steps: CheckoutStepConfig[];
}

@Injectable({ providedIn: 'root' })
export class CheckoutConfigService {
  private apiUrl = '/api';

  steps: CheckoutStepConfig[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  async loadCheckoutConfig() {
    const response: any = await firstValueFrom(
      this.http.get<CheckoutForm>(`${this.apiUrl}/checkoutForm`),
    );
    console.log('response', response);

    this.steps = response.steps;
  }

  getStep(id: string) {
    return this.steps.find((s) => s.id === id);
  }
}
