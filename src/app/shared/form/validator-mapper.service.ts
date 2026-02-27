import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ValidatorMapperService {
  constructor(private http: HttpClient) {}

  mapValidators(rules: string[] = []): ValidatorFn[] {
    return rules.map((rule) => {
      if (rule === 'required') return Validators.required;
      if (rule === 'email') return Validators.email;
      if (rule.startsWith('minLength')) {
        const len = +rule.split(':')[1];
        return Validators.minLength(len);
      }
      return Validators.nullValidator;
    });
  }

  mapAsyncValidators(rules: string[] = []): AsyncValidatorFn[] {
    return rules.map((rule) => {
      if (rule === 'uniqueEmail') {
        return this.uniqueEmailValidator();
      }

      return () => of(null);
    });
  }

  private uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return this.http
        .get<boolean>(`/api/check-email?email=${control.value}`)
        .pipe(map((exists) => (exists ? { emailTaken: true } : null)));
    };
  }
}
