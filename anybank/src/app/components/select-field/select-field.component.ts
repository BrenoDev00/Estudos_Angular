import { Component, InputSignal, input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  imports: [],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.css',

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectFieldComponent),
      multi: true,
    },
  ],
})
export class SelectFieldComponent implements ControlValueAccessor {
  label: InputSignal<string> = input.required<string>();

  id: InputSignal<string> = input.required<string>();

  name: InputSignal<string> = input.required<string>();

  required: InputSignal<boolean> = input.required<boolean>();

  optionPlaceholder: InputSignal<string> = input.required<string>();

  selectOptions: InputSignal<string[]> = input.required<string[]>();

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

  updateSelectValue(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.value = select.value;

    this.onChange(this.value);
    this.onTouched();
  }
}
