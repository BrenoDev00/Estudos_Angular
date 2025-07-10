import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-text-field',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './text-field.component.html',
})
export class TextFieldComponent {
  label = input.required<string>();

  id = input.required<string>();

  control = input.required<FormControl>();

  class = input<string>();
}
