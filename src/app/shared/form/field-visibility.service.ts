import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';
import { DynamicField } from 'src/app/shared/form/dynamic-field.model';

@Injectable({ providedIn: 'root' })
export class FieldVisibilityService {
  watch(field: DynamicField, form: FormGroup): Observable<boolean> {
    //   if (!field.visibleIf) {
    //     return of(true);
    //   }

    //   const parent = form.get(field.visibleIf.field)!;

    //   return parent.valueChanges.pipe(
    //     startWith(parent.value),
    //     map((value) => value === field.visibleIf!.value),
    //   );
    return of(true);
  }
}
