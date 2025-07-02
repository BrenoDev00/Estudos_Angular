import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { CardComponent } from '../compartilhados/card/card.component';

@Component({
  selector: 'app-saldo',
  imports: [CurrencyPipe, CardComponent],
  templateUrl: './saldo.component.html',
  styleUrl: './saldo.component.css',
})
export class SaldoComponent {
  saldo = input.required<number>();
}
