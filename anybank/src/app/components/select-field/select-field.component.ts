import { Component, Input, InputSignal } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-select-field',
  imports: [],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.css',
})
export class SelectFieldComponent {
  label: InputSignal<string> = input.required<string>();

  id: InputSignal<string> = input.required<string>();

  name: InputSignal<string> = input.required<string>();

  optionPlaceholder: InputSignal<string> = input.required<string>();

  selectOptions: InputSignal<string[]> = input.required<string[]>();
}
