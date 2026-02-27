import { Injectable } from '@angular/core';
import { DynamicField } from 'src/app/shared/form/dynamic-field.model';
import { ValidatorMapperService } from 'src/app/shared/form/validator-mapper.service';

@Injectable({ providedIn: 'root' })
export class SchemaTransformerService {
  constructor(private validatorMapper: ValidatorMapperService) {}

  transform(schema: any[]): DynamicField[] {
    return schema.map((field) => ({
      ...field,
      validators: this.validatorMapper.mapAsyncValidators(field.validator),
      asyncValidators: this.validatorMapper.mapAsyncValidators(
        field.asyncValidators,
      ),
      fields: field.fields ? this.transform(field.fields) : undefined,
    }));
  }
}
