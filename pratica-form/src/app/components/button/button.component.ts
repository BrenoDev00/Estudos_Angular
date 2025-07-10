import { Component, input, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  type = input.required<'button' | 'submit'>();

  variant = input.required<'primary' | 'secondary'>();

  disabled = input<boolean>();

  baseStyle: string =
    'p-[4px] px-[14px] text-white font-semibold cursor-pointer ';

  primaryVariantStyle: string = this.baseStyle + 'bg-violet-800 rounded-md';

  secondaryVariantStyle: string = this.baseStyle + 'bg-blue-800 rounded-full';

  onClick = output<void>();
}
