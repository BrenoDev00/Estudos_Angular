import { Component, input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
@Component({
  selector: 'app-text-field',
  imports: [ReactiveFormsModule],
  templateUrl: './text-field.component.html'
})
export class TextFieldComponent {
  label = input.required<string>();

  id = input.required<string>();

  control = input.required<FormControl>();
}
