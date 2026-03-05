export type FieldType =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'select'
  | 'select-search'
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
  optionsApi?: string;
  dependsOn?: string;

  visibleIf?: {
    field: string;
    value: any;
  };

  validators?: string[];
  asyncValidators?: string[];
  updateOn?: 'change' | 'blur' | 'submit';
  fields?: DynamicField[];
}
