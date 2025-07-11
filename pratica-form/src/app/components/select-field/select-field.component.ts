import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
@Component({
  selector: 'app-select-field',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './select-field.component.html',
})
export class SelectFieldComponent {
  control = input.required<FormControl>();

  id = input.required<string>();

  label = input.required<string>();

  optionLabel = input.required<string>();

  options = input.required<string[]>();

  class = input<string>();
}
