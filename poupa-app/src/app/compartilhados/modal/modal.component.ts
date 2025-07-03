import {
  Component,
  viewChild,
  ElementRef,
  input,
  afterRender,
  model,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  modal = viewChild.required<ElementRef<HTMLDialogElement>>('modal');

  aberto = model.required<boolean>();

  constructor() {
    afterRender(() => {
      if (this.aberto()) {
        this.modal().nativeElement.showModal();
      }

      if (!this.aberto()) {
        this.modal().nativeElement.close();
      }
    });
  }

  fecharModal(): void {
    this.aberto.set(false);
  }
}
