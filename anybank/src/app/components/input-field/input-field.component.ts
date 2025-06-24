import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-input-field',
  imports: [],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
})
export class InputFieldComponent {
  type: InputSignal<string> = input.required<string>();

  name: InputSignal<string> = input.required<string>();

  placeholder: InputSignal<string> = input.required<string>();

  required: InputSignal<boolean> = input.required<boolean>();

  label: InputSignal<string> = input.required<string>();

  id: InputSignal<string> = input.required<string>();
}
