import { Component, forwardRef, input, InputSignal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  imports: [],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
  ],
})
export class InputFieldComponent implements ControlValueAccessor {
  id: InputSignal<string> = input.required<string>();

  type: InputSignal<string> = input.required<string>();

  name: InputSignal<string> = input.required<string>();

  label: InputSignal<string> = input.required<string>();

  placeholder: InputSignal<string> = input.required<string>();

  required: InputSignal<boolean> = input.required<boolean>();

  min: InputSignal<string | undefined> = input<string | undefined>();

  step: InputSignal<string | undefined> = input<string | undefined>();

  value: any = '';

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateInputValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;

    this.onChange(this.value);
    this.onTouched();
  }
}
