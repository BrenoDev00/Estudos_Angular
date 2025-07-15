import { Component, InputSignal, input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  imports: [ReactiveFormsModule],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.css',
})
export class SelectFieldComponent {
  label: InputSignal<string> = input.required<string>();

  id: InputSignal<string> = input.required<string>();

  name: InputSignal<string> = input.required<string>();

  required: InputSignal<boolean> = input.required<boolean>();

  optionPlaceholder: InputSignal<string> = input.required<string>();

  selectOptions: InputSignal<string[]> = input.required<string[]>();

  control = input.required<FormControl>();
}
