import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export type FieldType =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'select'
  | 'checkbox'
  | 'textarea'
  | 'array'
  | 'group';

export interface Option {
  label: string;
  value: any;
}

export interface DynamicField {
  type: FieldType;
  name: string;
  label?: string;
  value?: any;
  placeholder?: string;
  options?: Option[];
  validators?: string[];
  asyncValidators?: string[];
  updateOn?: 'change' | 'blur' | 'submit';
  fields?: DynamicField[];
}
