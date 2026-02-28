import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicField } from 'src/app/shared/form/dynamic-field.model';

export interface Step {
  id: string;
  label: string;
  fields: DynamicField[];
}

export interface CheckoutForm {
  version: string;
  steps: Step[];
}

@Injectable({ providedIn: 'root' })
export class CheckoutService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getCheckoutForm(): Observable<CheckoutForm> {
    return this.http.get<CheckoutForm>(`${this.apiUrl}/checkoutForm`);
  }
}
