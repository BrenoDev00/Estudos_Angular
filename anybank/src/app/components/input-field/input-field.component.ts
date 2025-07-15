import { Component, input, InputSignal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  imports: [ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
})
export class InputFieldComponent {
  id: InputSignal<string> = input.required<string>();

  type: InputSignal<string> = input.required<string>();

  name: InputSignal<string> = input.required<string>();

  label: InputSignal<string> = input.required<string>();

  placeholder: InputSignal<string> = input.required<string>();

  required: InputSignal<boolean> = input.required<boolean>();

  min: InputSignal<string | undefined> = input<string | undefined>();

  step: InputSignal<string | undefined> = input<string | undefined>();

  control = input.required<FormControl>();
}
