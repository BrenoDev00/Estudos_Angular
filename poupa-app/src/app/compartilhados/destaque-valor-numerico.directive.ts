import { Directive, afterRender, input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDestaqueValorNumerico]',
})
export class DestaqueValorNumericoDirective {
  appDestaqueValorNumerico = input.required<number>();

  constructor(elemento: ElementRef<HTMLElement>) {
    afterRender(() => {
      if (this.appDestaqueValorNumerico() > 0) {
        elemento.nativeElement.style.color = 'var(--destaque-receita)';
      }

      if (this.appDestaqueValorNumerico() < 0) {
        elemento.nativeElement.style.color = 'var(--destaque-despesa)';
      }
    });
  }
}
