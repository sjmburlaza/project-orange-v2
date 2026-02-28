import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicField } from 'src/app/shared/form/dynamic-field.model';
import { FieldComponent } from 'src/app/shared/form/field/field.component';
import { FormFactoryService } from 'src/app/shared/form/form-factory.service';
import { MatAnchor, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, FieldComponent, MatButtonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: DynamicField[] = [];
  @Output() submitted = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private factory: FormFactoryService) {}

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
    this.getArray(field.name).push(this.factory['fb'].group(group));
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
