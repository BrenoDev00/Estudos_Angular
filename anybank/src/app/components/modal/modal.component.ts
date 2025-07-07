import {
  Component,
  viewChild,
  ElementRef,
  model,
  ModelSignal,
  afterRender,
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
  modal = viewChild.required<ElementRef<HTMLDialogElement>>('modal');

  isOpen: ModelSignal<boolean> = model.required<boolean>();

  constructor() {
    afterRender(() => {
      if (this.isOpen()) {
        this.modal().nativeElement.showModal();
      }

      if (!this.isOpen()) {
        this.modal().nativeElement.close();
      }
    });
  }

  closeModal(): void {
    this.isOpen.set(false);
  }
}
