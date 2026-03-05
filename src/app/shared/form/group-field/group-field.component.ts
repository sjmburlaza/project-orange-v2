import { Component, forwardRef, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicField } from 'src/app/shared/form/dynamic-field.model';
import { DynamicFieldComponent } from 'src/app/shared/form/dynamic-field/dynamic-field.component';

@Component({
  selector: 'app-group-field',
  imports: [ReactiveFormsModule, forwardRef(() => DynamicFieldComponent)],
  templateUrl: './group-field.component.html',
  styleUrl: './group-field.component.scss',
})
export class GroupFieldComponent {
  @Input() field!: DynamicField;
  @Input() form!: FormGroup;

  get group(): FormGroup {
    return this.form.get(this.field.name) as FormGroup;
  }
}
