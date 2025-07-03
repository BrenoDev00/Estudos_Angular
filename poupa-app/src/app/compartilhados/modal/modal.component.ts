import {
  Component,
  viewChild,
  ElementRef,
  input,
  afterRender,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  modal = viewChild.required<ElementRef<HTMLDialogElement>>('modal');

  aberto = input.required<boolean>();

  constructor() {
    afterRender(() => {
      if (this.aberto()) {
        this.modal().nativeElement.showModal();
      }
    });
  }
}
