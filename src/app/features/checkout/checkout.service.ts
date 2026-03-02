import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CheckoutService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}
}
