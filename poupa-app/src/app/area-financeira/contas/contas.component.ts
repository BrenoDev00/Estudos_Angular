import { Component, input } from '@angular/core';
import { BotaoAdicionarContaComponent } from './botao-adicionar-conta/botao-adicionar-conta.component';
import { ContaComponent } from './conta/conta.component';
import { Conta } from '../compartilhados/conta.model';
import { CardComponent } from '../compartilhados/card/card.component';
@Component({
  selector: 'app-contas',
  imports: [BotaoAdicionarContaComponent, ContaComponent, CardComponent],
  templateUrl: './contas.component.html',
  styleUrl: './contas.component.css',
})
export class ContasComponent {
  contas = input.required<Conta[]>();
}
