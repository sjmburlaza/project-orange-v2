import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ArrayFieldComponent } from 'src/app/shared/form/array-field/array-field.component';
import { DynamicField } from 'src/app/shared/form/dynamic-field.model';
import { InputFieldComponent } from 'src/app/shared/form/input-field/input-field.component';
import { SelectFieldComponent } from 'src/app/shared/form/select-field/select-field.component';

@Component({
  selector: 'app-field',
  imports: [InputFieldComponent, SelectFieldComponent, ArrayFieldComponent],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldComponent {
  @Input() field!: DynamicField;
  @Input() form!: FormGroup;

  @Output() addArray = new EventEmitter<void>();
  @Output() removeArray = new EventEmitter<any>();
}
