import {
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  type: InputSignal<'button' | 'submit'> = input.required<
    'button' | 'submit'
  >();

  label: InputSignal<string> = input.required<string>();

  onClick: OutputEmitterRef<void> = output<void>();
}
