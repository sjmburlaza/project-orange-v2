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
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];
  hidden?: (formValue: any) => boolean;
  fields?: DynamicField[];
}
