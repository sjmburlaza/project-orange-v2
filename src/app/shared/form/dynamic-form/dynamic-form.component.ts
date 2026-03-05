import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicField } from 'src/app/shared/form/dynamic-field.model';
import { FormFactoryService } from 'src/app/shared/form/form-factory.service';
import { MatButtonModule } from '@angular/material/button';
import { DynamicFieldComponent } from 'src/app/shared/form/dynamic-field/dynamic-field.component';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, DynamicFieldComponent, MatButtonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  factory = inject(FormFactoryService);

  @Input() fields: DynamicField[] = [];
  @Output() submitted = new EventEmitter<any>();

  form!: FormGroup;

  ngOnInit() {
    this.form = this.factory.buildForm(this.fields);
  }

  getArray(name: string): FormArray {
    return this.form.get(name) as FormArray;
  }

  addArrayItem(field: DynamicField) {
    const group: any = {};
    field.fields?.forEach((f) => {
      // group[f.name] = this.factory.buildControl(f);
    });
    // this.getArray(field.name).push(this.factory['fb'].group(group));
  }

  removeArrayItem(name: string, index: number) {
    this.getArray(name).removeAt(index);
  }

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
