import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OptionsService {
  constructor(private http: HttpClient) {}

  getOptions(endpoint: string, params?: any) {
    return this.http.get<any[]>('/api' + endpoint, { params });
  }
}
