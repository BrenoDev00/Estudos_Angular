import {
  Component,
  output,
  input,
  OutputEmitterRef,
  InputSignal,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal',
  imports: [ButtonComponent, NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  isOpen: InputSignal<boolean> = input.required<boolean>();

  onClose: OutputEmitterRef<void> = output<void>();

  closeModal(): void {
    this.onClose.emit();
  }
}
