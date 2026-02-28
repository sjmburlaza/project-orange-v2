import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DynamicField } from 'src/app/shared/form/dynamic-field.model';
import { ValidatorMapperService } from 'src/app/shared/form/validator-mapper.service';

@Injectable({ providedIn: 'root' })
export class FormFactoryService {
  constructor(
    private fb: FormBuilder,
    private validatorMapper: ValidatorMapperService,
  ) {}

  buildForm(fields: any[]): FormGroup {
    const group: any = {};

    fields.forEach((field) => {
      if (field.type === 'array') {
        // FormArray for nested fields
        group[field.name] = new FormArray([]);
        // Optionally initialize with one empty group
        (group[field.name] as FormArray).push(this.buildForm(field.fields));
      } else {
        const validators = this.validatorMapper.mapValidators(
          field.validators || [],
        );
        group[field.name] = new FormControl('', validators);
      }
    });

    return new FormGroup(group);
  }
}
